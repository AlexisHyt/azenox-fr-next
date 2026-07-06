"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMusic } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { mapProviderToBackground } from "@/lib/mapProviderToBackground";
import { mapProviderToIcon } from "@/lib/mapProviderToIcon";
import { mapStyleToBadge } from "@/lib/mapStyleToBadge";
import type { MusicTrack } from "@/lib/musics";

interface MusicCardProps {
  track: MusicTrack;
}

export default function MusicCard({ track }: MusicCardProps) {
  return (
    <div className="group rounded-lg border border-border bg-card hover:border-accent transition-all duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full aspect-square bg-muted overflow-hidden">
        {track.image ? (
          <Image
            src={track.image}
            alt={track.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FaMusic className="w-16 h-16 text-muted-foreground" />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-6 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-foreground/60 uppercase tracking-wider">
            {track.label || "N/A"}
          </p>
          <h3 className="font-bold text-lg md:text-xl text-foreground line-clamp-2">
            {track.title}
          </h3>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm text-foreground/70">{track.artists}</p>
          <p className="text-xs text-foreground/50">
            {mapStyleToBadge(track.style)}
          </p>
        </div>

        {/* Platform Links */}
        {track.providers && (
          <div className="pt-3 border-t border-border/50 flex flex-wrap gap-2">
            <ButtonGroup>
              {Object.entries(track.providers).map(([provider, link]) => (
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
              ))}
            </ButtonGroup>
          </div>
        )}
      </div>
    </div>
  );
}
