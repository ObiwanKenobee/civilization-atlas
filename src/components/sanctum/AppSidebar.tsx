import { Link, useRouterState } from "@tanstack/react-router";
import {
  Compass,
  Vault,
  ScrollText,
  Coins,
  Sparkles,
  TreePine,
  Leaf,
  HeartHandshake,
  Building2,
  FolderKanban,
  Telescope,
  Store,
  Landmark,
  Users,
  FileText,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const groups: NavGroup[] = [
  {
    label: "Observatory",
    items: [
      { to: "/", label: "Home", icon: Compass },
      { to: "/atlas", label: "Living Atlas", icon: Telescope },
      { to: "/oracle", label: "AI Oracle", icon: Sparkles },
      { to: "/forecasts", label: "Forecasts", icon: Telescope },
    ],
  },
  {
    label: "Treasury",
    items: [
      { to: "/treasury", label: "Treasury", icon: Vault },
      { to: "/budget", label: "Budget", icon: ScrollText },
      { to: "/taxation", label: "Taxation", icon: Coins },
      { to: "/marketplace", label: "Marketplace", icon: Store },
    ],
  },
  {
    label: "Stewardship",
    items: [
      { to: "/impact", label: "Impact", icon: TreePine },
      { to: "/natural-capital", label: "Natural Capital", icon: Leaf },
      { to: "/flourishing", label: "Human Flourishing", icon: HeartHandshake },
      { to: "/infrastructure", label: "Infrastructure", icon: Building2 },
      { to: "/projects", label: "Projects", icon: FolderKanban },
    ],
  },
  {
    label: "Civic",
    items: [
      { to: "/governance", label: "Governance", icon: Landmark },
      { to: "/citizens", label: "Citizens", icon: Users },
      { to: "/reports", label: "Reports", icon: FileText },
      { to: "/settings", label: "Settings", icon: Settings },
    ],
  },
];

export function AppSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex h-full flex-col gap-6 overflow-y-auto px-4 py-6">
      <Link
        to="/"
        onClick={onNavigate}
        className="flex items-center gap-3 px-2"
      >
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-gold to-gold-soft text-primary-foreground shadow-[0_0_24px_-6px_var(--gold)]">
          <Landmark className="h-5 w-5" />
        </span>
        <span>
          <span className="block font-display text-lg font-semibold leading-none text-foreground">
            Atlas Sanctum
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold/70">
            Public Finance
          </span>
        </span>
      </Link>

      <nav className="flex flex-col gap-6">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 px-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
              {group.label}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active =
                  item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
                const Icon = item.icon;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={onNavigate}
                      className={cn(
                        "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-all",
                        active
                          ? "bg-sidebar-accent text-foreground shadow-[inset_2px_0_0_var(--gold)]"
                          : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground",
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-4 w-4 transition-colors",
                          active ? "text-gold" : "text-muted-foreground group-hover:text-gold",
                        )}
                      />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="mt-auto rounded-xl border border-border/60 bg-secondary/40 p-4">
        <p className="text-xs text-muted-foreground">
          "Steward rather than merely administer."
        </p>
      </div>
    </div>
  );
}
