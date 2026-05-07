import { motion } from "framer-motion";
import { loveNotes } from "@/content";
import { SectionTitle } from "./SectionTitle";

const colorMap: Record<string, string> = {
  blush: "var(--color-blush)",
  peach: "var(--color-peach)",
  lavender: "var(--color-lavender)",
  sage: "var(--color-sage)",
};
const tilts = [-4, 3, -2, 5, -5, 2];

export function LoveNotes() {
  return (
    <section className="relative px-4 py-24">
      <SectionTitle kicker="reasons & whispers" title="love notes" />
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {loveNotes.map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: tilts[i % tilts.length] }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="relative aspect-square p-6 shadow-[0_8px_24px_-10px_rgba(60,40,30,0.3)]"
            style={{ background: colorMap[n.color] || colorMap.blush }}
          >
            <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-3" style={{ width: 70 }} />
            <p className="font-hand text-2xl leading-snug ink">{n.text}</p>
            <span className="absolute bottom-4 right-5 font-hand text-lg ink/60">— me</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
