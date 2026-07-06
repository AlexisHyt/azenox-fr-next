export function mapProviderToBackground(provider: string) {
  switch (provider) {
    case "youtube":
      return "hover:bg-red-500 hover:text-white";
    case "youtube_music":
      return "hover:bg-red-500 hover:text-white";
    case "spotify":
      return "hover:bg-green-500 hover:text-black";
    case "deezer":
      return "hover:bg-orange-500 hover:text-black";
    case "apple_music":
      return "hover:bg-black hover:text-white";
    case "soundcloud":
      return "hover:bg-orange-500 hover:text-white";
    default:
      return "hover:bg-black hover:text-white";
  }
}
