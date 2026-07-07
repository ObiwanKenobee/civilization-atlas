import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Vault, Sparkles } from "lucide-react";
import { PageHeader, Panel, Stat, TrendBadge, accentBarClass } from "@/components/sanctum/primitives";
import { revenueStreams, treasuryPanels } from "@/lib/sanctum-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/treasury")({
  head: () => ({
    meta: [
      { title: "Treasury Chamber — Atlas Sanctum" },
      {
        name: "description",
        content:
          "The financial heart of the nation — treasury balance, cash flow, reserves, assets, and a daily AI forecast.",
      },
    ],
  }),
  component: TreasuryPage,
});

function TreasuryPage() {
  const [hover, setHover] = useState<string | null>(null);
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Treasury Chamber"
        title="The financial heart, as a control room"
        description="Consolidated visibility across every source of value the nation holds and moves."
        icon={<Vault className="h-4 w-4" />}
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {treasuryPanels.map((p) => (
          <div key={p.label} className="glass-panel card-lift rounded-2xl p-5">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{p.label}</p>
            <p className="mt-2 font-numeric text-2xl font-semibold text-foreground">{p.value}</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{p.sub}</span>
              <TrendBadge trend={p.trend} label="" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Panel>
          <h3 className="font-display text-xl font-semibold text-foreground">Revenue sources</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Streams feeding the consolidated fund.
          </p>
          <div className="mt-5 space-y-3">
            {revenueStreams.map((s) => (
              <div
                key={s.name}
                onMouseEnter={() => setHover(s.name)}
                onMouseLeave={() => setHover(null)}
                className="flex items-center gap-4"
              >
                <span className="w-40 shrink-0 text-sm text-foreground">{s.name}</span>
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-secondary/70">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-500",
                      accentBarClass(s.accent),
                      hover === s.name ? "opacity-100" : "opacity-80",
                    )}
                    style={{ width: `${s.share * 3}%` }}
                  />
                </div>
                <span className="w-20 shrink-0 text-right font-numeric text-sm text-muted-foreground">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="flex flex-col">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gold" />
            <h3 className="font-display text-xl font-semibold text-foreground">Daily AI forecast</h3>
          </div>
          <p className="mt-4 rounded-xl border border-gold/25 bg-gold/5 p-4 text-sm leading-relaxed text-foreground">
            "Revenue increased by 8%. Infrastructure spending remains on target. Healthcare
            procurement shows elevated risk requiring review."
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Stat label="Reserve cover" value="6.2 mo" accent="verdant" />
            <Stat label="Debt service" value="11.4%" accent="ember" />
            <Stat label="Liquidity" value="Strong" accent="azure" />
            <Stat label="Outlook" value="+8.0%" accent="gold" />
          </div>
        </Panel>
      </div>
    </div>
  );
}
