import { createFileRoute } from "@tanstack/react-router";
import { Building2 } from "lucide-react";
import { PageHeader, Panel, ScoreBar, Stat } from "@/components/sanctum/primitives";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure — Atlas Sanctum" },
      {
        name: "description",
        content:
          "The physical backbone of the nation — roads, water, energy, and connectivity — tracked for condition, coverage, and resilience.",
      },
    ],
  }),
  component: InfrastructurePage,
});

const systems = [
  { label: "Road network", value: 82, note: "Bridge program +14d delay" },
  { label: "Water systems", value: 76, note: "428 communities served" },
  { label: "Energy grid", value: 88, note: "62% renewable" },
  { label: "Digital connectivity", value: 71, note: "Rural expansion active" },
  { label: "Public transit", value: 68, note: "Urban corridors growing" },
  { label: "Sanitation", value: 79, note: "Coverage improving" },
];

function InfrastructurePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Infrastructure"
        title="The backbone of shared life"
        description="Condition, coverage, and resilience of the systems that carry daily life across the nation."
        icon={<Building2 className="h-4 w-4" />}
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Asset Value" value="$680B" accent="gold" />
        <Stat label="Active Builds" value="214" accent="azure" />
        <Stat label="Resilience Score" value="78" accent="verdant" />
        <Stat label="On-schedule" value="86%" accent="gold" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {systems.map((s) => (
          <Panel key={s.label}>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">{s.label}</h3>
              <span className="font-numeric text-xl text-gold">{s.value}</span>
            </div>
            <div className="mt-3">
              <ScoreBar value={s.value} accent="gold" />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{s.note}</p>
          </Panel>
        ))}
      </div>
    </div>
  );
}
