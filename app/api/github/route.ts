import { NextResponse } from "next/server";

export const revalidate = 3600;

const USERNAME = "Ak-arsha";

export async function GET() {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "User-Agent": "akarsha-portfolio",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, {
        headers,
        next: { revalidate },
      }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, {
        headers,
        next: { revalidate },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error("GitHub API error");
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    const totalStars = Array.isArray(repos)
      ? repos.reduce((sum: number, r: any) => sum + (r.stargazers_count ?? 0), 0)
      : 0;

    const languageCounts: Record<string, number> = {};
    if (Array.isArray(repos)) {
      for (const r of repos) {
        if (r.language) languageCounts[r.language] = (languageCounts[r.language] ?? 0) + 1;
      }
    }
    const topLanguages = Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([lang]) => lang);

    return NextResponse.json(
      {
        ok: true,
        username: user.login,
        publicRepos: user.public_repos,
        followers: user.followers,
        totalStars,
        topLanguages,
        profileUrl: user.html_url,
      },
      { headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate=600" } }
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        username: USERNAME,
        publicRepos: null,
        followers: null,
        totalStars: null,
        topLanguages: [],
        profileUrl: `https://github.com/${USERNAME}`,
        fallback: true,
      },
      { status: 200 }
    );
  }
}
