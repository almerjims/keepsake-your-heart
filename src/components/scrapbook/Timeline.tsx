import { motion } from "framer-motion";
import { timeline } from "@/content";
import { SectionTitle } from "./SectionTitle";

const rotations = [-2, 1.5, -1, 2, -1.5];

export function Timeline() {
  return (
    <section className="relative px-4 py-24">
      <SectionTitle kicker="our story" title="memory timeline" />
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-primary/30 md:block" />
        <div className="space-y-16">
          {timeline.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotate: rotations[i % 5] - 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: rotations[i % 5] }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`relative md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-10" : "md:pr-10"}`}
            >
              <div className="paper relative rounded-md p-4">
                <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-3" />
                <div className="polaroid mx-auto w-fit -rotate-1">
                  <img
                    src={m.photo} alt={m.title} loading="lazy"
                    className="h-56 w-56 object-cover sm:h-64 sm:w-64"
                  />
                  <p className="mt-2 text-center font-hand text-lg ink">{m.date}</p>
                </div>
                <h3 className="mt-4 font-serif text-2xl ink">{m.title}</h3>
                <p className="mt-1 font-hand text-xl text-muted-foreground">{m.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
