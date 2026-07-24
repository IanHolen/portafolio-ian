import { NextResponse } from "next/server";

const GITHUB_USER = "IanHolen";

interface Day {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const LEVEL_MAP: Record<string, 0 | 1 | 2 | 3 | 4> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

// Preferred: official GraphQL calendar (includes PRIVATE contributions when the
// token belongs to the profile owner). Requires GITHUB_TOKEN in the environment.
async function fromGraphQL(): Promise<{ total: number; days: Day[] } | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  const query = `query($login:String!){
    user(login:$login){
      contributionsCollection{
        contributionCalendar{
          totalContributions
          weeks{ contributionDays{ date contributionCount contributionLevel } }
        }
      }
    }
  }`;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { login: GITHUB_USER } }),
      next: { revalidate: 1800 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    const cal =
      json?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!cal) return null;

    const days: Day[] = [];
    for (const week of cal.weeks ?? []) {
      for (const d of week.contributionDays ?? []) {
        days.push({
          date: d.date,
          count: d.contributionCount,
          level: LEVEL_MAP[d.contributionLevel] ?? 0,
        });
      }
    }
    return { total: cal.totalContributions ?? 0, days: days.slice(-371) };
  } catch {
    return null;
  }
}

// Fallback: public calendar scraper (no auth). Reflects private contributions
// only if the profile's "Private contributions" setting is enabled.
async function fromJogruber(): Promise<{ total: number; days: Day[] } | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`,
      { next: { revalidate: 1800 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const contributions: Day[] = Array.isArray(data.contributions)
      ? data.contributions
      : [];
    if (contributions.length === 0) return null;
    const total =
      (data.total && (data.total.lastYear ?? Object.values(data.total)[0])) ||
      contributions.reduce((s: number, d: Day) => s + d.count, 0);
    return { total, days: contributions.slice(-371) };
  } catch {
    return null;
  }
}

export async function GET() {
  const result = (await fromGraphQL()) ?? (await fromJogruber());

  if (!result) {
    return NextResponse.json(
      { error: true, message: "Failed to fetch contributions" },
      { status: 502 }
    );
  }

  return NextResponse.json(result);
}
