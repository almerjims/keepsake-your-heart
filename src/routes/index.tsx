import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Hero } from "@/components/scrapbook/Hero";
import { Timeline } from "@/components/scrapbook/Timeline";
import { Gallery } from "@/components/scrapbook/Gallery";
import { LoveNotes } from "@/components/scrapbook/LoveNotes";
import { Favorites } from "@/components/scrapbook/Favorites";
import { MusicSection } from "@/components/scrapbook/MusicSection";
import { OpenWhen } from "@/components/scrapbook/OpenWhen";
import { FinalMessage } from "@/components/scrapbook/FinalMessage";
import { FloatingHearts } from "@/components/scrapbook/FloatingHearts";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const scrapRef = useRef<HTMLDivElement>(null);
  const [music, setMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) {
      // soft public-domain piano lullaby
      audioRef.current = new Audio(
        "https://cdn.pixabay.com/download/audio/2022/03/15/audio_1718e49f0a.mp3?filename=relaxing-mountains-rivers-streams-running-water-18178.mp3"
      );
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }
    if (music) audioRef.current.pause();
    else audioRef.current.play().catch(() => {});
    setMusic(!music);
  };

  const openScrap = () => scrapRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="relative">
      <FloatingHearts />
      <div className="relative z-10">
        <Hero onOpen={openScrap} musicOn={music} toggleMusic={toggleMusic} />
        <div ref={scrapRef} />
        <Timeline />
        <Gallery />
        <LoveNotes />
        <Favorites />
        <MusicSection playing={music} toggle={toggleMusic} />
        <OpenWhen />
        <FinalMessage />
        <footer className="py-10 text-center font-hand text-lg text-muted-foreground">
          made with ♡ — just for you
        </footer>
      </div>
    </main>
  );
}
