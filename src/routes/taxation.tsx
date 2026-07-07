import { createFileRoute } from "@tanstack/react-router";
import { Coins, Sparkles } from "lucide-react";
import { PageHeader, Panel, accentBarClass, accentTextClass } from "@/components/sanctum/primitives";
import { revenueStreams } from "@/lib/sanctum-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/taxation")({
  head: () => ({
    meta: [
      { title: "Stewardship Tax Engine — Atlas Sanctum" },
      {
        name: "description",
        content:
          "A flowing ecosystem of contributions — income, VAT, corporate, digital, carbon, and biodiversity — feeding one treasury, with AI policy guidance.",
      },
    ],
  }),
  component: TaxPage,
});

function TaxPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Stewardship Tax Engine"
        title="Contribution as a living ecosystem"
        description="Every stream flows toward a shared treasury. The engine models how policy shifts ripple through the nation."
        icon={<Coins className="h-4 w-4" />}
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Panel>
          <h3 className="font-display text-xl font-semibold text-foreground">Contribution streams</h3>
          <div className="relative mt-6 grid grid-cols-2 gap-3">
            {revenueStreams.map((s) => (
              <div
                key={s.name}
                className="rounded-xl border border-border/50 bg-secondary/30 p-4 transition-all hover:border-gold/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{s.name}</span>
                  <span className={cn("h-2 w-2 rounded-full", accentBarClass(s.accent))} />
                </div>
                <p className={cn("mt-2 font-numeric text-lg", accentTextClass(s.accent))}>
                  {s.value}
                </p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary/70">
                  <div
                    className={cn("h-full rounded-full", accentBarClass(s.accent))}
                    style={{ width: `${s.share * 3}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center rounded-xl border border-gold/25 bg-gold/5 p-5 text-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold">Central Treasury</p>
              <p className="mt-1 font-numeric text-3xl font-semibold text-gradient-gold">$96.4B</p>
              <p className="text-xs text-muted-foreground">Consolidated annual contribution</p>
            </div>
          </div>
        </Panel>

        <div className="space-y-6">
          <Panel>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-gold" />
              <h3 className="font-display text-xl font-semibold text-foreground">
                AI policy guidance
              </h3>
            </div>
            <div className="mt-4 space-y-3">
              <Recommendation text="Reducing SME tax by 2% could increase employment by 14,000 jobs over three years." />
              <Recommendation text="Expanding biodiversity credits could unlock $1.4B in regenerative revenue by 2028." />
              <Recommendation text="A modest digital-economy adjustment maintains competitiveness while adding $600M annually." />
            </div>
          </Panel>

          <Panel>
            <h3 className="font-display text-lg font-semibold text-foreground">Fairness signals</h3>
            <div className="mt-4 space-y-3 text-sm">
              <Signal label="Progressivity index" value="Balanced" accent="verdant" />
              <Signal label="Compliance rate" value="94%" accent="azure" />
              <Signal label="Collection efficiency" value="+8%" accent="gold" />
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

function Recommendation({ text }: { text: string }) {
  return (
    <p className="rounded-xl border border-border/50 bg-secondary/30 p-3 text-sm leading-relaxed text-muted-foreground">
      {text}
    </p>
  );
}

function Signal({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border/40 px-3 py-2">
      <span className="text-muted-foreground">{label}</span>
      <span className={cn("font-numeric", accentTextClass(accent))}>{value}</span>
    </div>
  );
}
