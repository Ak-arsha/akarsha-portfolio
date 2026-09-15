"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// 3D + canvas effects only make sense client-side, and touch a lot of
// browser-only APIs (WebGL context, pointer events), so they're excluded
// from the server render entirely.
const Starfield = dynamic(() => import("@/components/Starfield"), { ssr: false });
const CursorStars = dynamic(() => import("@/components/CursorStars"), { ssr: false });

export default function Effects() {
  const [webglAvailable, setWebglAvailable] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
      setWebglAvailable(Boolean(context));
    } catch {
      setWebglAvailable(false);
    }
  }, []);

  return (
    <>
      {webglAvailable && <Starfield />}
      <CursorStars />
    </>
  );
}
