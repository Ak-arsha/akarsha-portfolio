import { NextResponse } from "next/server";

export const revalidate = 3600; // cache for 1 hour

const HANDLE = "Akarsha__Agarwal";

export async function GET() {
  try {
    const res = await fetch(
      `https://codeforces.com/api/user.info?handles=${encodeURIComponent(HANDLE)}`,
      { next: { revalidate } }
    );

    if (!res.ok) {
      throw new Error(`Codeforces responded with ${res.status}`);
    }

    const json = await res.json();
    if (json.status !== "OK" || !json.result?.[0]) {
      throw new Error("Unexpected Codeforces payload");
    }

    const user = json.result[0];

    return NextResponse.json(
      {
        ok: true,
        handle: user.handle,
        rating: user.rating ?? null,
        maxRating: user.maxRating ?? null,
        rank: user.rank ?? null,
        maxRank: user.maxRank ?? null,
      },
      { headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate=600" } }
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        handle: HANDLE,
        rating: 1388,
        maxRating: null,
        rank: null,
        maxRank: null,
        fallback: true,
      },
      { status: 200 }
    );
  }
}
