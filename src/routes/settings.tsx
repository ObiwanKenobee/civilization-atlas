import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Settings } from "lucide-react";
import { PageHeader, Panel } from "@/components/sanctum/primitives";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Atlas Sanctum" },
      {
        name: "description",
        content: "Configure your Atlas Sanctum observatory — profile, notifications, and defaults.",
      },
    ],
  }),
  component: SettingsPage,
});

const toggles = [
  { label: "Daily AI treasury briefing", on: true },
  { label: "Risk & anomaly alerts", on: true },
  { label: "Citizen sentiment digests", on: false },
  { label: "Forecast horizon updates", on: true },
];

function Toggle({ label, initial }: { label: string; initial: boolean }) {
  const [on, setOn] = useState(initial);
  return (
    <button
      onClick={() => setOn((v) => !v)}
      className="flex w-full items-center justify-between rounded-xl border border-border/50 bg-secondary/30 px-4 py-3"
    >
      <span className="text-sm text-foreground">{label}</span>
      <span
        className={cn(
          "relative h-6 w-11 rounded-full transition-colors",
          on ? "bg-gold" : "bg-secondary",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 h-5 w-5 rounded-full bg-background transition-all",
            on ? "left-[22px]" : "left-0.5",
          )}
        />
      </span>
    </button>
  );
}

function SettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Settings"
        title="Tune your observatory"
        description="Control how the Sanctum communicates and what it surfaces first."
        icon={<Settings className="h-4 w-4" />}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel>
          <h3 className="font-display text-lg font-semibold text-foreground">Steward profile</h3>
          <div className="mt-4 space-y-4">
            <Field label="Name" value="Chief Steward" />
            <Field label="Role" value="National Treasury" />
            <Field label="Region" value="All regions" />
          </div>
        </Panel>

        <Panel>
          <h3 className="font-display text-lg font-semibold text-foreground">Notifications</h3>
          <div className="mt-4 space-y-3">
            {toggles.map((t) => (
              <Toggle key={t.label} label={t.label} initial={t.on} />
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        defaultValue={value}
        className="mt-1 w-full rounded-xl border border-border/60 bg-secondary/40 px-4 py-2 text-sm text-foreground focus:border-gold/50 focus:outline-none"
      />
    </div>
  );
}
