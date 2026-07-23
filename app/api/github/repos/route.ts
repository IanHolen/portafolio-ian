import { NextResponse } from "next/server";

const GITHUB_USER = "IanHolen";

interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
  fork: boolean;
}

export async function GET() {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: true, message: `GitHub API error: ${res.status}` },
        { status: res.status }
      );
    }

    const data: GitHubRepo[] = await res.json();
    const owned = data.filter((r) => !r.fork);

    // Language distribution (by primary language across owned repos)
    const langCount: Record<string, number> = {};
    for (const repo of owned) {
      if (repo.language) langCount[repo.language] = (langCount[repo.language] ?? 0) + 1;
    }
    const langTotal = Object.values(langCount).reduce((a, b) => a + b, 0) || 1;
    const languages = Object.entries(langCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name, count]) => ({
        name,
        count,
        pct: Math.round((count / langTotal) * 100),
      }));

    const totalStars = owned.reduce((sum, r) => sum + r.stargazers_count, 0);

    // Featured: highest stars, then most recently updated
    const featured = [...owned]
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      )
      .slice(0, 3)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        html_url: repo.html_url,
        updated_at: repo.updated_at,
      }));

    return NextResponse.json({
      featured,
      languages,
      totalStars,
      ownedRepos: owned.length,
    });
  } catch {
    return NextResponse.json(
      { error: true, message: "Failed to fetch GitHub repos" },
      { status: 502 }
    );
  }
}
