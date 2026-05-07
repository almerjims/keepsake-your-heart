import { motion } from "framer-motion";
import { favorites } from "@/content";
import { SectionTitle } from "./SectionTitle";

export function Favorites() {
  return (
    <section className="relative px-4 py-24">
      <SectionTitle kicker="my favorite list" title="favorite moments" />
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {favorites.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, rotate: -1 }}
            transition={{ delay: i * 0.05 }}
            className="paper relative rounded-2xl p-6"
          >
            <motion.div
              className="text-5xl"
              animate={{ rotate: [0, 8, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
            >{f.icon}</motion.div>
            <p className="mt-3 font-hand text-lg text-primary">{f.label}</p>
            <p className="mt-1 font-serif text-xl ink">{f.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
