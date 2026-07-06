"use client";

import Link from "next/link";
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tight"
        >
          <span className="text-accent">●</span>
          <span>AzenoX</span>
        </Link>

        {/* Social Links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/links"
            className="text-foreground/70 hover:text-accent transition-colors text-sm font-medium"
          >
            Links
          </Link>
          <a
            href="https://www.instagram.com/alexis.hytt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="size-5" />
          </a>
          <a
            href="https://www.youtube.com/@AzenoX_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-accent transition-colors"
            aria-label="YouTube"
          >
            <FaYoutube className="size-5" />
          </a>
          <a
            href="https://open.spotify.com/intl-fr/artist/7hCwcXSWMVS9axmIa0mEhy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-accent transition-colors"
            aria-label="Spotify"
          >
            <FaSpotify className="size-5" />
          </a>
        </nav>

        {/* Mobile Social Icons */}
        <div className="md:hidden flex items-center gap-4">
          <Link
            href="/links"
            className="text-foreground/70 hover:text-accent transition-colors"
            aria-label="All Links"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m2.121-2.121l-2.121 2.121m5.656-5.656l2.121-2.121m0 5.656l-2.121 2.121m0-5.656l2.121-2.121"
              />
            </svg>
          </Link>
          <a
            href="https://www.instagram.com/alexis.hytt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="size-4" />
          </a>
          <a
            href="https://www.youtube.com/@AzenoX_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-accent transition-colors"
            aria-label="YouTube"
          >
            <FaYoutube className="size-4" />
          </a>
          <a
            href="https://open.spotify.com/intl-fr/artist/7hCwcXSWMVS9axmIa0mEhy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-accent transition-colors"
            aria-label="Spotify"
          >
            <FaSpotify className="size-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
