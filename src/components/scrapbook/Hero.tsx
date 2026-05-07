import { motion } from "framer-motion";
import { intro } from "@/content";

export function Hero({ onOpen, musicOn, toggleMusic }: { onOpen: () => void; musicOn: boolean; toggleMusic: () => void }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-20 text-center">
      {/* decorative */}
      <motion.div
        className="absolute left-6 top-10 hidden md:block font-hand text-3xl text-primary/70 -rotate-6"
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
      >to: you ✿</motion.div>
      <motion.div
        className="absolute right-8 top-16 hidden md:block font-hand text-3xl text-primary/70 rotate-6"
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
      >from: me ♡</motion.div>

      <div className="relative max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-hand text-2xl ink/70"
        >a little something I made for you…</motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="mt-4 font-serif text-5xl md:text-7xl leading-tight text-ink"
        >
          {intro.headline}
          <span className="block font-display text-6xl md:text-8xl text-primary mt-2 -rotate-2 underline-wave inline-block px-2">
            {intro.highlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          className="mx-auto mt-6 max-w-xl text-base md:text-lg text-muted-foreground"
        >{intro.subtitle}</motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onOpen}
            className="group relative rounded-full bg-primary px-8 py-4 font-serif text-lg text-primary-foreground shadow-[0_8px_30px_-10px_oklch(0.72_0.13_15/0.6)] transition-transform hover:scale-105 hover:rotate-[-1deg]"
          >
            <span className="relative z-10">Open the Scrapbook ✿</span>
          </button>
          <button
            onClick={toggleMusic}
            className="rounded-full border border-border bg-card/70 px-5 py-3 font-hand text-lg ink backdrop-blur transition hover:bg-card"
          >
            {musicOn ? "🔊 music on" : "🔈 play music"}
          </button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 font-hand text-xl ink/60"
        >scroll, my love ↓</motion.div>
      </div>
    </section>
  );
}
