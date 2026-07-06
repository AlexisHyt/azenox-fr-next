"use client";

import Link from "next/link";
import { useState } from "react";
import type { SocialLink } from "@/lib/socials";
import { musicSocials, socialMedias } from "@/lib/socials";

function SocialCard({ social, variant = "square" }: { social: SocialLink; variant?: "square" | "wide" }) {
  const [hovered, setHovered] = useState(false);
  const Icon = social.icon;

  return (
    <Link
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${social.bgGradient} p-[1.5px] transition-all duration-300`}
      style={{
        boxShadow: hovered ? `0 8px 30px -4px ${social.shadowColor}55` : "none",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {variant === "square" ? (
        <div className="relative flex flex-col items-center justify-center gap-3 rounded-[10px] bg-background/95 backdrop-blur-sm py-5 px-3 transition-all duration-300 group-hover:bg-background/75 h-full">
          <Icon className="size-7 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6" />
          <span className="text-sm font-semibold tracking-tight text-center leading-tight">{social.label}</span>
        </div>
      ) : (
        <div className="relative flex items-center justify-center gap-3 rounded-[10px] bg-background/95 backdrop-blur-sm py-4 px-5 transition-all duration-300 group-hover:bg-background/75">
          <Icon className="size-6 transition-transform duration-300 group-hover:scale-125" />
          <span className="text-base font-bold tracking-tight">{social.label}</span>
        </div>
      )}
    </Link>
  );
}

export default function LinksGrid() {
  return (
    <section className="w-full py-12 px-4 md:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Music Platforms Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-8 bg-accent rounded-full" />
            <h3 className="text-xl font-bold tracking-tight">Streaming Platforms</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {musicSocials.map((social) => (
              <SocialCard key={social.label} social={social} variant="square" />
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-8 bg-accent rounded-full" />
            <h3 className="text-xl font-bold tracking-tight">Follow Me</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socialMedias.map((social) => (
              <SocialCard key={social.label} social={social} variant="wide" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

