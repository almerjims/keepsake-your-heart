import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { openWhen } from "@/content";
import { SectionTitle } from "./SectionTitle";

const colorMap: Record<string, string> = {
  blush: "var(--color-blush)",
  peach: "var(--color-peach)",
  lavender: "var(--color-lavender)",
  sage: "var(--color-sage)",
};

export function OpenWhen() {
  const [open, setOpen] = useState<string | null>(null);
  const active = openWhen.find((o) => o.key === open);

  return (
    <section className="relative px-4 py-24">
      <SectionTitle kicker="for whenever" title="open when…" />
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {openWhen.map((env, i) => (
          <motion.button
            key={env.key}
            onClick={() => setOpen(env.key)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, rotate: i % 2 ? 2 : -2 }}
            className="group relative h-44 overflow-hidden rounded-md p-6 text-left shadow-[0_10px_24px_-12px_rgba(60,40,30,0.4)]"
            style={{ background: colorMap[env.color] }}
          >
            <div className="absolute inset-x-0 top-0 h-1/2"
                 style={{
                   background: `linear-gradient(to bottom, oklch(1 0 0 / 0.25), transparent)`,
                   clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                 }}/>
            <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary text-center text-sm leading-6 text-primary-foreground">♡</div>
            <p className="absolute bottom-4 left-5 font-hand text-xl ink">{env.label}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30, rotate: -2 }}
              animate={{ scale: 1, y: 0, rotate: -1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="paper relative max-w-lg rounded-md p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-2" />
              <p className="font-hand text-2xl text-primary">{active.label}</p>
              <p className="mt-4 font-serif text-lg leading-relaxed ink whitespace-pre-line">{active.letter}</p>
              <button
                onClick={() => setOpen(null)}
                className="mt-6 rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground"
              >close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
