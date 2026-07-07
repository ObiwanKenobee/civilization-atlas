import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Telescope } from "lucide-react";
import { PageHeader, Panel } from "@/components/sanctum/primitives";
import { forecastHorizon, type ForecastYear } from "@/lib/sanctum-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/forecasts")({
  head: () => ({
    meta: [
      { title: "Predictive Horizon — Atlas Sanctum" },
      {
        name: "description",
        content:
          "A timeline into 2050. Explore population, climate, debt sustainability, and economic scenarios for long-term stewardship.",
      },
    ],
  }),
  component: ForecastPage,
});

const statusStyle: Record<ForecastYear["status"], string> = {
  opportunity: "border-verdant/40 bg-verdant/5",
  watch: "border-gold/40 bg-gold/5",
  risk: "border-ember/40 bg-ember/5",
};

const scenarios = [
  "Population Growth",
  "Climate Change",
  "Healthcare Demand",
  "Education Capacity",
  "Infrastructure Needs",
  "Debt Sustainability",
  "Economic Expansion",
];

function ForecastPage() {
  const [selected, setSelected] = useState<ForecastYear>(forecastHorizon[3]);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Predictive Horizon"
        title="Stewardship across generations"
        description="Predict rather than merely report. Trace the nation's trajectory and weigh the actions that compound over decades."
        icon={<Telescope className="h-4 w-4" />}
      />

      <div className="flex flex-wrap gap-2">
        {scenarios.map((s) => (
          <span
            key={s}
            className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>

      <Panel>
        <div className="relative overflow-x-auto">
          <div className="flex min-w-[640px] items-stretch gap-3">
            {forecastHorizon.map((f) => (
              <button
                key={f.year}
                onClick={() => setSelected(f)}
                className={cn(
                  "flex-1 rounded-2xl border p-4 text-left transition-all",
                  selected.year === f.year
                    ? statusStyle[f.status]
                    : "border-border/50 hover:border-gold/30",
                )}
              >
                <p className="font-display text-2xl font-semibold text-foreground">{f.year}</p>
                <p className="mt-2 text-xs text-muted-foreground">Pop {f.population}</p>
                <p className="text-xs text-muted-foreground">Debt {f.debt}</p>
                <p className="text-xs text-muted-foreground">GDP {f.economy}</p>
              </button>
            ))}
          </div>
        </div>
      </Panel>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Detail label="Year" value={selected.year} />
        <Detail label="Population" value={selected.population} />
        <Detail label="Debt / GDP" value={selected.debt} />
        <Detail label="Climate" value={selected.climate} />
        <Detail label="Economy" value={selected.economy} />
        <Detail label="Status" value={selected.status} />
      </div>

      <Panel>
        <h3 className="font-display text-lg font-semibold text-foreground">Stewardship note</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          By {selected.year}, sustained investment in education, ecology, and resilient
          infrastructure keeps debt on a declining path while population and prosperity grow.
          The greatest returns come from actions taken today whose benefits mature over decades.
        </p>
      </Panel>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-panel rounded-2xl p-5">
      <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 font-numeric text-xl capitalize text-foreground">{value}</p>
    </div>
  );
}
