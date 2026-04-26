import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const party = {
  name: "Aarav",
  age: 5,
  tagline: "Join us for a magical celebration",
  // Event date — replace with real date
  date: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 14),
  dateLabel: "Saturday, 10th May 2026",
  timeLabel: "4:00 PM – 8:00 PM",
  venue: "The Grand Palace Banquet Hall",
  address: "12 Park Avenue, Mumbai 400001",
  mapsUrl: "https://maps.google.com/?q=The+Grand+Palace+Banquet+Hall+Mumbai",
  whatsappNumber: "919999999999",
  brand: "Lovable Invites",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  gallery: [g1, g2, g3, g4, g5, g6],
};
