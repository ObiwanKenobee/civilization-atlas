import { createFileRoute } from "@tanstack/react-router";
import { Landmark } from "lucide-react";
import { PageHeader, Panel } from "@/components/sanctum/primitives";
import { institutions, type Institution } from "@/lib/sanctum-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/governance")({
  head: () => ({
    meta: [
      { title: "Governance Chamber — Atlas Sanctum" },
      {
        name: "description",
        content:
          "A national institutional map. Healthy institutions glow softly, stressed pulse amber, critical illuminate red.",
      },
    ],
  }),
  component: GovernancePage,
});

const healthStyle: Record<
  Institution["health"],
  { dot: string; ring: string; label: string }
> = {
  healthy: { dot: "bg-verdant", ring: "border-verdant/30", label: "Healthy" },
  stressed: {
    dot: "bg-gold animate-pulse",
    ring: "border-gold/40",
    label: "Stressed",
  },
  critical: {
    dot: "bg-destructive animate-pulse",
    ring: "border-destructive/50",
    label: "Critical",
  },
};

function GovernancePage() {
  const counts = {
    healthy: institutions.filter((i) => i.health === "healthy").length,
    stressed: institutions.filter((i) => i.health === "stressed").length,
    critical: institutions.filter((i) => i.health === "critical").length,
  };

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Governance Chamber"
        title="The institutional map of the nation"
        description="Ministries, agencies, and counties as an interconnected system — with risk signals surfaced in real time."
        icon={<Landmark className="h-4 w-4" />}
      />

      <div className="grid gap-3 sm:grid-cols-3">
        <Summary label="Healthy" value={counts.healthy} dot="bg-verdant" />
        <Summary label="Stressed" value={counts.stressed} dot="bg-gold" />
        <Summary label="Critical" value={counts.critical} dot="bg-destructive" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {institutions.map((inst) => {
          const s = healthStyle[inst.health];
          return (
            <Panel key={inst.name} className={cn("border", s.ring)}>
              <div className="flex items-start justify-between">
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  {inst.type}
                </span>
                <span className={cn("mt-1 h-2.5 w-2.5 rounded-full", s.dot)} />
              </div>
              <h3 className="mt-2 text-base font-semibold text-foreground">{inst.name}</h3>
              <p className="mt-1 font-numeric text-lg text-gold">{inst.budget}</p>
              <p className="mt-3 text-xs text-muted-foreground">{inst.note}</p>
              <p className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground/70">
                {s.label}
              </p>
            </Panel>
          );
        })}
      </div>
    </div>
  );
}

function Summary({ label, value, dot }: { label: string; value: number; dot: string }) {
  return (
    <div className="glass-panel flex items-center gap-4 rounded-2xl p-5">
      <span className={cn("h-3 w-3 rounded-full", dot)} />
      <div>
        <p className="font-numeric text-2xl font-semibold text-foreground">{value}</p>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
