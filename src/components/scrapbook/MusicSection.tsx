import { useState } from "react";
import { motion } from "framer-motion";
import { playlist } from "@/content";
import { SectionTitle } from "./SectionTitle";

export function MusicSection({ playing, toggle }: { playing: boolean; toggle: () => void }) {
  const [active, setActive] = useState(0);
  return (
    <section className="relative px-4 py-24">
      <SectionTitle kicker="our soundtrack" title="songs that are us" />
      <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-2">
        <div className="flex justify-center">
          <motion.div
            className="relative flex h-64 w-64 items-center justify-center rounded-full bg-ink shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]"
            animate={playing ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 6, repeat: playing ? Infinity : 0, ease: "linear" }}
            style={{
              backgroundImage:
                "repeating-radial-gradient(circle, oklch(0.20 0.02 30) 0 2px, oklch(0.30 0.04 25) 2px 4px)",
            }}
          >
            <div className="absolute inset-6 rounded-full" style={{ background: "var(--color-primary)" }} />
            <div className="absolute h-6 w-6 rounded-full bg-cream" />
            {playing && (
              <motion.div
                className="absolute -inset-3 rounded-full"
                animate={{ boxShadow: ["0 0 0 0 oklch(0.85 0.10 350 / 0.6)", "0 0 0 30px oklch(0.85 0.10 350 / 0)"] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
            )}
          </motion.div>
        </div>
        <div className="paper rounded-xl p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-display text-2xl ink">our playlist</p>
            <button
              onClick={toggle}
              className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground hover:scale-105 transition"
            >{playing ? "pause" : "play"}</button>
          </div>
          <ul className="divide-y divide-border">
            {playlist.map((s, i) => (
              <li
                key={i}
                onClick={() => setActive(i)}
                className={`flex cursor-pointer items-center justify-between py-3 transition ${
                  active === i ? "text-primary" : "ink"
                }`}
              >
                <span className="font-serif text-lg">{s.title}</span>
                <span className="font-hand text-base text-muted-foreground">{s.artist}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
