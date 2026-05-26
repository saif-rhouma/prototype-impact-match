import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { ADMIN_NAV } from "@/lib/nav";
import { SectionCard, StatusPill, KPI } from "@/components/site/Dash";
import { ADMIN_TALENTS } from "@/lib/mockFr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Users, AlertTriangle, BadgeCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/talents")({ component: AdminTalents });

function AdminTalents() {
  const [q, setQ] = useState("");
  const items = ADMIN_TALENTS.filter((t) =>
    (t.name + t.city).toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <DashboardShell title="Talents" badge="Espace admin" items={ADMIN_NAV}>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI label="Total" value="18 500" tint="primary" icon={<Users className="h-4 w-4" />} />
        <KPI
          label="Vérifiés"
          value="16 240"
          tint="teal"
          icon={<BadgeCheck className="h-4 w-4" />}
        />
        <KPI label="En attente" value="1 820" tint="orange" />
        <KPI
          label="Signalés"
          value={String(ADMIN_TALENTS.filter((t) => t.flagged).length)}
          tint="coral"
          icon={<AlertTriangle className="h-4 w-4" />}
        />
      </div>

      <div className="mb-4 relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher un talent…"
          className="rounded-full pl-9"
        />
      </div>

      <SectionCard title="Annuaire talents">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="py-3">Nom</th>
                <th>Ville</th>
                <th>Statut</th>
                <th className="text-right">Participations</th>
                <th className="text-right">Badges</th>
                <th>Dernière activité</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((t) => (
                <tr
                  key={t.id}
                  className={`border-b border-border last:border-0 hover:bg-accent/40 ${t.flagged ? "bg-coral/5" : ""}`}
                >
                  <td className="py-3">
                    <span className="mr-2 text-lg">{t.avatar}</span>
                    <span className="font-semibold">{t.name}</span>
                    {t.flagged && <AlertTriangle className="ml-2 inline h-3 w-3 text-coral" />}
                  </td>
                  <td className="text-muted-foreground">{t.city}</td>
                  <td>
                    <StatusPill status={t.status} />
                  </td>
                  <td className="text-right font-bold">{t.participations}</td>
                  <td className="text-right">{t.badges}</td>
                  <td className="text-muted-foreground">{t.lastActive}</td>
                  <td className="text-right">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="rounded-full"
                      onClick={() => toast.success(`Profil ${t.name} ouvert`)}
                    >
                      Voir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </DashboardShell>
  );
}
