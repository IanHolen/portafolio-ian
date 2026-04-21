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
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`,
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

    const repos = data
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        html_url: repo.html_url,
        updated_at: repo.updated_at,
      }));

    return NextResponse.json(repos);
  } catch {
    return NextResponse.json(
      { error: true, message: "Failed to fetch GitHub repos" },
      { status: 502 }
    );
  }
}
