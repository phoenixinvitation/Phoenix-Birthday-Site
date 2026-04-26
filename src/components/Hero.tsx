import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles } from "lucide-react";
import { FloatingBalloons } from "./FloatingBalloons";
import { party } from "@/config/party";
import balloons from "@/assets/balloons.png";
import cake from "@/assets/cake.png";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero pt-8">
      <FloatingBalloons count={10} />

      {/* Decorative corner illustrations */}
      <motion.img
        src={balloons}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-10 top-10 w-48 md:w-72 opacity-90 animate-float-slow"
        width={1024}
        height={1024}
      />
      <motion.img
        src={cake}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-8 bottom-10 w-40 md:w-64 opacity-95 animate-float-up"
        width={1024}
        height={1024}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-sm font-semibold text-primary"
        >
          <Sparkles className="h-4 w-4" />
          You&apos;re Invited
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-4 text-5xl font-bold leading-[0.95] md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient-primary">{party.name}</span>
          <br />
          <span className="text-foreground">Turns </span>
          <span className="text-gradient-sunset">{party.age}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10 max-w-xl text-lg text-muted-foreground md:text-xl"
        >
          {party.tagline} ✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-3"
        >
          <div className="flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium">
            <Calendar className="h-4 w-4 text-primary" />
            {party.dateLabel}
          </div>
          <div className="flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium">
            <Clock className="h-4 w-4 text-primary" />
            {party.timeLabel}
          </div>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="#blessings"
          className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-primary px-10 py-5 text-lg font-bold text-primary-foreground shadow-glow transition-all"
        >
          Send a Blessing 💖
          <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
        </motion.a>
      </div>
    </section>
  );
}
