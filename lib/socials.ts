import type { IconType } from "react-icons";
import {
  FaSpotify,
  FaYoutube,
  FaInstagram,
  FaSoundcloud,
  FaApple,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa";
import { SiDeezer, SiTidal, SiYoutubemusic } from "react-icons/si";

export interface SocialLink {
  label: string;
  url: string;
  icon: IconType;
  bgGradient: string;
  shadowColor: string;
  category: "music" | "social";
}

export const socials: SocialLink[] = [
  // Music Platforms
  {
    label: "Spotify",
    url: "https://open.spotify.com/intl-fr/artist/7hCwcXSWMVS9axmIa0mEhy",
    icon: FaSpotify,
    bgGradient: "from-[#1DB954] to-[#1aa34a]",
    shadowColor: "#1DB954",
    category: "music",
  },
  {
    label: "YouTube Music",
    url: "https://music.youtube.com/@AzenoX_",
    icon: SiYoutubemusic,
    bgGradient: "from-[#FF0000] to-[#CC0000]",
    shadowColor: "#FF0000",
    category: "music",
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@AzenoX_",
    icon: FaYoutube,
    bgGradient: "from-[#FF0000] to-[#CC0000]",
    shadowColor: "#FF0000",
    category: "music",
  },
  {
    label: "Apple Music",
    url: "https://music.apple.com/us/artist/azenox/1453519183",
    icon: FaApple,
    bgGradient: "from-[#FA243C] to-[#D91C3A]",
    shadowColor: "#FA243C",
    category: "music",
  },
  {
    label: "Deezer",
    url: "https://www.deezer.com/fr/artist/59772192",
    icon: SiDeezer,
    bgGradient: "from-[#FF0099] to-[#CC0077]",
    shadowColor: "#FF0099",
    category: "music",
  },
  {
    label: "Tidal",
    url: "https://tidal.com/artist/35281994",
    icon: SiTidal,
    bgGradient: "from-[#00D7FF] to-[#00A8CC]",
    shadowColor: "#00D7FF",
    category: "music",
  },
  // Social Media
  {
    label: "Instagram",
    url: "https://www.instagram.com/alexis.hytt/",
    icon: FaInstagram,
    bgGradient: "from-[#E4405F] via-[#F77737] to-[#FCAF45]",
    shadowColor: "#F77737",
    category: "social",
  },
  {
    label: "TikTok",
    url: "https://www.tiktok.com/@azenox1",
    icon: FaTiktok,
    bgGradient: "from-[#111111] to-[#25F4EE]",
    shadowColor: "#25F4EE",
    category: "social",
  },
];

export const musicSocials = socials.filter((s) => s.category === "music");
export const socialMedias = socials.filter((s) => s.category === "social");



