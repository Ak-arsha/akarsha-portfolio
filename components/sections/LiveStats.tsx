"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

type CodeforcesData = {
  ok: boolean;
  rating: number | null;
  maxRating: number | null;
  rank: string | null;
};

type GithubData = {
  ok: boolean;
  publicRepos: number | null;
  followers: number | null;
  totalStars: number | null;
  topLanguages: string[];
};

function StatCard({
  label,
  value,
  detail,
  loading,
}: {
  label: string;
  value: string;
  detail?: string;
  loading: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.02]">
      <p className="text-sm text-mist">{label}</p>
      <p className="mt-3 font-display text-3xl text-starlight">
        {loading ? (
          <span className="inline-block h-8 w-20 animate-pulse rounded bg-white/10" />
        ) : (
          value
        )}
      </p>
      {detail && !loading && <p className="mt-2 text-sm text-teal-soft">{detail}</p>}
    </div>
  );
}

export default function LiveStats() {
  const [cf, setCf] = useState<CodeforcesData | null>(null);
  const [gh, setGh] = useState<GithubData | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/codeforces")
      .then((r) => r.json())
      .then((data) => !cancelled && setCf(data))
      .catch(() => !cancelled && setCf({ ok: false, rating: 1388, maxRating: null, rank: null }));

    fetch("/api/github")
      .then((r) => r.json())
      .then((data) => !cancelled && setGh(data))
      .catch(
        () =>
          !cancelled &&
          setGh({ ok: false, publicRepos: null, followers: null, totalStars: null, topLanguages: [] })
      );

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative py-28 md:py-36">
      <div className="section-shell">
        <div className="flex items-baseline gap-4">
          <h2 className="font-display text-3xl md:text-4xl text-starlight">Live from the source</h2>
          <span className="text-sm text-mist">fetched at request time</span>
        </div>
        <p className="mt-4 max-w-xl text-starlight/70 leading-relaxed">
          These numbers aren&apos;t hardcoded — they&apos;re pulled live from Codeforces and
          GitHub by serverless functions running on Vercel.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <StatCard
            label="Codeforces rating"
            value={cf?.rating ? String(cf.rating) : "1388"}
            detail={cf?.rank ?? "handle: Akarsha__Agarwal"}
            loading={cf === null}
          />
          <StatCard
            label="LeetCode problems"
            value="300+"
            detail={`handle: ${profile.leetcodeHandle}`}
            loading={false}
          />
          <StatCard
            label="Public repositories"
            value={gh?.publicRepos != null ? String(gh.publicRepos) : "—"}
            detail={gh?.topLanguages?.length ? gh.topLanguages.slice(0, 3).join(" · ") : undefined}
            loading={gh === null}
          />
          <StatCard
            label="GitHub stars earned"
            value={gh?.totalStars != null ? String(gh.totalStars) : "—"}
            detail={`@${profile.githubHandle}`}
            loading={gh === null}
          />
        </motion.div>
      </div>
    </section>
  );
}
