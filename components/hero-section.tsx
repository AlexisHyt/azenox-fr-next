"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { mapProviderToBackground } from "@/lib/mapProviderToBackground";
import { mapProviderToIcon } from "@/lib/mapProviderToIcon";
import { mapStyleToBadge } from "@/lib/mapStyleToBadge";
import { musics } from "@/lib/musics";

export default function HeroSection() {
  // Get the latest music video
  const latest = musics[0];

  return (
    <section className="w-full py-6 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <div className="flex flex-col gap-1 mb-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Latest Release
          </h2>
          <p className="text-base md:text-lg text-foreground/70">
            {latest.title}
          </p>
        </div>

        <div className="flex gap-4 flex-col md:flex-row">
          {/* Embedded Video */}
          <div className="flex justify-center w-full">
            <div className="relative max-w-xl w-full bg-card rounded-lg overflow-hidden aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${latest.youtube_id}`}
                title={latest.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Track Info */}
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-foreground/60 uppercase tracking-wider">
                Label
              </p>
              <p className="font-semibold text-foreground text-sm">
                {latest.label}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-foreground/60 uppercase tracking-wider">
                Style
              </p>
              <p className="font-semibold text-foreground text-sm">
                {mapStyleToBadge(latest.style)}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-foreground/60 uppercase tracking-wider">
                Artists
              </p>
              <p className="font-semibold text-foreground text-sm">
                {latest.artists}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-foreground/60 uppercase tracking-wider">
                Platform
              </p>
              <div className="flex gap-2">
                {latest.providers && (
                  <div className="pt-3 border-t border-border/50 flex flex-wrap gap-2">
                    <ButtonGroup>
                      {Object.entries(latest.providers).map(
                        ([provider, link]) => (
                          <Button
                            key={provider}
                            className={`inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded bg-secondary ${mapProviderToBackground(provider)} transition-colors duration-200`}
                            asChild
                          >
                            <Link
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white"
                            >
                              {mapProviderToIcon(provider)}
                            </Link>
                          </Button>
                        ),
                      )}
                    </ButtonGroup>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
