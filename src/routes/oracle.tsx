import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, Send, Brain } from "lucide-react";
import { PageHeader, Panel } from "@/components/sanctum/primitives";
import { oraclePrompts } from "@/lib/sanctum-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/oracle")({
  head: () => ({
    meta: [
      { title: "AI Oracle — Atlas Sanctum" },
      {
        name: "description",
        content:
          "A conversational reasoning engine that answers with simulations, evidence, and trade-offs for long-term stewardship.",
      },
    ],
  }),
  component: OraclePage,
});

interface Msg {
  role: "steward" | "oracle";
  text: string;
}

const cannedResponses: Record<string, string> = {
  default:
    "I can simulate scenarios across finance, ecology, and human flourishing. Ask about drought, emergency funding, corruption risk, or long-term policy — I'll respond with evidence and trade-offs.",
  drought:
    "If drought extends another year, projected agricultural output falls 9%, food security drops to 84%, and emergency reserve draw rises to $6.1B. Recommended action: pre-position $2.4B to the three highest-risk counties now — this reduces downstream relief cost by an estimated 38%.",
  emergency:
    "Three counties require priority funding: Northern (drought, critical), Eastern Ridge (flood exposure, high), and Delta (health capacity, elevated). Allocating $1.9B across them protects an estimated 4.1M citizens and preserves institutional trust.",
  corruption:
    "Corruption risk concentrates in procurement. Real-time disbursement tracking, open contracting, and citizen feedback loops could reduce leakage by an estimated 22% within 18 months, recovering ~$1.3B annually.",
  education:
    "Increasing education funding by 12% raises projected literacy to 96% and adds an estimated $9.4B in lifetime economic value per cohort. Future Generation Return: 5.8×. This is among the highest-yield stewardship actions available today.",
};

function respond(q: string): string {
  const s = q.toLowerCase();
  if (s.includes("drought")) return cannedResponses.drought;
  if (s.includes("emergency") || s.includes("counties")) return cannedResponses.emergency;
  if (s.includes("corruption")) return cannedResponses.corruption;
  if (s.includes("education")) return cannedResponses.education;
  return cannedResponses.default;
}

function OraclePage() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "oracle", text: cannedResponses.default },
  ]);
  const [input, setInput] = useState("");

  const ask = (q: string) => {
    const question = q.trim();
    if (!question) return;
    setMessages((prev) => [
      ...prev,
      { role: "steward", text: question },
      { role: "oracle", text: respond(question) },
    ]);
    setInput("");
  };

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="AI Oracle"
        title="Ask the nation's reasoning engine"
        description="Not a search box — a conversation about consequence. The Oracle responds with simulations, evidence, and trade-offs."
        icon={<Sparkles className="h-4 w-4" />}
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
        <Panel className="h-fit">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-gold" />
            <h3 className="font-display text-lg font-semibold text-foreground">Invocations</h3>
          </div>
          <div className="mt-4 space-y-2">
            {oraclePrompts.map((p) => (
              <button
                key={p}
                onClick={() => ask(p)}
                className="w-full rounded-xl border border-border/50 bg-secondary/30 p-3 text-left text-sm text-muted-foreground transition-all hover:border-gold/30 hover:text-foreground"
              >
                {p}
              </button>
            ))}
          </div>
        </Panel>

        <Panel className="flex h-[560px] flex-col">
          <div className="flex-1 space-y-4 overflow-y-auto pr-1">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn("flex", m.role === "steward" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                    m.role === "steward"
                      ? "bg-gold/15 text-foreground"
                      : "border border-border/50 bg-secondary/40 text-muted-foreground",
                  )}
                >
                  {m.role === "oracle" && (
                    <span className="mb-1 flex items-center gap-1 text-xs font-medium text-gold">
                      <Sparkles className="h-3 w-3" /> Oracle
                    </span>
                  )}
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
            className="mt-4 flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What action today creates the greatest benefit for future generations?"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
            />
            <button
              type="submit"
              className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-soft text-primary-foreground"
              aria-label="Ask the Oracle"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </Panel>
      </div>
    </div>
  );
}
