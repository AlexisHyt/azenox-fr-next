"use client";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const getCopyright = () => {
    const today = new Date();
    let date = "2025";
    if (today.getFullYear() !== 2025) {
      date = `${2025} - ${today.getFullYear()}`;
    }

    return `© ${date} AzenoX. All rights reserved.`;
  };

  return (
    <footer className="w-full border-t border-border bg-card/50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xl font-bold">
              <span className="text-accent">●</span>
              <span>AzenoX</span>
            </div>
            <p className="text-sm text-foreground/60">
              Music artist & producer
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold uppercase text-xs tracking-wider text-foreground/70">
              Follow
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/alexis.hytt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@AzenoX_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-foreground/50">{getCopyright()}</p>
        </div>
      </div>
    </footer>
  );
}
