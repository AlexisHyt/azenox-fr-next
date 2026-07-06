"use client";

import MusicCard from "@/components/music-card";
import { musics } from "@/lib/musics";
import { useEffect, useMemo, useRef, useState } from "react";

export default function MusicGrid() {
  const PAGE_SIZE = 9; // 3 rows on desktop
  const [page, setPage] = useState(1);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const total = musics.length;
  const hasMore = page * PAGE_SIZE < total;

  const visibleMusics = useMemo(() => {
    const end = Math.min(page * PAGE_SIZE, total);
    return musics.slice(0, end);
  }, [page, total]);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const el = sentinelRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && hasMore) {
          // Small timeout to avoid rapid increments on fast scrolls
          setTimeout(() => setPage((p) => p + 1), 0);
        }
      },
      {
        root: null,
        rootMargin: "200px", // pre-load before reaching the bottom
        threshold: 0,
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Discography
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleMusics.map((track) => (
            <MusicCard key={track.youtube_id} track={track} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center">
          {hasMore ? (
            <div
              ref={sentinelRef}
              aria-hidden
              className="h-10 w-full flex items-center justify-center text-muted-foreground"
            >
              {isIntersecting ? "Loading more…" : "Scroll to load more"}
            </div>
          ) : (
            <div className="text-sm text-muted-foreground">You’ve reached the end.</div>
          )}
        </div>

        {/* Accessible fallback button for users who disable JS observers */}
        {hasMore && (
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm hover:bg-accent"
              onClick={() => setPage((p) => p + 1)}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
