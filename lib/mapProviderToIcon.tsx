import { FaDeezer, FaSoundcloud, FaSpotify, FaYoutube } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { SiApplemusic, SiTidal, SiYoutubemusic } from "react-icons/si";

export function mapProviderToIcon(provider: string) {
  switch (provider) {
    case "youtube":
      return <FaYoutube className={"size-3"} />;
    case "youtube_music":
      return <SiYoutubemusic className={"size-3"} />;
    case "spotify":
      return <FaSpotify className={"size-3"} />;
    case "deezer":
      return <FaDeezer className={"size-3"} />;
    case "apple_music":
      return <SiApplemusic className={"size-3"} />;
    case "soundcloud":
      return <FaSoundcloud className={"size-3"} />;
    case "tidal":
      return <SiTidal className={"size-3"} />;
    default:
      return <LuExternalLink className={"size-3"} />;
  }
}
