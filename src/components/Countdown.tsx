import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { party } from "@/config/party";

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Block({ value, label }: { value: number; label: string }) {
  const padded = value.toString().padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-24 w-20 overflow-hidden rounded-2xl glass-strong md:h-32 md:w-28">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={padded}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center font-display text-4xl font-bold text-gradient-primary md:text-6xl"
          >
            {padded}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground md:text-sm">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    setT(getTimeLeft(party.date));
    const id = setInterval(() => setT(getTimeLeft(party.date)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-4xl font-bold md:text-5xl"
        >
          The Magic Begins In
        </motion.h2>
        <p className="mb-12 text-muted-foreground">Every second counts down to the big day ✨</p>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
          <Block value={t.days} label="Days" />
          <Block value={t.hours} label="Hours" />
          <Block value={t.minutes} label="Minutes" />
          <Block value={t.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}
