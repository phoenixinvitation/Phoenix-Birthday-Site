import { Heart, Instagram, Facebook } from "lucide-react";
import { party } from "@/config/party";

export function Footer() {
  return (
    <footer className="relative mt-12 px-6 py-12">
      <div className="mx-auto max-w-5xl rounded-3xl glass-strong p-8 text-center">
        <div className="mb-4 flex items-center justify-center gap-4">
          <a href={party.socials.instagram} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground transition hover:scale-110">
            <Instagram className="h-4 w-4" />
          </a>
          <a href={party.socials.facebook} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground transition hover:scale-110">
            <Facebook className="h-4 w-4" />
          </a>
        </div>
        <p className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
          Made with <Heart className="h-4 w-4 fill-primary text-primary" /> by
          <span className="font-bold text-gradient-primary">{party.brand}</span>
        </p>
      </div>
    </footer>
  );
}
