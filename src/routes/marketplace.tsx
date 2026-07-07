import { createFileRoute } from "@tanstack/react-router";
import { Store } from "lucide-react";
import { PageHeader, Panel, accentTextClass } from "@/components/sanctum/primitives";
import { marketAssets } from "@/lib/sanctum-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Sanctum Marketplace — Atlas Sanctum" },
      {
        name: "description",
        content:
          "Regenerative finance. Exchange verified impact assets with transparent provenance and measurable outcomes.",
      },
    ],
  }),
  component: MarketplacePage,
});

function MarketplacePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Sanctum Marketplace"
        title="Regenerative finance, made legible"
        description="Every asset carries transparent provenance and a measurable outcome. Value that heals rather than extracts."
        icon={<Store className="h-4 w-4" />}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {marketAssets.map((a) => (
          <Panel key={a.name}>
            <div className="flex items-start justify-between">
              <h3 className="text-base font-semibold text-foreground">{a.name}</h3>
              <span className={cn("h-2.5 w-2.5 rounded-full", accentTextClass(a.accent).replace("text-", "bg-"))} />
            </div>
            <p className={cn("mt-2 font-numeric text-2xl font-semibold", accentTextClass(a.accent))}>
              {a.price}
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <Row label="Available" value={a.supply} />
              <Row label="Provenance" value={a.provenance} />
              <Row label="Measured outcome" value={a.outcome} />
            </div>
            <button className="mt-5 w-full rounded-full border border-gold/40 bg-gold/10 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold/20">
              View & exchange
            </button>
          </Panel>
        ))}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-border/40 pb-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right text-foreground">{value}</span>
    </div>
  );
}
