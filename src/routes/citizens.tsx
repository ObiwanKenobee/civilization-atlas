import { createFileRoute } from "@tanstack/react-router";
import { Users, HeartHandshake, ShieldCheck, MessageSquare } from "lucide-react";
import { PageHeader, Panel, Stat } from "@/components/sanctum/primitives";

export const Route = createFileRoute("/citizens")({
  head: () => ({
    meta: [
      { title: "Citizen Portal — Atlas Sanctum" },
      {
        name: "description",
        content:
          "A personalized civic view — taxes paid, public services, local budget, benefits, and impact contributions. Transparency and participation.",
      },
    ],
  }),
  component: CitizensPage,
});

const services = [
  "Healthcare access",
  "Public schooling",
  "Clean water",
  "Road & transit",
  "Waste & sanitation",
  "Emergency services",
];

const opportunities = [
  { title: "Coastal Wetland Restoration", slots: "42 volunteers needed" },
  { title: "Community Literacy Drive", slots: "18 volunteers needed" },
  { title: "Neighborhood Clean Energy Co-op", slots: "Open enrollment" },
];

function CitizensPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Citizen Portal"
        title="Your place in the nation"
        description="Every citizen sees their own civic view — what they contribute, what they receive, and how they can participate."
        icon={<Users className="h-4 w-4" />}
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Taxes Paid (YTD)" value="$8,420" accent="gold" />
        <Stat label="Local Budget" value="$2.1B" accent="azure" />
        <Stat label="Benefit Eligibility" value="3 active" accent="verdant" />
        <Stat label="Impact Contributions" value="1.4 t CO₂" accent="verdant" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Panel>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-gold" />
            <h3 className="font-display text-lg font-semibold text-foreground">Public services</h3>
          </div>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li
                key={s}
                className="flex items-center justify-between rounded-lg border border-border/40 px-3 py-2 text-sm"
              >
                <span className="text-foreground">{s}</span>
                <span className="text-xs text-verdant">Active</span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel>
          <div className="flex items-center gap-2">
            <HeartHandshake className="h-5 w-5 text-gold" />
            <h3 className="font-display text-lg font-semibold text-foreground">
              Volunteer opportunities
            </h3>
          </div>
          <ul className="mt-4 space-y-3">
            {opportunities.map((o) => (
              <li key={o.title} className="rounded-xl border border-border/50 bg-secondary/30 p-3">
                <p className="text-sm font-medium text-foreground">{o.title}</p>
                <p className="text-xs text-muted-foreground">{o.slots}</p>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel>
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-gold" />
            <h3 className="font-display text-lg font-semibold text-foreground">Your voice</h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Share feedback on local projects and services. Your input shapes the sentiment
            signals leaders see.
          </p>
          <textarea
            placeholder="Suggest an improvement for your community…"
            className="mt-4 h-28 w-full resize-none rounded-xl border border-border/60 bg-secondary/40 p-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-gold/50 focus:outline-none"
          />
          <button className="mt-3 w-full rounded-full bg-gradient-to-r from-gold to-gold-soft py-2 text-sm font-medium text-primary-foreground">
            Submit feedback
          </button>
          <div className="mt-4 rounded-xl border border-border/50 bg-secondary/30 p-3">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Digital Identity
            </p>
            <p className="mt-1 font-numeric text-sm text-foreground">Verified · Steward tier</p>
          </div>
        </Panel>
      </div>
    </div>
  );
}
