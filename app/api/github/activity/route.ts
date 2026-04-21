import { NextResponse } from "next/server";

const GITHUB_USER = "IanHolen";

interface GitHubEvent {
  type: string;
  repo: { name: string };
  created_at: string;
  payload: { action?: string };
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
      `https://api.github.com/users/${GITHUB_USER}/events/public?per_page=10`,
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

    const data: GitHubEvent[] = await res.json();

    const activity = data.map((event) => ({
      type: event.type,
      repo_name: event.repo.name,
      created_at: event.created_at,
      action: event.payload.action ?? null,
    }));

    return NextResponse.json(activity);
  } catch {
    return NextResponse.json(
      { error: true, message: "Failed to fetch GitHub activity" },
      { status: 502 }
    );
  }
}
