import { useState, type ReactNode } from "react";
import { Bell, Menu, Search, X } from "lucide-react";
import { AppSidebar } from "./AppSidebar";
import { notifications } from "@/lib/sanctum-data";
import { cn } from "@/lib/utils";

const toneDot: Record<string, string> = {
  positive: "bg-verdant",
  neutral: "bg-azure",
  warning: "bg-ember",
};

export function SanctumShell({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <div className="min-h-screen w-full">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-sidebar-border bg-sidebar/80 backdrop-blur-xl lg:block">
        <AppSidebar />
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 w-72 border-r border-sidebar-border bg-sidebar">
            <AppSidebar onNavigate={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-border/60 bg-background/70 px-4 backdrop-blur-xl md:px-8">
          <button
            className="grid h-9 w-9 place-items-center rounded-lg border border-border/60 text-muted-foreground lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
          >
            <Menu className="h-4 w-4" />
          </button>

          <div className="relative hidden flex-1 items-center md:flex">
            <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Ask the Sanctum — regions, ministries, projects…"
              className="h-10 w-full max-w-md rounded-full border border-border/60 bg-secondary/50 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-gold/50 focus:outline-none"
            />
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1.5 sm:flex">
              <span className="h-2 w-2 animate-pulse rounded-full bg-verdant" />
              <span className="text-xs text-muted-foreground">Live · systems nominal</span>
            </div>

            <div className="relative">
              <button
                className="relative grid h-9 w-9 place-items-center rounded-lg border border-border/60 text-muted-foreground hover:text-gold"
                onClick={() => setNotifOpen((v) => !v)}
                aria-label="Notifications"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-ember text-[9px] font-semibold text-background">
                  {notifications.length}
                </span>
              </button>
              {notifOpen && (
                <div className="glass-panel absolute right-0 mt-2 w-80 rounded-2xl p-3">
                  <div className="mb-2 flex items-center justify-between px-2">
                    <p className="text-sm font-semibold text-foreground">Notification Center</p>
                    <button onClick={() => setNotifOpen(false)}>
                      <X className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                  <ul className="space-y-1">
                    {notifications.map((n) => (
                      <li
                        key={n.title}
                        className="flex items-start gap-3 rounded-xl px-2 py-2 hover:bg-secondary/50"
                      >
                        <span className={cn("mt-1.5 h-2 w-2 shrink-0 rounded-full", toneDot[n.tone])} />
                        <div>
                          <p className="text-sm text-foreground">{n.title}</p>
                          <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                            {n.category}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-soft text-xs font-semibold text-primary-foreground">
              ST
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1400px] px-4 py-8 md:px-8 md:py-10">{children}</main>
      </div>
    </div>
  );
}
