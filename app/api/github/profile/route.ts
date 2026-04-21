import { NextResponse } from "next/server";

const GITHUB_USER = "IanHolen";

export async function GET() {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`, {
      headers,
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: true, message: `GitHub API error: ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json({
      name: data.name,
      bio: data.bio,
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      avatar_url: data.avatar_url,
    });
  } catch {
    return NextResponse.json(
      { error: true, message: "Failed to fetch GitHub profile" },
      { status: 502 }
    );
  }
}
