import { Badge } from "@/components/ui/badge";

export function mapStyleToBadge(style: string) {
  switch (style) {
    case "drum_and_bass":
      return (
        <Badge className={"bg-pink-500 text-white"}> Drum and Bass </Badge>
      );
    case "pop":
      return <Badge className={"bg-orange-300 text-black"}> Pop </Badge>;
    case "progressive_house":
      return (
        <Badge className={"bg-yellow-500 text-black"}>
          {" "}
          Progressive House{" "}
        </Badge>
      );
    case "tropical_house":
      return (
        <Badge className={"bg-yellow-500 text-black"}> Tropical House </Badge>
      );
    case "dubstep":
      return <Badge className={"bg-blue-500 text-white"}> Dubstep </Badge>;
    case "trap":
      return <Badge className={"bg-green-500 text-white"}> Trap </Badge>;
    case "melodic_dubstep":
      return (
        <Badge className={"bg-teal-300 text-black"}> Melodic Dubstep </Badge>
      );
    case "future_house":
      return (
        <Badge className={"bg-purple-500 text-white"}> Future House </Badge>
      );
    case "synthwave":
      return <Badge className={"bg-pink-300 text-black"}> Synthwave </Badge>;
    case "trance":
      return <Badge className={"bg-pink-300 text-black"}> Trance </Badge>;
    default:
      return <Badge className={"bg-white-500 text-black"}> Misc </Badge>;
  }
}
