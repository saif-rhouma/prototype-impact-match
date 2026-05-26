import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { ADMIN_NAV } from "@/lib/nav";
import { SectionCard, KPI } from "@/components/site/Dash";
import { SUBMISSIONS } from "@/lib/mockFr";
import { Sparkles, Trophy, Users } from "lucide-react";

export const Route = createFileRoute("/admin/matches")({ component: AdminMatches });

function AdminMatches() {
  return (
    <DashboardShell title="Matchs" badge="Espace admin" items={ADMIN_NAV}>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI
          label="Matchs ce mois"
          value="24"
          tint="primary"
          icon={<Sparkles className="h-4 w-4" />}
        />
        <KPI label="Recrutements" value="9" tint="teal" icon={<Trophy className="h-4 w-4" />} />
        <KPI
          label="Équipes matchées"
          value="17"
          tint="coral"
          icon={<Users className="h-4 w-4" />}
        />
        <KPI label="Score moyen" value="89" tint="orange" />
      </div>

      <SectionCard title="Derniers matchs réalisés">
        <ul className="space-y-2">
          {SUBMISSIONS.map((s) => (
            <li
              key={s.id}
              className="flex items-center justify-between rounded-2xl border border-border p-3 hover:bg-accent/40"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl gradient-warm shadow-glow text-2xl">
                  {s.emoji}
                </span>
                <div>
                  <div className="font-display font-extrabold">
                    {s.team} × {s.challenge}
                  </div>
                  <div className="text-xs text-muted-foreground">{s.date}</div>
                </div>
              </div>
              <div className="rounded-full gradient-warm px-3 py-1 text-xs font-extrabold">
                {s.score}% match
              </div>
            </li>
          ))}
        </ul>
      </SectionCard>
    </DashboardShell>
  );
}
