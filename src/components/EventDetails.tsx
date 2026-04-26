import { motion } from "framer-motion";
import { CalendarHeart, Clock3, MapPin, Navigation } from "lucide-react";
import { party } from "@/config/party";

const items = [
  { icon: CalendarHeart, label: "Date", value: party.dateLabel },
  { icon: Clock3, label: "Time", value: party.timeLabel },
  { icon: MapPin, label: "Venue", value: `${party.venue}\n${party.address}` },
];

export function EventDetails() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-4xl font-bold md:text-5xl"
          >
            Event <span className="text-gradient-primary">Details</span>
          </motion.h2>
          <p className="text-muted-foreground">Everything you need to know 🎈</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-strong rounded-3xl p-8 text-center"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary shadow-soft">
                <it.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {it.label}
              </div>
              <p className="whitespace-pre-line font-display text-lg font-semibold text-foreground">
                {it.value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={party.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass-strong px-8 py-4 font-semibold text-foreground shadow-soft transition-transform hover:scale-105"
          >
            <Navigation className="h-5 w-5 text-primary" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
