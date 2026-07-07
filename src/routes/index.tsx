import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Compass } from "lucide-react";
import { Globe } from "@/components/sanctum/Globe";
import {
  Panel,
  ScoreBar,
  TrendBadge,
  accentTextClass,
} from "@/components/sanctum/primitives";
import {
  CIVILIZATION_HEALTH,
  civilizationPulse,
  healthDomains,
} from "@/lib/sanctum-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="space-y-14">
      {/* Landing experience */}
      <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-rise">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold/80">
            <Compass className="h-4 w-4" />
            <span>The Observatory</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground md:text-6xl">
            Welcome, Steward.
            <span className="block text-gradient-gold">
              The state of civilization awaits your discernment.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Not GDP. Not stock prices. The health of an entire nation — finance,
            governance, ecology, and human flourishing viewed as one interconnected
            system.
          </p>

          <div className="mt-8 flex flex-wrap items-end gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Civilization Health
              </p>
              <div className="mt-2 flex items-end gap-2">
                <span className="font-numeric text-6xl font-semibold text-gradient-gold">
                  {CIVILIZATION_HEALTH}
                </span>
                <span className="mb-2 text-lg text-muted-foreground">/ 100</span>
              </div>
              <div className="mt-3 w-64">
                <ScoreBar value={CIVILIZATION_HEALTH} />
              </div>
            </div>
          </div>
        </div>

        <Globe />
      </section>

      {/* Civilization Pulse */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Civilization Pulse
          </h2>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Real-time
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {civilizationPulse.map((stat) => (
            <div
              key={stat.label}
              className="glass-panel card-lift rounded-2xl p-4"
            >
              <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </p>
              <p className="mt-2 font-numeric text-xl font-semibold text-foreground">
                {stat.value}
              </p>
              <div className="mt-1">
                <TrendBadge trend={stat.trend} label={stat.delta} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Health domains */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              How healthy is the nation today?
            </h2>
            <p className="text-sm text-muted-foreground">
              Each domain carries a score, trend, AI insight, projection, and confidence.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {healthDomains.map((d) => (
            <Panel key={d.key}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-semibold text-foreground">{d.name}</h3>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span
                      className={cn(
                        "font-numeric text-3xl font-semibold",
                        accentTextClass(d.accent),
                      )}
                    >
                      {d.score}
                    </span>
                    <TrendBadge trend={d.trend} label={d.delta} />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Projected
                  </p>
                  <p className="font-numeric text-lg text-foreground">{d.projected}</p>
                </div>
              </div>

              <div className="mt-4">
                <ScoreBar value={d.score} accent={d.accent} />
              </div>

              <div className="mt-4 flex items-start gap-2 rounded-xl border border-border/50 bg-secondary/30 p-3">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="text-xs leading-relaxed text-muted-foreground">{d.insight}</p>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>Confidence</span>
                <span className="font-numeric text-foreground">
                  {Math.round(d.confidence * 100)}%
                </span>
              </div>
            </Panel>
          ))}
        </div>
      </section>
    </div>
  );
}
