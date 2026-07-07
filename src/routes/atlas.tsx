import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Telescope } from "lucide-react";
import { Globe } from "@/components/sanctum/Globe";
import { PageHeader, Panel } from "@/components/sanctum/primitives";
import { atlasScales, atlasLayers } from "@/lib/sanctum-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/atlas")({
  head: () => ({
    meta: [
      { title: "Living Atlas — Atlas Sanctum" },
      {
        name: "description",
        content:
          "Zoom from world to street. A unified spatial view of budget, projects, infrastructure, and citizen feedback across every region.",
      },
    ],
  }),
  component: AtlasPage,
});

const regionReadout = [
  { label: "Budget", value: "$4.2B" },
  { label: "Active Projects", value: "38" },
  { label: "Hospitals", value: "12" },
  { label: "Schools", value: "146" },
  { label: "Water Systems", value: "27" },
  { label: "Roads", value: "820 km" },
  { label: "Tax Collection", value: "94%" },
  { label: "Citizen Feedback", value: "4.3 / 5" },
];

function AtlasPage() {
  const [scale, setScale] = useState<string>("Country");
  const [activeLayers, setActiveLayers] = useState<string[]>(["Budget", "Projects"]);

  const toggleLayer = (l: string) =>
    setActiveLayers((prev) =>
      prev.includes(l) ? prev.filter((x) => x !== l) : [...prev, l],
    );

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Living Atlas"
        title="The nation, from world to street"
        description="Satellite imagery, GIS layers, and public infrastructure combine into a single spatial view. Select a scale, toggle layers, and read any region."
        icon={<Telescope className="h-4 w-4" />}
      />

      <div className="flex flex-wrap gap-2">
        {atlasScales.map((s) => (
          <button
            key={s}
            onClick={() => setScale(s)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-all",
              scale === s
                ? "border-gold/50 bg-gold/15 text-gold"
                : "border-border/60 text-muted-foreground hover:text-foreground",
            )}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Panel className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_50%_50%,transparent_60%,var(--background)_100%)]" />
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Viewing scale: <span className="text-foreground">{scale}</span>
            </p>
            <span className="text-xs text-verdant">● Live layers · {activeLayers.length}</span>
          </div>
          <Globe size={380} />
          <div className="mt-4 flex flex-wrap gap-2">
            {atlasLayers.map((l) => (
              <button
                key={l}
                onClick={() => toggleLayer(l)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs transition-all",
                  activeLayers.includes(l)
                    ? "border-azure/50 bg-azure/15 text-azure"
                    : "border-border/60 text-muted-foreground hover:text-foreground",
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </Panel>

        <Panel>
          <h3 className="font-display text-xl font-semibold text-foreground">
            Region readout
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Northern Highlands · {scale}
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {regionReadout.map((r) => (
              <div key={r.label} className="rounded-xl border border-border/50 bg-secondary/30 p-3">
                <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  {r.label}
                </p>
                <p className="mt-1 font-numeric text-lg text-foreground">{r.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-gold/25 bg-gold/5 p-4">
            <p className="text-xs uppercase tracking-widest text-gold">Environmental indicator</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Rainfall 12% below seasonal average. Drought watch active — recommend reserve
              allocation review.
            </p>
          </div>
        </Panel>
      </div>
    </div>
  );
}
