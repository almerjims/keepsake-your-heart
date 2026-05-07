import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { finalLetter } from "@/content";

export function FinalMessage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [text, setText] = useState("");

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const t = setInterval(() => {
      i++;
      setText(finalLetter.slice(0, i));
      if (i >= finalLetter.length) clearInterval(t);
    }, 28);
    return () => clearInterval(t);
  }, [inView]);

  return (
    <section ref={ref} className="relative px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
        className="paper relative mx-auto max-w-2xl rounded-md p-8 md:p-12"
      >
        <span className="tape -top-3 left-10 -rotate-6" />
        <span className="tape -top-3 right-10 rotate-6" />
        <p className="font-hand text-2xl text-primary">a letter, just for you</p>
        <pre className="mt-6 whitespace-pre-wrap font-serif text-lg leading-relaxed ink">
{text}
<motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.9, repeat: Infinity }}>|</motion.span>
        </pre>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-10 text-center font-display text-6xl text-primary -rotate-2"
        >
          Happy Birthday ❤️
        </motion.h2>
      </motion.div>
    </section>
  );
}
