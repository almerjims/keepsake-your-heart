import { motion } from "framer-motion";

export function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      className="mb-10 text-center"
    >
      <p className="font-hand text-xl text-primary">{kicker}</p>
      <h2 className="mt-1 font-display text-5xl md:text-6xl text-ink -rotate-1 inline-block">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-primary/40" />
    </motion.div>
  );
}
