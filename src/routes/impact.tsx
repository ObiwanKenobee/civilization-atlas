import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TreePine } from "lucide-react";
import { PageHeader, Panel, ScoreBar, accentTextClass } from "@/components/sanctum/primitives";
import { impactProjects, returnDimensions, type ImpactProject } from "@/lib/sanctum-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact Observatory — Atlas Sanctum" },
      {
        name: "description",
        content:
          "Where other dashboards end, Atlas Sanctum begins. Every project earns a living impact score and a Return on Humanity.",
      },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  const [selected, setSelected] = useState<ImpactProject>(impactProjects[3]);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Impact Observatory"
        title="Expenditure is where we begin"
        description="Every project carries a living score and a multidimensional Return on Humanity — not just cost, but enduring value."
        icon={<TreePine className="h-4 w-4" />}
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <Panel>
          <h3 className="font-display text-xl font-semibold text-foreground">Living project scores</h3>
          <div className="mt-5 space-y-3">
            {impactProjects.map((p) => (
              <button
                key={p.name}
                onClick={() => setSelected(p)}
                className={cn(
                  "flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all",
                  selected.name === p.name
                    ? "border-verdant/40 bg-verdant/5"
                    : "border-border/50 hover:border-verdant/30",
                )}
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{p.name}</p>
                  <div className="mt-2">
                    <ScoreBar value={p.impact} accent="verdant" />
                  </div>
                </div>
                <span className="font-numeric text-2xl font-semibold text-verdant">
                  {p.impact}
                </span>
              </button>
            ))}
          </div>
        </Panel>

        <div className="space-y-6">
          <Panel>
            <h3 className="font-display text-2xl font-semibold text-foreground">{selected.name}</h3>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <Metric label="Lives Improved" value={selected.lives} />
              <Metric label="Jobs Created" value={selected.jobs} />
              <Metric label="CO₂ Removed" value={selected.co2} />
              <Metric label="Communities" value={selected.communities} />
              <Metric label="Future Savings" value={selected.savings} />
              <Metric label="Return / Humanity" value={`${selected.roh}×`} accent="gold" />
            </div>
          </Panel>

          <Panel>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Return on Humanity
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Every investment measured across six enduring dimensions.
            </p>
            <div className="mt-5 space-y-3">
              {returnDimensions.map((r) => (
                <div key={r.label}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{r.label}</span>
                    <span className={cn("font-numeric", accentTextClass(r.accent))}>
                      {r.value}
                    </span>
                  </div>
                  <ScoreBar value={r.value} accent={r.accent} />
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  accent = "verdant",
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div className="rounded-xl border border-border/50 bg-secondary/30 p-4">
      <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className={cn("mt-1 font-numeric text-lg", accentTextClass(accent))}>{value}</p>
    </div>
  );
}
