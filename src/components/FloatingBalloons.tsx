const colors = ["var(--pink)", "var(--blue)", "var(--yellow)", "var(--mint)", "var(--primary)"];

export function FloatingBalloons({ count = 8 }: { count?: number }) {
  const balloons = Array.from({ length: count }).map((_, i) => {
    const left = (i * 97) % 100;
    const delay = (i * 1.7) % 8;
    const duration = 10 + ((i * 3) % 8);
    const size = 40 + ((i * 13) % 40);
    const color = colors[i % colors.length];
    return { left, delay, duration, size, color, i };
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {balloons.map((b) => (
        <div
          key={b.i}
          className="absolute"
          style={{
            left: `${b.left}%`,
            bottom: `-10%`,
            width: `${b.size}px`,
            animation: `balloon-rise ${b.duration}s linear ${b.delay}s infinite`,
          }}
        >
          <div
            className="relative rounded-full shadow-soft"
            style={{
              width: `${b.size}px`,
              height: `${b.size * 1.15}px`,
              background: `radial-gradient(circle at 30% 25%, oklch(1 0 0 / 0.8), ${b.color})`,
            }}
          />
          <div
            className="mx-auto"
            style={{
              width: "1px",
              height: `${b.size * 1.5}px`,
              background: "oklch(0.5 0.05 340 / 0.3)",
            }}
          />
        </div>
      ))}
    </div>
  );
}
