import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ScrollText } from "lucide-react";
import { PageHeader, Panel, ScoreBar } from "@/components/sanctum/primitives";
import { ministries, type Ministry } from "@/lib/sanctum-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/budget")({
  head: () => ({
    meta: [
      { title: "Budget Cathedral — Atlas Sanctum" },
      {
        name: "description",
        content:
          "Budgets presented as living structures. Explore each ministry's approved funds, spending, outcomes, risk, and citizen sentiment.",
      },
    ],
  }),
  component: BudgetPage,
});

const riskTone: Record<Ministry["risk"], string> = {
  Low: "text-verdant",
  Moderate: "text-gold",
  Elevated: "text-ember",
};

function BudgetPage() {
  const [selected, setSelected] = useState<Ministry>(ministries[0]);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Budget Cathedral"
        title="Budgets as living structures"
        description="Not spreadsheets — pillars of stewardship. Select a ministry to reveal its full account."
        icon={<ScrollText className="h-4 w-4" />}
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Panel>
          <h3 className="font-display text-xl font-semibold text-foreground">Ministries</h3>
          <div className="mt-5 space-y-4">
            {ministries.map((m) => (
              <button
                key={m.name}
                onClick={() => setSelected(m)}
                className={cn(
                  "w-full rounded-xl border p-4 text-left transition-all",
                  selected.name === m.name
                    ? "border-gold/40 bg-gold/5"
                    : "border-border/50 hover:border-gold/30",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{m.name}</span>
                  <span className="font-numeric text-sm text-gold">{m.utilization}%</span>
                </div>
                <div className="mt-2">
                  <ScoreBar value={m.utilization} />
                </div>
              </button>
            ))}
          </div>
        </Panel>

        <Panel>
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl font-semibold text-foreground">
              {selected.name}
            </h3>
            <span className={cn("text-sm font-medium", riskTone[selected.risk])}>
              {selected.risk} risk
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Detail label="Approved Budget" value={selected.approved} />
            <Detail label="Actual Spending" value={selected.spent} />
            <Detail label="Remaining Funds" value={selected.remaining} />
            <Detail label="Utilization" value={`${selected.utilization}%`} />
          </div>

          <div className="mt-6 space-y-4">
            <Meter label="Impact Score" value={selected.impact} accent="verdant" />
            <Meter label="Citizen Sentiment" value={selected.sentiment} accent="azure" />
          </div>

          <div className="mt-6 rounded-xl border border-border/50 bg-secondary/30 p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Expected Outcomes
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Sustained service delivery with measurable gains across served communities;
              risk assessment updated weekly against procurement and disbursement signals.
            </p>
          </div>
        </Panel>
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border/50 bg-secondary/30 p-4">
      <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 font-numeric text-xl text-foreground">{value}</p>
    </div>
  );
}

function Meter({ label, value, accent }: { label: string; value: number; accent: string }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-numeric text-foreground">{value}</span>
      </div>
      <ScoreBar value={value} accent={accent} />
    </div>
  );
}
