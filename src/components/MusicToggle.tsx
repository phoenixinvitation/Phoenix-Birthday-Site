import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ osc: OscillatorNode; gain: GainNode }[]>([]);

  useEffect(() => () => stop(), []);

  function stop() {
    nodesRef.current.forEach(({ osc }) => {
      try {
        osc.stop();
      } catch {
        /* noop */
      }
    });
    nodesRef.current = [];
    if (ctxRef.current) {
      ctxRef.current.close().catch(() => {});
      ctxRef.current = null;
    }
  }

  function toggle() {
    if (playing) {
      stop();
      setPlaying(false);
      return;
    }
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    ctxRef.current = ctx;
    // gentle twinkly chord
    const notes = [523.25, 659.25, 783.99]; // C E G
    notes.forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.value = 0.04;
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      nodesRef.current.push({ osc, gain });
    });
    setPlaying(true);
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggle}
      aria-label={playing ? "Mute music" : "Play music"}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow"
    >
      {playing ? <Music className="h-5 w-5 animate-wiggle" /> : <VolumeX className="h-5 w-5" />}
    </motion.button>
  );
}
