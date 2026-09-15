"use client";

import dynamic from "next/dynamic";

// 3D + canvas effects only make sense client-side, and touch a lot of
// browser-only APIs (WebGL context, pointer events), so they're excluded
// from the server render entirely.
const Starfield = dynamic(() => import("@/components/Starfield"), { ssr: false });
const CursorStars = dynamic(() => import("@/components/CursorStars"), { ssr: false });

export default function Effects() {
  return (
    <>
      <Starfield />
      <CursorStars />
    </>
  );
}
