import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Send, Trash2 } from "lucide-react";
import { party } from "@/config/party";
import gift from "@/assets/gift.png";

type Blessing = {
  id: string;
  name: string;
  message: string;
  createdAt: number;
};

const STORAGE_KEY = "party-blessings-v1";

function loadBlessings(): Blessing[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as Blessing[];
  } catch {
    return [];
  }
}

function saveBlessings(items: Blessing[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* ignore */
  }
}

const palette = [
  "from-pink/40 to-yellow/40",
  "from-blue/40 to-pink/40",
  "from-yellow/40 to-mint/40",
  "from-mint/40 to-blue/40",
];

export function Blessings() {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [blessings, setBlessings] = useState<Blessing[]>([]);

  useEffect(() => {
    setMounted(true);
    setBlessings(loadBlessings());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedMessage) return;
    const next: Blessing = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: trimmedName,
      message: trimmedMessage,
      createdAt: Date.now(),
    };
    const updated = [next, ...blessings].slice(0, 100);
    setBlessings(updated);
    saveBlessings(updated);
    setName("");
    setMessage("");
  };

  const handleDelete = (id: string) => {
    const updated = blessings.filter((b) => b.id !== id);
    setBlessings(updated);
    saveBlessings(updated);
  };

  return (
    <section id="blessings" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground">
            <Heart className="h-3.5 w-3.5" /> Blessings
          </div>
          <h2 className="mb-3 text-3xl font-bold md:text-5xl">
            Send your <span className="text-gradient-sunset">love & wishes</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Leave a sweet blessing for {party.name} on this special day 💌
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-4xl glass-strong p-6 md:p-10"
        >
          <img
            src={gift}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-6 w-28 rotate-12 opacity-90 animate-float-up md:w-40"
            width={1024}
            height={1024}
          />
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Auntie Priya"
                maxLength={40}
                className="w-full rounded-2xl border border-border bg-white/70 px-5 py-3.5 text-foreground outline-none ring-primary/30 transition focus:ring-4"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                Your Blessing
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Wishing ${party.name} a magical birthday filled with joy...`}
                maxLength={280}
                rows={4}
                className="w-full resize-none rounded-2xl border border-border bg-white/70 px-5 py-3.5 text-foreground outline-none ring-primary/30 transition focus:ring-4"
              />
              <div className="mt-1 text-right text-xs text-muted-foreground">
                {message.length}/280
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={!name.trim() || !message.trim()}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-glow disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
              Send Blessing
            </motion.button>
          </div>
        </motion.form>

        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
              <Sparkles className="h-5 w-5 text-primary" />
              Wishes from loved ones
            </h3>
            {mounted && blessings.length > 0 && (
              <span className="rounded-full glass px-3 py-1 text-xs font-semibold text-muted-foreground">
                {blessings.length} {blessings.length === 1 ? "wish" : "wishes"}
              </span>
            )}
          </div>

          {mounted && blessings.length === 0 && (
            <div className="rounded-3xl glass p-8 text-center text-muted-foreground">
              Be the first to send a blessing 💖
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <AnimatePresence initial={false}>
              {mounted &&
                blessings.map((b, i) => (
                  <motion.div
                    key={b.id}
                    layout
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35 }}
                    className={`group relative overflow-hidden rounded-3xl glass p-5 bg-gradient-to-br ${palette[i % palette.length]}`}
                  >
                    <div className="relative z-10">
                      <p className="mb-3 text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap break-words">
                        &ldquo;{b.message}&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground">
                            {b.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-foreground">{b.name}</div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleDelete(b.id)}
                          aria-label="Remove blessing"
                          className="rounded-full p-1.5 text-muted-foreground/60 opacity-0 transition hover:bg-white/60 hover:text-destructive group-hover:opacity-100"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            💡 Blessings are saved on this device only. To collect wishes from everyone across all
            devices, ask to enable shared cloud storage.
          </p>
        </div>
      </div>
    </section>
  );
}
