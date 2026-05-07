import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gallery } from "@/content";
import { SectionTitle } from "./SectionTitle";

const tilts = [-6, 4, -3, 5, -2, 3, -5, 2];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="relative px-4 py-24">
      <SectionTitle kicker="snapshots" title="polaroid wall" />
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {gallery.map((p, i) => (
          <motion.button
            key={i}
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: tilts[i % tilts.length] }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.06, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="polaroid relative cursor-pointer"
            style={{ rotate: `${tilts[i % tilts.length]}deg` }}
          >
            {i % 3 === 0 && <span className="tape -top-3 left-4 -rotate-12" style={{ width: 60, height: 18 }} />}
            <img src={p.src} alt={p.caption} loading="lazy" className="aspect-square w-full object-cover" />
            <p className="mt-2 text-center font-hand text-base ink">{p.caption}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              className="polaroid max-w-md"
              initial={{ scale: 0.8, rotate: -3 }}
              animate={{ scale: 1, rotate: -2 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={gallery[open].src} alt="" className="w-full" />
              <p className="mt-3 text-center font-hand text-2xl ink">{gallery[open].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
