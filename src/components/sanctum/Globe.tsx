import { useMemo } from "react";

// A calm animated observatory globe: rotating meridians, golden network
// lines linking continents, and a soft constellation field. Pure SVG/CSS.
export function Globe({ size = 340 }: { size?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: 46 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: Math.random() * 1.4 + 0.3,
        d: Math.random() * 4,
      })),
    [],
  );

  const nodes = [
    { x: 34, y: 40 },
    { x: 52, y: 30 },
    { x: 66, y: 46 },
    { x: 44, y: 58 },
    { x: 60, y: 66 },
    { x: 30, y: 60 },
    { x: 72, y: 34 },
  ];

  return (
    <div
      className="relative mx-auto"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* constellation field */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          {stars.map((s) => (
            <circle
              key={s.id}
              cx={s.x}
              cy={s.y}
              r={s.r}
              className="fill-gold animate-twinkle"
              style={{ animationDelay: `${s.d}s` }}
            />
          ))}
        </svg>
      </div>

      {/* glow */}
      <div className="absolute inset-6 rounded-full bg-gold/10 blur-3xl" />

      {/* orbit rings */}
      <div className="absolute inset-2 rounded-full border border-gold/15" />
      <div
        className="absolute inset-2 rounded-full border border-azure/10"
        style={{ transform: "rotateX(70deg)" }}
      />

      {/* rotating globe */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="sphere" cx="38%" cy="34%" r="75%">
            <stop offset="0%" stopColor="oklch(0.32 0.06 260)" />
            <stop offset="70%" stopColor="oklch(0.2 0.04 264)" />
            <stop offset="100%" stopColor="oklch(0.15 0.03 266)" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="34" fill="url(#sphere)" stroke="oklch(0.82 0.13 83 / 0.35)" strokeWidth="0.4" />
        <g className="origin-center animate-spin-slow" style={{ transformBox: "fill-box" }}>
          {[-24, -12, 0, 12, 24].map((off) => (
            <ellipse
              key={`m${off}`}
              cx="50"
              cy="50"
              rx={Math.max(2, 34 - Math.abs(off) * 1.05)}
              ry="34"
              className="fill-none stroke-gold/20"
              strokeWidth="0.3"
            />
          ))}
          {[-20, -8, 8, 20].map((off) => (
            <ellipse
              key={`p${off}`}
              cx="50"
              cy={50 + off}
              rx={Math.sqrt(Math.max(0, 34 * 34 - off * off))}
              ry="4"
              className="fill-none stroke-azure/20"
              strokeWidth="0.3"
            />
          ))}
          {/* golden network */}
          {nodes.map((n, i) =>
            nodes.slice(i + 1).map((m, j) => (
              <line
                key={`l${i}-${j}`}
                x1={n.x}
                y1={n.y}
                x2={m.x}
                y2={m.y}
                className="stroke-gold/25"
                strokeWidth="0.25"
              />
            )),
          )}
          {nodes.map((n, i) => (
            <circle key={`n${i}`} cx={n.x} cy={n.y} r="0.9" className="fill-gold" />
          ))}
        </g>
      </svg>

      {/* pulse aura */}
      <div className="absolute inset-4 rounded-full border border-gold/20 animate-[pulse-ring_6s_ease-in-out_infinite]" />
    </div>
  );
}
