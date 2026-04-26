import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Countdown } from "@/components/Countdown";
import { Gallery } from "@/components/Gallery";
import { EventDetails } from "@/components/EventDetails";
import { Blessings } from "@/components/Blessings";
import { Footer } from "@/components/Footer";
import { MusicToggle } from "@/components/MusicToggle";
import { ConfettiBurst } from "@/components/ConfettiBurst";
import { party } from "@/config/party";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${party.name} Turns ${party.age} — A Magical Birthday Celebration` },
      {
        name: "description",
        content: `You're invited to ${party.name}'s ${party.age}th birthday party on ${party.dateLabel}. Send your blessings!`,
      },
      { property: "og:title", content: `${party.name} Turns ${party.age} 🎉` },
      {
        property: "og:description",
        content: `Join us for a magical celebration on ${party.dateLabel}.`,
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <ConfettiBurst />
      <Hero />
      <Countdown />
      <Gallery />
      <EventDetails />
      <Blessings />
      <Footer />
      <MusicToggle />
    </main>
  );
}
