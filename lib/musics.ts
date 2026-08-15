export interface MusicTrack {
  youtube_id: string;
  label: string;
  title: string;
  style: string;
  artists: string;
  image?: string;
  date?: string;
  providers?: Providers;
}
interface Providers {
  youtube?: string;
  youtube_music?: string;
  spotify?: string;
  deezer?: string;
  apple_music?: string;
  soundcloud?: string;
  tidal?: string;
  download?: string;
}

export const musics: MusicTrack[] = [
  {
    youtube_id: "jIR0LljqOkA",
    label: "Outertone",
    style: "drum_and_bass",
    title: "Not Enough",
    artists: "AzenoX",
    date: "12/08/2026",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/27/e9/75/27e9750a-1f65-2982-efa8-3f6a73bf42bc/5064042553424_cover.jpg/640x640bb.jpg",
    providers: {
      youtube: "https://www.youtube.com/watch?v=jIR0LljqOkA",
      youtube_music: "https://music.youtube.com/watch?v=EKI4a6fXUkM",
      spotify: "https://open.spotify.com/intl-fr/track/4kpiVDsM5WnRYByiDKLfq9",
      deezer: "https://link.deezer.com/s/345OE2cwImoOnRWnwrgbZ",
      apple_music: "https://music.apple.com/gb/song/not-enough/6798877754",
      soundcloud: "https://soundcloud.com/azenoxmusics/not-enough",
      tidal: "https://tidal.com/track/549704077/u",
    },
  },
  {
    youtube_id: "JqHX5Oxhwrw",
    label: "",
    style: "tropical_house",
    title: "Endless Days",
    artists: "AzenoX",
    date: "31/07/2026",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bf/1b/47/bf1b477c-a9c3-d8c7-ba90-1c218c50109f/5064030115146_cover.jpg/640x640bb.jpg",
    providers: {
      youtube: "https://www.youtube.com/watch?v=JqHX5Oxhwrw",
      youtube_music: "https://music.youtube.com/watch?v=Xjo0Y3gge4Y",
      spotify: "https://open.spotify.com/intl-fr/track/7GhfHoU3uyTa3t7t7N2yAa",
      deezer: "https://link.deezer.com/s/33YWOklB8yNLN5ObXbgm9",
      apple_music: "https://music.apple.com/gb/song/endless-days/6791560323",
      soundcloud: "https://soundcloud.com/azenoxmusics/endless-days",
      tidal: "https://tidal.com/track/543251784/u",
    },
  },
  {
    youtube_id: "VnWeZo_f1MY",
    label: "Mustache Crew Records",
    style: "drum_and_bass",
    title: "Round & Round",
    artists: "AzenoX",
    date: "24/04/2026",
    image:
      "https://i1.sndcdn.com/artworks-YMylMReLRzhv-0-t500x500.png",
    providers: {
      youtube: "https://www.youtube.com/watch?v=VnWeZo_f1MY",
      youtube_music: "https://music.youtube.com/watch?v=VnWeZo_f1MY",
      spotify: "https://open.spotify.com/intl-fr/track/1Xlm856fZK4JmBkOdebs91",
      deezer: "https://link.deezer.com/s/347NJSAlnFS5L5pqECKh4",
      apple_music:
        "https://music.apple.com/gb/song/round-round/1890218690",
      soundcloud: "https://soundcloud.com/azenox-music/round-round",
      tidal: "https://tidal.com/track/512572333/u",
    },
  },
  {
    youtube_id: "enatPYZ9baY",
    label: "LVLD",
    style: "drum_and_bass",
    title: "Run Away With Me",
    artists: "AzenoX",
    date: "26/01/2026",
    image:
      "https://hypeddit-gates-prod.s3.amazonaws.com/z2qqd1_compressed_artwork.webp",
    providers: {
      youtube: "https://www.youtube.com/watch?v=enatPYZ9baY",
      youtube_music: "https://music.youtube.com/watch?v=XFyhXzOiSxA",
      spotify: "https://open.spotify.com/intl-fr/track/4G1WuoAvyjwsobriQ5M38y",
      deezer: "https://link.deezer.com/s/32FHKCDWgSJER3zNqsZPr",
      apple_music:
        "https://music.apple.com/us/song/run-away-with-me/1866988770",
      soundcloud: "https://soundcloud.com/azenoxmusics/run-away-with-me-1",
      tidal: "https://tidal.com/track/487274277/u",
    },
  },
  {
    youtube_id: "ZT-XirXOLpc",
    label: "Bassfeature",
    style: "drum_and_bass",
    title: "Gravity",
    artists: "AzenoX",
    date: "27/06/2025",
    image: "https://i.scdn.co/image/ab67616d0000b27314686db37f1ef66ddc7bde12",
    providers: {
      youtube: "https://www.youtube.com/watch?v=ZT-XirXOLpc",
      youtube_music: "https://music.youtube.com/watch?v=_B59psDJ9-0",
      spotify:
        "https://open.spotify.com/intl-fr/track/1ZIO5wyj1pY07BtKCROsE3?si=6e372143bdc14cfe",
      deezer: "https://link.deezer.com/s/30nPasOItaYxbhdHO6lyk",
      apple_music: "https://music.apple.com/gb/song/gravity/1815808715",
      soundcloud: "https://soundcloud.com/azenoxmusics/gravity",
      tidal: "https://tidal.com/browse/track/436931661?u",
    },
  },
  {
    youtube_id: "SKT5Qnr9fCw",
    label: "",
    style: "pop",
    title: "Elisa",
    artists: "AzenoX",
    date: "30/05/2025",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3e/d0/11/3ed01130-568c-a5d6-5d6e-173f2c980a82/5063740566729_cover.jpg/640x640bb.jpg",
    providers: {
      youtube: "https://www.youtube.com/watch?v=SKT5Qnr9fCw",
      youtube_music: "https://music.youtube.com/watch?v=5fxBzS5gvPY",
      spotify:
        "https://open.spotify.com/intl-fr/track/2U7dTtofoZ2Qu0KoBKNh6i?si=127db78287b348af",
      deezer: "https://link.deezer.com/s/30nP5wdTEq8OVlstvJscj",
      apple_music: "https://music.apple.com/gb/song/elisa/1812101578",
      soundcloud: "https://soundcloud.com/azenoxmusics/elisa",
      tidal: "https://tidal.com/browse/track/433507820?u",
    },
  },
  {
    youtube_id: "xGyflX9wqsw",
    label: "Outertone",
    style: "progressive_house",
    title: "Broken Seams",
    artists: "AzenoX",
    date: "31/10/2024",
    image: "https://i.scdn.co/image/ab67616d00001e020c8616e6e426645e2f28c5e8",
    providers: {
      youtube: "https://www.youtube.com/watch?v=xGyflX9wqsw",
      youtube_music:
        "https://music.youtube.com/watch?v=1SxCvRr-sGA&si=GIE5STNmjEH2Uiqm",
      spotify:
        "https://open.spotify.com/intl-fr/track/1Omjbmv6wlQazMCfzKQlhb?si=fb65216b1ccf4eb7",
      deezer: "https://deezer.page.link/PmFtgfq4Q9LLjZVo6",
      apple_music:
        "https://music.apple.com/gb/album/broken-seams/1775477160?i=1775477389",
      soundcloud:
        "https://soundcloud.com/outertone/azenox-broken-seams-outertone-release",
      tidal: "https://tidal.com/browse/track/395177886?u",
    },
  },
  {
    youtube_id: "RjWzanrkU7w",
    label: "Outertone",
    style: "progressive_house",
    title: "Forget You",
    artists: "AzenoX",
    date: "16/10/2024",
    image: "https://i.scdn.co/image/ab67616d0000b2731e0957a017469d7b348bdafb",
    providers: {
      youtube: "https://www.youtube.com/watch?v=RjWzanrkU7w",
      youtube_music: "https://music.youtube.com/watch?v=RS4ji17d2TA",
      spotify:
        "https://open.spotify.com/intl-fr/track/1ISqthV4AZIHQq51MDFo5H?si=5d8b7e8f8d174d2a",
      deezer: "https://deezer.page.link/G8dVKeD2StEERq5QA",
      apple_music:
        "https://music.apple.com/gb/album/forget-you/1772255500?i=1772255501",
      soundcloud:
        "https://soundcloud.com/outertone/azenox-forget-you-outertone-release",
    },
  },
  {
    youtube_id: "TL4ke3tgsqw",
    label: "Outertone",
    style: "dubstep",
    title: "Revenge",
    artists: "AzenoX",
    date: "19/09/2024",
    image: "https://i.imgur.com/ODsJwCi.jpeg",
    providers: {
      youtube: "https://www.youtube.com/watch?v=TL4ke3tgsqw",
      youtube_music: "https://music.youtube.com/watch?v=lR8_y-sgvyk",
      spotify:
        "https://open.spotify.com/intl-fr/track/4piJXK0JARUPFA0lpoe5cc?si=8c3745a76eab4678",
      deezer: "https://deezer.page.link/fh5HeYnPUEvaavDy8",
      apple_music:
        "https://music.apple.com/gb/album/revenge/1765302070?i=1765302071",
    },
  },
  {
    youtube_id: "vy73jUYpPm4",
    label: "",
    style: "tropical_house",
    title: "Sweet Sunset",
    artists: "AzenoX",
    date: "09/07/2024",
    image: "https://i.imgur.com/O7bZJjn.jpeg",
    providers: {
      youtube: "https://www.youtube.com/watch?v=vy73jUYpPm4",
      youtube_music: "https://music.youtube.com/watch?v=n_RX6WxrgKw",
      spotify:
        "https://open.spotify.com/intl-fr/track/4mkNR17DV2LqFYfNTXkWwu?si=e3e74c8c82864948",
      deezer: "https://deezer.page.link/D6ZYDXCrxuwnUyex8",
      apple_music:
        "https://music.apple.com/gb/album/sweet-sunset/1755774768?i=1755775069",
    },
  },
  {
    youtube_id: "Ci6Qdavoqtk",
    label: "Outertone",
    style: "drum_and_bass",
    title: "Set Scenes (AzenoX Remix)",
    artists: "4US & KRLYK",
    date: "30/05/2024",
    image: "https://i.imgur.com/Hz3tLUz.png",
    providers: {
      youtube: "https://www.youtube.com/watch?v=Ci6Qdavoqtk",
      youtube_music: "https://music.youtube.com/watch?v=_C8ldXG7MXI",
      spotify:
        "https://open.spotify.com/intl-fr/track/4UvxY07mILzTfp9jqUldAe?si=d0a0e23333bc4de7",
      deezer: "https://deezer.page.link/Muepy6ni66Wkqv6x5",
      apple_music:
        "https://music.apple.com/fr/album/set-scenes-azenox-remix/1747937690?i=1747937691",
      tidal: "https://tidal.com/browse/track/365221900?u",
    },
  },
  {
    youtube_id: "9eWZKnYGaG0",
    label: "Outertone",
    style: "drum_and_bass",
    title: "Abyss",
    artists: "AzenoX",
    date: "18/03/2024",
    image: "https://i.imgur.com/rYyYRuD.jpeg",
    providers: {
      youtube: "https://www.youtube.com/watch?v=9eWZKnYGaG0",
      youtube_music: "https://music.youtube.com/watch?v=LCFXLq71gFU",
      soundcloud:
        "https://soundcloud.com/outertone/azenox-abyss-outertone-release",
      spotify:
        "https://open.spotify.com/intl-fr/track/26BsPKPvWkFNBrf0PVQMsC?si=668db0409cae4514",
      deezer: "https://deezer.page.link/7jALVkqWySVqT2aZ8",
      apple_music: "https://music.apple.com/fr/album/abyss-single/1746487359",
      tidal: "https://tidal.com/browse/track/363509208?u",
    },
  },
  {
    youtube_id: "TMXO76s_pgQ",
    label: "",
    style: "misc",
    title: "Lost in Space",
    artists: "AzenoX",
    date: "28/04/2024",
    image: "https://i.imgur.com/PARVn6P.jpeg",
    providers: {
      youtube: "https://www.youtube.com/watch?v=TMXO76s_pgQ&ab_channel=AzenoX",
      youtube_music: "https://music.youtube.com/watch?v=jmX6u3Xl9jE",
      soundcloud: "https://soundcloud.com/azenoxmusics/lost-in-space",
      spotify:
        "https://open.spotify.com/intl-fr/track/57bKEyfwV6GdXX12zCTqQS?si=d35f0c1e73324d88",
      deezer: "https://deezer.page.link/W8tY6J6EV9UWkz486",
      apple_music:
        "https://music.apple.com/fr/album/lost-in-space/1741761079?i=1741761080",
      tidal: "https://tidal.com/browse/track/358463511",
    },
  },
  {
    youtube_id: "OONC0rxevHg",
    label: "Outertone",
    style: "drum_and_bass",
    title: "Free",
    artists: "AzenoX",
    date: "18/03/2024",
    image: "https://i.imgur.com/xrFR8aQ.jpeg",
    providers: {
      youtube: "https://www.youtube.com/watch?v=OONC0rxevHg",
      youtube_music: "https://music.youtube.com/watch?v=67T4vxbMUHk",
      soundcloud:
        "https://soundcloud.com/outertone/azenox-free-outertone-release",
      spotify:
        "https://open.spotify.com/intl-fr/track/50dvV5OGGdb72UhK2xYcOv?si=f2aa1b45150f47d8",
      apple_music:
        "https://music.apple.com/fr/album/free/1730976213?i=1730976214",
      tidal: "https://tidal.com/browse/track/345669405",
    },
  },
  {
    youtube_id: "Nn7pcRKBqtA",
    label: "",
    style: "trap",
    title: "Maze of Darkness (ft. Keybeaux)",
    artists: "AzenoX",
    date: "17/02/2024",
    image: "https://i.imgur.com/TAARBff.png",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Maze%20of%20Darkness.mp3",
      youtube: "https://www.youtube.com/watch?v=Nn7pcRKBqtA",
      youtube_music: "https://music.youtube.com/watch?v=rFZZn03MQxU",
      soundcloud: "https://soundcloud.com/azenoxmusics/maze-of-darkness",
      spotify:
        "https://open.spotify.com/intl-fr/track/0dLspJRjyAhovJBkXLT4Q9?si=1e05b8bf9cc04655",
      deezer: "https://deezer.page.link/8q9751DJ3TkrNVVk9",
      apple_music:
        "https://music.apple.com/fr/album/maze-of-darkness-feat-keybeaux/1730111932?i=1730111933",
      tidal: "https://tidal.com/browse/track/344113552",
    },
  },
  {
    youtube_id: "GNo7q5JRwrw",
    label: "",
    style: "progressive_house",
    title: "You and Me",
    artists: "AzenoX",
    date: "05/01/2024",
    image: "https://i.imgur.com/qzPQGcZ.png",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20You%20and%20Me.wav",
      youtube: "https://www.youtube.com/watch?v=GNo7q5JRwrw",
      youtube_music: "https://www.youtube.com/watch?v=yf2ELvRP0uk",
      soundcloud: "https://soundcloud.com/azenoxmusics/you-and-me",
      spotify:
        "https://open.spotify.com/intl-fr/track/3pK5uib7yN4olOFBpWJNoo?si=ece48311dd3042a8",
      deezer: "https://deezer.page.link/qXGBJ7aTeNFPFJNo8",
      apple_music:
        "https://music.apple.com/fr/album/you-and-me/1723760701?i=1723760702",
    },
  },
  {
    youtube_id: "zeLFAjeIZ8Y",
    label: "Outertone",
    style: "progressive_house",
    title: "My Ghost",
    artists: "AzenoX",
    date: "03/11/2023",
    image: "https://i.imgur.com/7Aa5JcY.jpeg",
    providers: {
      youtube: "https://www.youtube.com/watch?v=zeLFAjeIZ8Y",
      youtube_music: "https://music.youtube.com/watch?v=zeLFAjeIZ8Y",
      spotify:
        "https://open.spotify.com/intl-fr/track/46NzwZhUtI0Hld5jvf4mPr?si=62a1c5898d364420",
      deezer: "https://deezer.page.link/dbNRJ8vi7zsg3NMLA",
      apple_music:
        "https://music.apple.com/gb/album/my-ghost/1712500943?i=1712500952",
      tidal: "https://tidal.com/browse/track/323524354",
    },
  },
  {
    youtube_id: "ZI52HrkNoIc",
    label: "Outertone",
    style: "progressive_house",
    title: "Kraken",
    artists: "AzenoX",
    date: "02/10/2023",
    image: "https://i.imgur.com/zd8xfTW.jpg",
    providers: {
      download: "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Kraken.wav",
      youtube: "https://www.youtube.com/watch?v=ZI52HrkNoIc",
      youtube_music: "https://music.youtube.com/watch?v=dNfcnR3sNwY",
      soundcloud: "https://soundcloud.com/azenoxmusics/kraken",
      spotify:
        "https://open.spotify.com/intl-fr/track/2flv1Z8PotnQ2nJcoABXUO?si=c27d76ad579540fc",
      deezer: "https://deezer.page.link/1nCwe2fCHZDNwtDM7",
      apple_music:
        "https://music.apple.com/fr/album/kraken/1708498592?i=1708498593",
    },
  },
  {
    youtube_id: "i3YyjHtnZkk",
    label: "",
    style: "trap",
    title: "Wandering (ptII)",
    artists: "AzenoX",
    date: "19/06/2023",
    image: "https://i.imgur.com/wmfYPWr.png",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Wandering%20%28ptII%29.wav",
      youtube: "https://www.youtube.com/watch?v=i3YyjHtnZkk",
      youtube_music:
        "https://music.youtube.com/watch?v=VFLzXK3t2G4&feature=share",
      soundcloud: "https://soundcloud.com/azenoxmusics/wandering-ptii",
      spotify:
        "https://open.spotify.com/track/6Jo5mR5nLk9ZcWca6A4ger?si=8fbd3cde9d65433f",
      deezer: "https://deezer.page.link/uZGtQvaEBFVaxQdF6",
      apple_music:
        "https://music.apple.com/us/album/wandering-ptii/1692694851?i=1692694852",
      tidal: "https://tidal.com/browse/track/299986060",
    },
  },
  {
    youtube_id: "edxoH-teSFU",
    label: "",
    style: "melodic_dubstep",
    title: "Freefalling",
    artists: "AzenoX",
    date: "04/05/2023",
    image: "https://i.imgur.com/SMw2Wju.jpg",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Freefalling.mp3",
      youtube: "https://www.youtube.com/watch?v=edxoH-teSFU",
      youtube_music:
        "https://music.youtube.com/watch?v=crdrvkFvXp0&feature=share",
      soundcloud: "https://soundcloud.com/azenoxmusics/freefalling",
      spotify:
        "https://open.spotify.com/track/3T1eAALjHSoOELUUliVYmv?si=a6a4fd76d7c4479a",
      deezer: "https://deezer.page.link/r6sWnkb9hCXFiAPG8",
      apple_music:
        "https://music.apple.com/us/album/freefalling-single/1685540463",
      tidal: "https://tidal.com/browse/track/292221396",
    },
  },
  {
    youtube_id: "ir9iq9ruTz4",
    label: "",
    style: "drum_and_bass",
    title: "Won't Let You Go",
    artists: "AzenoX",
    date: "21/04/2023",
    image: "https://i.imgur.com/2g4F7qA.png",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Won%27t%20Let%20You%20Go.mp3",
      youtube: "https://www.youtube.com/watch?v=ir9iq9ruTz4",
      youtube_music:
        "https://music.youtube.com/watch?v=jGliRo3U5x8&feature=share",
      soundcloud: "https://soundcloud.com/azenoxmusics/wont-let-you-go",
      spotify:
        "https://open.spotify.com/track/6DiGQTctDwRgZcYH4ejYFq?si=da28aa955ec64dad",
      deezer: "https://deezer.page.link/r8bSRpKvMG3D8E4S9",
      apple_music:
        "https://music.apple.com/us/album/wont-let-you-go-single/1682773188",
      tidal: "https://tidal.com/browse/track/289644540",
    },
  },
  {
    youtube_id: "LvTyMV7qySw",
    label: "",
    style: "progressive_house",
    title: "Take Me",
    artists: "AzenoX",
    date: "22/01/2023",
    image: "https://i.imgur.com/U7ciBwv.png",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Take%20Me.mp3",
      youtube: "https://www.youtube.com/watch?v=LvTyMV7qySw",
      youtube_music:
        "https://music.youtube.com/watch?v=h-mA0a9W0C0&feature=share",
      soundcloud: "https://soundcloud.com/azenoxmusics/take-me-1",
      spotify:
        "https://open.spotify.com/track/2AL1C14HexBsxUb3LiVC3y?si=3e9a45cdc44b46af",
      deezer: "https://deezer.page.link/PgyB2eTQLYCEF5VB8",
      apple_music: "https://music.apple.com/fr/album/take-me-single/1666733350",
      tidal: "https://tidal.com/browse/track/272454336",
    },
  },
  {
    youtube_id: "DPfzeMVZtGE",
    label: "",
    style: "trap",
    title: "For One Night",
    artists: "AzenoX",
    date: "01/11/2022",
    image: "https://i.imgur.com/KOggTJF.png",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20For%20One%20Night.mp3",
      youtube: "https://www.youtube.com/watch?v=DPfzeMVZtGE",
      youtube_music:
        "https://music.youtube.com/watch?v=27TuoEqVevE&feature=share",
      soundcloud: "https://soundcloud.com/azenoxmusics/for-one-night",
      spotify:
        "https://open.spotify.com/track/4TwmfEOVYwGTRBXR6fdSXV?si=ff5eb3410d574c01",
      deezer: "https://deezer.page.link/Pd5xQPqbrwin9oWG7",
      apple_music:
        "https://music.apple.com/fr/album/for-one-night-single/1652192521",
      tidal: "https://listen.tidal.com/album/257267864/track/257267865",
    },
  },
  {
    youtube_id: "PNuj2KY7bYQ",
    label: "",
    style: "progressive_house",
    title: "Bamboo",
    artists: "AzenoX",
    date: "03/08/2022",
    image: "https://i.imgur.com/afWSCAr.png",
    providers: {
      download: "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Bamboo.mp3",
      youtube: "https://www.youtube.com/watch?v=PNuj2KY7bYQ",
      spotify:
        "https://open.spotify.com/intl-fr/track/7JTZihOjL3W6gUruI7lYlE?si=7fd460d4ba7149e5",
      deezer: "https://deezer.page.link/jDEJBbdAhRRyX4dt8",
      apple_music: "https://music.apple.com/fr/album/bamboo/1637679483",
    },
  },
  {
    youtube_id: "21LWBz0avHA",
    label: "",
    style: "trap",
    title: "Losin' Control",
    artists: "AzenoX",
    date: "03/08/2022",
    providers: {
      download: "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Bamboo.mp3",
      youtube: "https://www.youtube.com/watch?v=21LWBz0avHA",
      soundcloud: "https://soundcloud.com/azenoxmusics/losin-control",
      spotify:
        "https://open.spotify.com/track/7JTZihOjL3W6gUruI7lYlE?si=6ede31db3b2b411b",
      apple_music: "https://music.apple.com/fr/album/bamboo-single/1637679483",
      deezer: "https://deezer.page.link/5T1yQkMQBxHrGFzQ7",
    },
  },
  {
    youtube_id: "KbFXZwgx2P4",
    label: "",
    style: "melodic_dubstep",
    title: "Infinity",
    artists: "AzenoX",
    date: "23/02/2022",
    image: "https://i.imgur.com/izaGwaN.png",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Infinity.mp3",
      youtube: "https://www.youtube.com/watch?v=KbFXZwgx2P4",
      soundcloud: "https://soundcloud.com/azenoxmusics/infinity",
      spotify:
        "https://open.spotify.com/track/3lka7IcXE01KYEJsDTOfdy?si=8fb4873510054629",
      apple_music:
        "https://music.apple.com/us/album/infinity/1610936254?i=1610936255",
      deezer: "https://www.deezer.com/fr/track/1662260982",
    },
  },
  {
    youtube_id: "rDzweP_HOXw",
    label: "",
    style: "progressive_house",
    title: "Piece Of You",
    artists: "AzenoX",
    date: "01/11/2021",
    image: "https://i.imgur.com/ajeNw78.png",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Piece%20Of%20You.mp3",
      youtube: "https://www.youtube.com/watch?v=2KBH6oX0swU",
      soundcloud: "https://soundcloud.com/azenoxmusics/piece-of-you",
      spotify:
        "https://open.spotify.com/track/0BHFjelqI3pZ3jSl7tIGdr?si=e2d9540fe9ed482a",
      apple_music:
        "https://music.apple.com/us/album/piece-of-you-single/1592888100",
      deezer: "https://deezer.page.link/C2MfRVoQtLoHMzd77",
    },
  },
  {
    youtube_id: "2KBH6oX0swU",
    label: "",
    style: "future_house",
    title: "Love Got You",
    artists: "AzenoX",
    date: "18/07/2021",
    image: "https://i.imgur.com/nzWJsS9.jpg",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Love%20Got%20You.mp3",
      youtube: "https://www.youtube.com/watch?v=2KBH6oX0swU",
      youtube_music: "https://www.youtube.com/watch?v=rUMcw32WkVk",
      soundcloud: "https://soundcloud.com/azenoxmusics/love-got-you",
      spotify:
        "https://open.spotify.com/track/5GZzkt8h3V8CgUUiBh0b5B?si=13523e6150a64e56",
      apple_music:
        "https://music.apple.com/us/album/love-got-you/1576904358?i=1576904359",
      deezer: "https://www.deezer.com/fr/track/1436749892",
    },
  },
  {
    youtube_id: "xLVsMXpHKWs",
    label: "",
    style: "trap",
    title: "Apocalypse",
    artists: "AzenoX",
    date: "06/06/2021",
    image: "https://i.imgur.com/xIpdrG0.jpg",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Apocalypse.mp3",
      youtube: "https://www.youtube.com/watch?v=xLVsMXpHKWs",
      youtube_music: "https://www.youtube.com/watch?v=2ffHxxJ16WQ",
      soundcloud: "https://soundcloud.com/azenoxmusics/apocalypse",
      spotify:
        "https://open.spotify.com/track/0JIb06Ve5eJFdWTRVGYQyY?si=6f52109e459f41dc",
      apple_music:
        "https://music.apple.com/us/album/apocalypse/1570348991?i=1570348992",
      deezer: "https://www.deezer.com/fr/track/1391489322",
    },
  },
  {
    youtube_id: "KaqP92rOY_I",
    label: "",
    style: "melodic_dubstep",
    title: "Thousand Galaxies",
    artists: "AzenoX",
    date: "08/05/2021",
    image: "https://i.imgur.com/4xrbKaC.jpg",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Thousand%20Galaxies.mp3",
      youtube: "https://www.youtube.com/watch?v=KaqP92rOY_I",
      soundcloud: "https://soundcloud.com/azenoxmusics/thousand-galaxies",
      spotify:
        "https://open.spotify.com/track/35dUjwSG9Xuqomo5RxUtPl?si=1530e6be61034ae3",
      apple_music:
        "https://music.apple.com/us/album/thousand-galaxies-single/1565579515?uo=4",
      deezer: "https://www.deezer.com/fr/track/1360170572",
    },
  },
  {
    youtube_id: "P3llriOnFlU",
    label: "",
    style: "trap",
    title: "Wandering",
    artists: "AzenoX",
    date: "20/02/2021",
    image:
      "https://i1.sndcdn.com/artworks-A1ZJjwwe1b3Dyq1f-6AZF5g-t200x200.jpg",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Wandering.mp3",
      youtube: "https://www.youtube.com/watch?v=P3llriOnFlU",
      soundcloud: "https://soundcloud.com/azenoxmusics/wandering",
      spotify:
        "https://open.spotify.com/track/7fCHaDfCb2qMoNlp54vQyV?si=8930497dbb3c4cb9",
      apple_music:
        "https://music.apple.com/us/album/wandering/1554592012?i=1554592013",
      deezer: "https://www.deezer.com/fr/track/1250730132",
    },
  },
  {
    youtube_id: "EFHLv6T858Q",
    label: "",
    style: "progressive_house",
    title: "Scream",
    artists: "AzenoX",
    date: "07/11/2020",
    image: "https://i.imgur.com/msfc7Fe.jpg",
    providers: {
      download: "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Scream.mp3",
      youtube: "https://www.youtube.com/watch?v=EFHLv6T858Q",
      soundcloud: "https://soundcloud.com/azenoxmusics/scream",
      spotify: "https://open.spotify.com/album/4JgpayCNWHDmealdfQomuq",
      deezer: "https://www.deezer.com/fr/album/184801492",
      apple_music:
        "https://music.apple.com/us/album/scream-single/1539290427?uo=4",
    },
  },
  {
    youtube_id: "TjD_FsveYfs",
    label: "",
    style: "synthwave",
    title: "Loop",
    artists: "AzenoX",
    date: "27/06/2020",
    image:
      "https://i1.sndcdn.com/artworks-NKdPswlsAbRkaETA-Ais6qw-t500x500.jpg",
    providers: {
      download: "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Loop.mp3",
      youtube: "https://www.youtube.com/watch?v=TjD_FsveYfs",
      soundcloud: "https://soundcloud.com/azenoxmusics/loop",
      spotify: "https://open.spotify.com/album/1NIaBA1Qhtwp5cZXV3m2Br",
      deezer: "https://www.deezer.com/fr/album/162930632",
      apple_music:
        "https://music.apple.com/us/album/loop-single/1524945113?uo=4&app=music&at=1001lry3&ct=dashboard",
    },
  },
  {
    youtube_id: "lgMt0hx_A8E",
    label: "",
    style: "melodic_dubstep",
    title: "Feel The Future",
    artists: "AzenoX",
    date: "02/06/2020",
    image:
      "https://i1.sndcdn.com/artworks-Av2RrZatyxNVh0zX-kH0gZg-t500x500.jpg",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Feel%20The%20Future.mp3",
      youtube: "https://www.youtube.com/watch?v=lgMt0hx_A8E",
      soundcloud: "https://soundcloud.com/azenoxmusics/feel-the-future",
      spotify: "https://open.spotify.com/album/5bh2W3KsqSqqD26TmMcPV8",
      deezer: "https://www.deezer.com/album/152115962",
      apple_music:
        "https://music.apple.com/us/album/feel-the-future-single/1516340503?uo=4",
    },
  },
  {
    youtube_id: "15nwKBaYkYg",
    label: "",
    style: "progressive_house",
    title: "Legacy",
    artists: "AzenoX",
    date: "07/03/2020",
    image:
      "https://i1.sndcdn.com/artworks-kIJwWUTUofqZiJ6f-5agyWA-t500x500.jpg",
    providers: {
      download: "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Legacy.mp3",
      youtube: "https://www.youtube.com/watch?v=15nwKBaYkYg",
      soundcloud: "https://soundcloud.com/azenoxmusics/legacy",
      spotify: "https://open.spotify.com/album/4UlPd3kmZrsgH0dNUKcXxx",
      deezer: "https://www.deezer.com/fr/album/135287512",
      apple_music:
        "https://music.apple.com/us/album/legacy-single/1501949338?app=music&ign-mpt=uo%3D4",
    },
  },
  {
    youtube_id: "oLt1OeMeTCk",
    label: "",
    style: "trap",
    title: "Dreams",
    artists: "AzenoX",
    date: "20/01/2020",
    image: "https://i.imgur.com/aME7rox.jpg",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Dreams%20ft%20Victoria%20Fisher.mp3",
      youtube: "https://www.youtube.com/watch?v=oLt1OeMeTCk",
      soundcloud: "https://soundcloud.com/azenoxmusics/dreams-1",
      spotify: "https://open.spotify.com/album/1T4CdqOdRrh2Ysv6KGpnS8",
      deezer: "https://www.deezer.com/fr/album/127582232",
      apple_music:
        "https://music.apple.com/us/album/dreams-feat-victoria-fisher-single/1496064798?app=music&ign-mpt=uo%3D4",
    },
  },
  {
    youtube_id: "1XG-GhxyuSc",
    label: "",
    style: "melodic_dubstep",
    title: "Davy Jones",
    artists: "AzenoX",
    date: "24/11/2019",
    image: "https://i.imgur.com/ouuhbvx.jpg",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Davy%20Jones.mp3",
      youtube: "https://www.youtube.com/watch?v=1XG-GhxyuSc",
      soundcloud: "https://soundcloud.com/azenoxmusics/davy-jones",
      spotify: "https://open.spotify.com/album/46dt244eQMZQJZwDzxL9k0",
      deezer: "https://www.deezer.com/fr/album/120197162",
      apple_music:
        "https://music.apple.com/us/album/davy-jones-single/1489040327?ign-mpt=uo%3D4",
    },
  },
  {
    youtube_id: "yzhLtgSOpIY",
    label: "",
    style: "progressive_house",
    title: "Aurora",
    artists: "AzenoX",
    date: "12/10/2019",
    image: "https://i.imgur.com/ztTd1dW.jpg",
    providers: {
      download: "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Aurora.mp3",
      youtube: "https://www.youtube.com/watch?v=yzhLtgSOpIY",
      soundcloud: "https://soundcloud.com/azenoxmusics/aurora",
      spotify: "https://open.spotify.com/album/3l5AviXWkIzeXGLqDulTD3",
      deezer:
        "https://www.deezer.com/album/114846902?utm_source=deezer&utm_content=album-114846902&utm_term=2615686782_1571125595&utm_medium=web",
      apple_music:
        "https://music.apple.com/us/album/aurora-single/1483476582?ign-mpt=uo%3D4",
    },
  },
  {
    youtube_id: "VdhG2ekoyfc",
    label: "",
    style: "melodic_dubstep",
    title: "Hope",
    artists: "AzenoX",
    date: "23/09/2019",
    image: "https://i1.sndcdn.com/artworks-000596907452-c5w7b3-t500x500.jpg",
    providers: {
      download: "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Hope.mp3",
      youtube: "https://www.youtube.com/watch?v=VdhG2ekoyfc",
      soundcloud: "https://soundcloud.com/azenoxmusics/hope",
      spotify: "https://open.spotify.com/track/5iJZYB6JvBy3gqqCGtKmCw",
      deezer:
        "https://www.deezer.com/album/112326752?utm_source=deezer&utm_content=album-112326752&utm_term=2615686782_1569674138&utm_medium=web",
      apple_music:
        "https://music.apple.com/us/album/hope/1481121827?i=1481121828",
    },
  },
  {
    youtube_id: "sisBUaaaDnk",
    label: "",
    style: "progressive_house",
    title: "Universe",
    artists: "AzenoX",
    date: "21/06/2019",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Universe.mp3",
      youtube: "https://www.youtube.com/watch?v=sisBUaaaDnk",
    },
  },
  {
    youtube_id: "NiBByUIogT8",
    label: "",
    style: "melodic_dubstep",
    title: "Hans Zimmer - Interstellar Theme (AzenoX Remix)",
    artists: "AzenoX",
    date: "24/02/2019",
    image: "https://i1.sndcdn.com/artworks-000494103066-jri50h-t500x500.jpg",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/Interstellar%20Theme%20(AzenoX%20remix).mp3",
      youtube: "https://www.youtube.com/watch?v=NiBByUIogT8",
      soundcloud:
        "https://soundcloud.com/azenoxmusics/hans-zimmer-interstellar-azenox-remix-melodic-dubstep",
      spotify: "https://open.spotify.com/track/3pqdqYx7ErPrFQ1NZTubBV",
      deezer: "https://www.deezer.com/fr/album/92159082",
    },
  },
  {
    youtube_id: "lII47K_p3B4",
    label: "",
    style: "progressive_house",
    title: "Peacekeeper",
    artists: "AzenoX",
    date: "17/02/2019",
    image: "https://i1.sndcdn.com/artworks-000489719832-kxa1de-t500x500.jpg",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20Peacekeeper.mp3",
      youtube: "https://www.youtube.com/watch?v=lII47K_p3B4",
      soundcloud: "https://soundcloud.com/azenoxmusics/peacekeeper",
      spotify: "https://open.spotify.com/track/25iBAZ0m2ioXdxWq8qGh3V",
      deezer:
        "https://www.deezer.com/album/87724052?utm_source=deezer&utm_content=album-87724052&utm_term=2615686782_1550765207&utm_medium=web",
      apple_music:
        "https://itunes.apple.com/us/album/peacekeepers-single/1453519180?app=itunes&ign-mpt=uo%3D4",
    },
  },
  {
    youtube_id: "4NJlguSqTj8",
    label: "",
    style: "progressive_house",
    title: "Sky pt.II",
    artists: "AzenoX",
    date: "06/02/2019",
    image: "https://i.imgur.com/GoB11qe.jpg",
    providers: {
      youtube: "https://www.youtube.com/watch?v=4NJlguSqTj8",
      soundcloud: "https://soundcloud.com/azenoxmusics/sky-ptii",
    },
  },
  {
    youtube_id: "N3jhqQwVYWE",
    label: "",
    style: "melodic_dubstep",
    title: "In the Darkness",
    artists: "AzenoX",
    date: "04/12/2018",
    image: "https://i.imgur.com/M5SpOZl.jpg",
    providers: {
      download:
        "https://hyperfollow.azenox.fr/musics/AzenoX%20-%20In%20The%20Darkness.mp3",
      youtube: "https://www.youtube.com/watch?v=N3jhqQwVYWE",
      soundcloud: "https://soundcloud.com/azenoxmusics/in-the-darkness",
    },
  },
  {
    youtube_id: "XUy_YANlbGM",
    label: "",
    style: "progressive_house",
    title: "Miss you",
    artists: "AzenoX",
    date: "19/11/2018",
    image: "https://i.imgur.com/MksYPH5.jpg",
    providers: {
      youtube: "https://www.youtube.com/watch?v=XUy_YANlbGM",
      soundcloud: "https://soundcloud.com/azenoxmusics/miss-you",
    },
  },
  {
    youtube_id: "qzmeaKgV1Uk",
    label: "",
    style: "progressive_house",
    title: "Galaxy",
    artists: "AzenoX",
    date: "05/10/2018",
    providers: {
      youtube: "https://www.youtube.com/watch?v=qzmeaKgV1Uk",
      soundcloud: "https://soundcloud.com/azenoxmusics/galaxy",
    },
  },
  {
    youtube_id: "SC2juM2BMOk",
    label: "",
    style: "progressive_house",
    title: "Vortex",
    artists: "AzenoX",
    date: "16/09/2018",
    providers: {
      youtube: "https://www.youtube.com/watch?v=SC2juM2BMOk",
    },
  },
  {
    youtube_id: "Kq-h6_a0xO8",
    label: "",
    style: "progressive_house",
    title: "Space",
    artists: "AzenoX",
    date: "25/08/2018",
    providers: {
      youtube: "https://www.youtube.com/watch?v=Kq-h6_a0xO",
    },
  },
  {
    youtube_id: "RmbYdNyGdGY",
    label: "",
    style: "progressive_house",
    title: "Rick et Morty - Evil Morty (AzenoX Remix)",
    artists: "AzenoX",
    date: "05/08/2018",
    providers: {
      youtube: "https://www.youtube.com/watch?v=RmbYdNyGdGY",
    },
  },
  {
    youtube_id: "u4LCUKGi-oo",
    label: "",
    style: "trance",
    title: "Walking",
    artists: "AzenoX",
    date: "01/08/2018",
    providers: {
      youtube: "https://www.youtube.com/watch?v=u4LCUKGi-oo",
    },
  },
  {
    youtube_id: "KVXof7LT-YQ",
    label: "",
    style: "progressive_house",
    title: "Sky",
    artists: "AzenoX",
    date: "14/07/2018",
    providers: {
      youtube: "https://www.youtube.com/watch?v=KVXof7LT-YQ",
    },
  },
];
