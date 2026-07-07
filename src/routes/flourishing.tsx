import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake } from "lucide-react";
import { PageHeader, Panel, ScoreBar, Stat } from "@/components/sanctum/primitives";

export const Route = createFileRoute("/flourishing")({
  head: () => ({
    meta: [
      { title: "Human Flourishing — Atlas Sanctum" },
      {
        name: "description",
        content:
          "Beyond income — wellbeing, opportunity, belonging, and dignity measured as the true purpose of public finance.",
      },
    ],
  }),
  component: FlourishingPage,
});

const dimensions = [
  { label: "Wellbeing & health", value: 84 },
  { label: "Opportunity & mobility", value: 79 },
  { label: "Belonging & community", value: 81 },
  { label: "Dignity & inclusion", value: 77 },
  { label: "Safety & security", value: 86 },
  { label: "Purpose & participation", value: 75 },
];

function FlourishingPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Human Flourishing"
        title="The true purpose of public finance"
        description="Every figure ultimately tells the story of people. This is where the numbers become human."
        icon={<HeartHandshake className="h-4 w-4" />}
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Flourishing Index" value="80.4" accent="amethyst" />
        <Stat label="Life Satisfaction" value="7.6 / 10" accent="gold" />
        <Stat label="Youth Opportunity" value="82%" accent="azure" />
        <Stat label="Social Trust" value="+4%" accent="verdant" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {dimensions.map((d) => (
          <Panel key={d.label}>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">{d.label}</h3>
              <span className="font-numeric text-xl text-amethyst">{d.value}</span>
            </div>
            <div className="mt-3">
              <ScoreBar value={d.value} accent="amethyst" />
            </div>
          </Panel>
        ))}
      </div>
    </div>
  );
}
