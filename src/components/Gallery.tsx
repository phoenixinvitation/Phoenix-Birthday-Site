import { motion } from "framer-motion";
import { party } from "@/config/party";

export function Gallery() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-4xl font-bold md:text-5xl"
          >
            Sweet <span className="text-gradient-sunset">Memories</span>
          </motion.h2>
          <p className="text-muted-foreground">A glimpse of the joy that awaits 📸</p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {party.gallery.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl shadow-card ${
                i === 0
                  ? "md:row-span-2 md:col-span-1 aspect-square md:aspect-[3/4]"
                  : "aspect-square"
              }`}
            >
              <img
                src={src}
                alt={`Party memory ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
