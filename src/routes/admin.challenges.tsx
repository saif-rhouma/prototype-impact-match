import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { ADMIN_NAV } from "@/lib/nav";
import { SectionCard, StatusPill, KPI } from "@/components/site/Dash";
import { COMPANY_CHALLENGES, CHALLENGE_STATUSES } from "@/lib/mockFr";
import { Megaphone, Send, Trophy } from "lucide-react";

export const Route = createFileRoute("/admin/challenges")({ component: AdminChallenges });

function AdminChallenges() {
  return (
    <DashboardShell title="Défis" badge="Espace admin" items={ADMIN_NAV}>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI
          label="Défis totaux"
          value="86"
          tint="primary"
          icon={<Megaphone className="h-4 w-4" />}
        />
        <KPI
          label="Soumissions"
          value="1 240"
          tint="coral"
          delta="+18%"
          icon={<Send className="h-4 w-4" />}
        />
        <KPI
          label="Matchs"
          value="96"
          tint="teal"
          delta="+24"
          icon={<Trophy className="h-4 w-4" />}
        />
        <KPI label="Taux de réussite" value="92%" tint="orange" delta="+4%" />
      </div>

      <div
        className="grid gap-3 overflow-x-auto pb-2"
        style={{ gridTemplateColumns: `repeat(${CHALLENGE_STATUSES.length}, minmax(240px, 1fr))` }}
      >
        {CHALLENGE_STATUSES.map((s) => (
          <div key={s} className="rounded-3xl border border-border bg-muted/30 p-3">
            <div className="mb-3 flex items-center justify-between px-1">
              <StatusPill status={s} />
              <span className="text-xs text-muted-foreground">
                {COMPANY_CHALLENGES.filter((c) => c.status === s).length}
              </span>
            </div>
            <div className="space-y-2">
              {COMPANY_CHALLENGES.filter((c) => c.status === s).map((c) => (
                <div
                  key={c.id}
                  className="rounded-2xl border border-border bg-card p-3 shadow-card"
                >
                  <div className="font-semibold leading-snug">{c.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {c.category} • {c.deadline}
                  </div>
                  <div className="mt-2 text-xs">
                    <span className="font-bold text-coral">{c.submissions}</span> sol. ·{" "}
                    <span className="font-bold">{c.teams}</span> équipes
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
