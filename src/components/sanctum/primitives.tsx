import { type ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import type { Trend } from "@/lib/sanctum-data";
import { cn } from "@/lib/utils";

const accentText: Record<string, string> = {
  gold: "text-gold",
  verdant: "text-verdant",
  azure: "text-azure",
  amethyst: "text-amethyst",
  ember: "text-ember",
};

const accentBar: Record<string, string> = {
  gold: "bg-gold",
  verdant: "bg-verdant",
  azure: "bg-azure",
  amethyst: "bg-amethyst",
  ember: "bg-ember",
};

export function accentTextClass(accent: string) {
  return accentText[accent] ?? "text-gold";
}
export function accentBarClass(accent: string) {
  return accentBar[accent] ?? "bg-gold";
}

export function PageHeader({
  eyebrow,
  title,
  description,
  icon,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="animate-rise flex flex-col gap-4 border-b border-border/60 pb-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold/80">
          {icon}
          <span>{eyebrow}</span>
        </div>
        <h1 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      {children ? <div className="shrink-0">{children}</div> : null}
    </header>
  );
}

export function TrendBadge({ trend, label }: { trend: Trend; label: string }) {
  const Icon = trend === "up" ? ArrowUpRight : trend === "down" ? ArrowDownRight : Minus;
  const tone =
    trend === "up"
      ? "text-verdant"
      : trend === "down"
        ? "text-azure"
        : "text-muted-foreground";
  return (
    <span className={cn("inline-flex items-center gap-1 font-numeric text-xs", tone)}>
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

export function ScoreBar({
  value,
  accent = "gold",
  className,
}: {
  value: number;
  accent?: string;
  className?: string;
}) {
  return (
    <div className={cn("h-1.5 w-full overflow-hidden rounded-full bg-secondary/70", className)}>
      <div
        className={cn("h-full rounded-full transition-all duration-700", accentBarClass(accent))}
        style={{ width: `${Math.min(100, value)}%` }}
      />
    </div>
  );
}

export function Panel({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("glass-panel card-lift rounded-2xl p-6", className)}>{children}</div>
  );
}

export function Ring({ value, accent = "gold" }: { value: number; accent?: string }) {
  const radius = 34;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (Math.min(100, value) / 100) * circ;
  return (
    <div className="relative h-24 w-24">
      <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
        <circle cx="40" cy="40" r={radius} className="fill-none stroke-secondary" strokeWidth="6" />
        <circle
          cx="40"
          cy="40"
          r={radius}
          className={cn("fill-none transition-all duration-1000", accentTextClass(accent))}
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-numeric text-lg font-semibold text-foreground">{value}</span>
      </div>
    </div>
  );
}

export function Stat({
  label,
  value,
  sub,
  accent = "gold",
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: string;
}) {
  return (
    <div className="glass-panel card-lift rounded-2xl p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p className={cn("mt-3 font-numeric text-2xl font-semibold", accentTextClass(accent))}>
        {value}
      </p>
      {sub ? <p className="mt-1 text-xs text-muted-foreground">{sub}</p> : null}
    </div>
  );
}
