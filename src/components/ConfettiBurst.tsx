import { useEffect } from "react";
import confetti from "canvas-confetti";

export function ConfettiBurst() {
  useEffect(() => {
    const colors = ["#f8c8d8", "#bce4f5", "#ffe9a8", "#c8efd7", "#e8a87c"];
    const end = Date.now() + 1200;
    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.9 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.9 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    const t = setTimeout(frame, 400);
    return () => clearTimeout(t);
  }, []);
  return null;
}
