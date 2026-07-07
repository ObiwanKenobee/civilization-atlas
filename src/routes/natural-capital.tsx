import { createFileRoute } from "@tanstack/react-router";
import { Leaf } from "lucide-react";
import { PageHeader, Panel, ScoreBar, Stat } from "@/components/sanctum/primitives";

export const Route = createFileRoute("/natural-capital")({
  head: () => ({
    meta: [
      { title: "Natural Capital — Atlas Sanctum" },
      {
        name: "description",
        content:
          "The nation's living wealth — forests, water, soil, biodiversity, and carbon — measured as an asset to be stewarded.",
      },
    ],
  }),
  component: NaturalCapitalPage,
});

const assets = [
  { label: "Forest cover", value: 78, note: "+6% restoration YoY" },
  { label: "Freshwater reserves", value: 71, note: "Stable across basins" },
  { label: "Soil health", value: 66, note: "Regenerative practices rising" },
  { label: "Biodiversity index", value: 74, note: "94 species recovering" },
  { label: "Coastal & wetlands", value: 69, note: "Protection expanding" },
  { label: "Carbon sinks", value: 83, note: "Nearing net neutral" },
];

function NaturalCapitalPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Natural Capital"
        title="The living wealth of the nation"
        description="Ecosystems are treated as enduring assets — measured, protected, and grown for future generations."
        icon={<Leaf className="h-4 w-4" />}
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Total Natural Capital" value="$1.94T" accent="verdant" />
        <Stat label="Carbon Balance" value="−2.1 Mt" accent="verdant" />
        <Stat label="Protected Land" value="34%" accent="azure" />
        <Stat label="Restoration Projects" value="128" accent="gold" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {assets.map((a) => (
          <Panel key={a.label}>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">{a.label}</h3>
              <span className="font-numeric text-xl text-verdant">{a.value}</span>
            </div>
            <div className="mt-3">
              <ScoreBar value={a.value} accent="verdant" />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{a.note}</p>
          </Panel>
        ))}
      </div>
    </div>
  );
}
