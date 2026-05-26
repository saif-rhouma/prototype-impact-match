import { Link, useRouterState } from "@tanstack/react-router";
import { ReactNode } from "react";
import { Sparkles, type LucideIcon } from "lucide-react";

export type SideItem = { to: string; label: string; icon: LucideIcon };

export function DashboardShell({
  title,
  items,
  badge,
  children,
}: {
  title: string;
  badge?: string;
  items: SideItem[];
  children: ReactNode;
}) {
  const { location } = useRouterState();
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-[260px_1fr]">
        <aside className="hidden md:block border-r border-border bg-sidebar p-4">
          <Link to="/" className="flex items-center gap-2 px-2 py-3">
            <span className="grid h-9 w-9 place-items-center rounded-2xl gradient-warm shadow-glow">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <div className="font-display text-base font-extrabold leading-none">Impact Match</div>
              {badge && (
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                  {badge}
                </div>
              )}
            </div>
          </Link>
          <nav className="mt-4 flex flex-col gap-1">
            {items.map((it) => {
              const active = location.pathname === it.to;
              const Icon = it.icon;
              return (
                <Link
                  key={it.to}
                  to={it.to}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition-all ${
                    active
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "hover:bg-accent text-muted-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {it.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <div className="min-w-0">
          <div className="sticky top-0 z-30 glass border-b border-border px-4 py-3 md:px-6">
            <h1 className="font-display text-xl font-extrabold">{title}</h1>
          </div>
          <div className="p-4 md:p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
