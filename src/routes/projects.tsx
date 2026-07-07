import { createFileRoute } from "@tanstack/react-router";
import { FolderKanban } from "lucide-react";
import { PageHeader, Panel, ScoreBar, accentTextClass } from "@/components/sanctum/primitives";
import { impactProjects } from "@/lib/sanctum-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Atlas Sanctum" },
      {
        name: "description",
        content:
          "Every active national project — status, budget, impact, and the communities it serves.",
      },
    ],
  }),
  component: ProjectsPage,
});

const status = ["On track", "Ahead", "At risk", "On track", "On track"];
const progress = [64, 88, 42, 71, 79];

function ProjectsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Projects"
        title="Stewardship in motion"
        description="Every commitment the nation is delivering, viewed as living work rather than line items."
        icon={<FolderKanban className="h-4 w-4" />}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {impactProjects.map((p, i) => {
          const tone =
            status[i] === "At risk"
              ? "text-ember"
              : status[i] === "Ahead"
                ? "text-verdant"
                : "text-azure";
          return (
            <Panel key={p.name}>
              <div className="flex items-start justify-between">
                <h3 className="text-base font-semibold text-foreground">{p.name}</h3>
                <span className={cn("text-xs font-medium", tone)}>{status[i]}</span>
              </div>
              <div className="mt-4">
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-numeric text-foreground">{progress[i]}%</span>
                </div>
                <ScoreBar value={progress[i]} accent="gold" />
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Impact</span>
                <span className={cn("font-numeric", accentTextClass("verdant"))}>{p.impact}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Communities</span>
                <span className="text-foreground">{p.communities}</span>
              </div>
            </Panel>
          );
        })}
      </div>
    </div>
  );
}
