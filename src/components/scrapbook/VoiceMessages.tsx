import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { voiceMessages, secretVoiceMessage } from "@/content";
import { SectionTitle } from "./SectionTitle";

type Msg = (typeof voiceMessages)[number];

function Waveform({ active, bars = 28 }: { active: boolean; bars?: number }) {
  const heights = useRef<number[]>(
    Array.from({ length: bars }, () => 0.3 + Math.random() * 0.7),
  );
  return (
    <div className="flex h-10 items-center gap-[3px]">
      {heights.current.map((h, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-primary/70"
          animate={
            active
              ? { scaleY: [h * 0.4, h, h * 0.5, h * 0.9, h * 0.3] }
              : { scaleY: h * 0.5 }
          }
          transition={{
            duration: 0.9 + (i % 5) * 0.12,
            repeat: active ? Infinity : 0,
            ease: "easeInOut",
            delay: (i % 7) * 0.05,
          }}
          style={{ height: `${h * 100}%`, transformOrigin: "center" }}
        />
      ))}
    </div>
  );
}

function Cassette({ spinning }: { spinning: boolean }) {
  return (
    <div className="relative h-12 w-20 rounded-md bg-ink/90 p-1.5 shadow-inner">
      <div className="flex h-full items-center justify-around">
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className="h-7 w-7 rounded-full border-[3px] border-cream/80 bg-ink"
            animate={spinning ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 1.4, repeat: spinning ? Infinity : 0, ease: "linear" }}
            style={{
              backgroundImage:
                "repeating-conic-gradient(var(--color-cream) 0 10deg, transparent 10deg 30deg)",
            }}
          />
        ))}
      </div>
      <div className="absolute -bottom-1 left-1 right-1 h-1 rounded-full bg-cream/40" />
    </div>
  );
}

const colorMap: Record<string, string> = {
  blush: "var(--color-blush)",
  peach: "var(--color-peach)",
  lavender: "var(--color-lavender)",
  sage: "var(--color-sage)",
  cream: "var(--color-cream)",
};

function VoiceCard({
  msg,
  active,
  onToggle,
  progress,
}: {
  msg: Msg;
  active: boolean;
  onToggle: () => void;
  progress: number;
}) {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02, rotate: 0 }}
      animate={{ scale: active ? 1.04 : 1 }}
      className="paper relative rounded-xl p-5"
      style={{
        backgroundColor: colorMap[msg.color] ?? "var(--color-cream)",
        transform: `rotate(${msg.tilt}deg)`,
        boxShadow: active
          ? "0 0 0 2px oklch(0.85 0.10 350 / 0.5), 0 20px 40px -15px oklch(0.72 0.13 15 / 0.45)"
          : "var(--shadow-paper)",
      }}
    >
      <span className="tape -top-3 left-6 -rotate-6" />
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-hand text-base text-primary/80">{msg.timestamp}</p>
          <h3 className="font-display text-3xl ink leading-none">{msg.title}</h3>
        </div>
        <Cassette spinning={active} />
      </div>

      <p className="mt-3 font-serif text-sm italic ink/80">"{msg.caption}"</p>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={onToggle}
          aria-label={active ? "pause" : "play"}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition hover:scale-110"
        >
          {active ? (
            <span className="flex gap-[3px]">
              <span className="block h-4 w-[3px] bg-current" />
              <span className="block h-4 w-[3px] bg-current" />
            </span>
          ) : (
            <span className="ml-[2px] block h-0 w-0 border-y-[7px] border-l-[10px] border-y-transparent border-l-current" />
          )}
        </button>
        <div className="flex-1">
          <Waveform active={active} />
          <div className="mt-1 flex items-center justify-between font-hand text-xs text-muted-foreground">
            <span>{formatTime(progress * msg.duration)}</span>
            <span>{formatTime(msg.duration)}</span>
          </div>
          <div className="mt-1 h-[3px] w-full overflow-hidden rounded-full bg-ink/10">
            <div
              className="h-full bg-primary transition-[width] duration-200"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>

      <p className="mt-3 font-hand text-base text-ink/60">{msg.note}</p>
    </motion.div>
  );
}

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function SecretCard({
  unlocked,
  onUnlock,
}: {
  unlocked: boolean;
  onUnlock: () => void;
}) {
  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.button
            key="locked"
            layout
            onClick={onUnlock}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.03, rotate: -1 }}
            className="paper relative w-full rounded-xl p-8 text-left"
            style={{
              backgroundColor: "var(--color-lavender)",
              transform: "rotate(-1.2deg)",
            }}
          >
            <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-2" />
            <div className="flex items-center gap-4">
              <div className="text-4xl">🔒</div>
              <div>
                <p className="font-hand text-lg text-primary">a secret message</p>
                <h3 className="font-display text-3xl ink">tap to unlock</h3>
                <p className="mt-1 font-serif text-sm italic ink/70">
                  saved this one just for today.
                </p>
              </div>
            </div>
          </motion.button>
        ) : (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0, scale: 0.9, rotateX: -20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="paper relative overflow-hidden rounded-xl p-8"
            style={{
              backgroundImage:
                "linear-gradient(135deg, oklch(0.92 0.06 350), oklch(0.94 0.05 50))",
            }}
          >
            <span className="tape -top-3 left-8 -rotate-6" />
            <span className="tape -top-3 right-8 rotate-6" />
            <p className="font-hand text-lg text-primary">{secretVoiceMessage.timestamp}</p>
            <h3 className="font-display text-4xl ink">{secretVoiceMessage.title}</h3>
            <p className="mt-3 font-serif italic ink/80">"{secretVoiceMessage.caption}"</p>
            <Waveform active bars={48} />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-6 text-center font-display text-3xl text-primary -rotate-1"
            >
              {secretVoiceMessage.reveal}
            </motion.p>
            {/* confetti hearts */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {Array.from({ length: 14 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute text-primary/60"
                  style={{ left: `${(i * 7) % 100}%`, top: "100%", fontSize: `${0.8 + (i % 4) * 0.3}rem` }}
                  animate={{ y: [0, -400], opacity: [0, 1, 0], rotate: [0, 180] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                >
                  ♡
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function VoiceMessages() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  const activeMsg = voiceMessages.find((m) => m.id === activeId);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      audioRef.current?.pause();
    };
  }, []);

  const stop = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    audioRef.current?.pause();
    audioRef.current = null;
    setActiveId(null);
    setProgress(0);
  };

  const play = (msg: Msg) => {
    if (activeId === msg.id) {
      stop();
      return;
    }
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    audioRef.current?.pause();
    setActiveId(msg.id);
    setProgress(0);

    if (msg.audio) {
      const a = new Audio(msg.audio);
      a.volume = 0.7;
      audioRef.current = a;
      a.play().catch(() => {});
      a.onended = () => stop();
    }

    startRef.current = performance.now();
    const tick = () => {
      const elapsed = (performance.now() - startRef.current) / 1000;
      const p = Math.min(elapsed / msg.duration, 1);
      setProgress(p);
      if (p >= 1) {
        stop();
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  return (
    <section className="relative px-4 py-24">
      <SectionTitle kicker="recorded with love" title="messages for you" />
      <p className="mx-auto mb-10 max-w-md text-center font-hand text-xl text-ink/70">
        press play when you miss me ♡
      </p>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        {voiceMessages.map((m) => (
          <VoiceCard
            key={m.id}
            msg={m}
            active={activeId === m.id}
            progress={activeId === m.id ? progress : 0}
            onToggle={() => play(m)}
          />
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <SecretCard unlocked={unlocked} onUnlock={() => setUnlocked(true)} />
      </div>

      <p className="mt-10 text-center font-hand text-base text-muted-foreground">
        * tip: replace the audio URLs in <code>src/content.ts</code> with your real voice notes.
      </p>
    </section>
  );
}
