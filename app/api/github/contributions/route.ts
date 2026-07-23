import { NextResponse } from "next/server";

const GITHUB_USER = "IanHolen";

interface Day {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export async function GET() {
  try {
    // Public contributions API (scrapes the public profile calendar, no auth).
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: true, message: `Contributions API error: ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    const contributions: Day[] = Array.isArray(data.contributions) ? data.contributions : [];
    const total =
      (data.total && (data.total.lastYear ?? Object.values(data.total)[0])) ||
      contributions.reduce((s: number, d: Day) => s + d.count, 0);

    // keep last ~53 weeks
    const trimmed = contributions.slice(-371);

    return NextResponse.json({ total, days: trimmed });
  } catch {
    return NextResponse.json(
      { error: true, message: "Failed to fetch contributions" },
      { status: 502 }
    );
  }
}
