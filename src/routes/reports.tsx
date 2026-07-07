import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download } from "lucide-react";
import { PageHeader, Panel } from "@/components/sanctum/primitives";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Reports — Atlas Sanctum" },
      {
        name: "description",
        content:
          "Curated stewardship reports — treasury, budget performance, impact, and long-term forecasts, ready to share.",
      },
    ],
  }),
  component: ReportsPage,
});

const reports = [
  { title: "State of Civilization — Annual Review", date: "2026 · Q2", type: "Flagship" },
  { title: "Treasury & Cash Flow Statement", date: "June 2026", type: "Financial" },
  { title: "Budget Performance by Ministry", date: "June 2026", type: "Financial" },
  { title: "Impact & Return on Humanity", date: "2026 · Q2", type: "Impact" },
  { title: "Natural Capital Account", date: "2026 · Q2", type: "Ecological" },
  { title: "Predictive Horizon to 2050", date: "2026", type: "Forecast" },
];

function ReportsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Reports"
        title="The record of stewardship"
        description="Transparent, shareable accounts of how the nation's resources are held and directed."
        icon={<FileText className="h-4 w-4" />}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reports.map((r) => (
          <Panel key={r.title} className="flex flex-col">
            <span className="w-fit rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-widest text-gold">
              {r.type}
            </span>
            <h3 className="mt-4 text-base font-semibold text-foreground">{r.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{r.date}</p>
            <button className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-border/60 py-2 text-sm text-foreground transition-colors hover:border-gold/40 hover:text-gold">
              <Download className="h-4 w-4" /> Download
            </button>
          </Panel>
        ))}
      </div>
    </div>
  );
}
