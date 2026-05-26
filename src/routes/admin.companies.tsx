import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { ADMIN_NAV } from "@/lib/nav";
import { SectionCard, StatusPill, KPI } from "@/components/site/Dash";
import { ADMIN_COMPANIES } from "@/lib/mockFr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, Search, CheckCircle2, XCircle, Ban } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/companies")({ component: AdminCompanies });

function AdminCompanies() {
  const [q, setQ] = useState("");
  const items = ADMIN_COMPANIES.filter((c) =>
    (c.name + c.sector).toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <DashboardShell title="Entreprises" badge="Espace admin" items={ADMIN_NAV}>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI
          label="Total"
          value={String(ADMIN_COMPANIES.length)}
          tint="primary"
          icon={<Building2 className="h-4 w-4" />}
        />
        <KPI
          label="Vérifiées"
          value={String(ADMIN_COMPANIES.filter((c) => c.status === "Vérifiée").length)}
          tint="teal"
        />
        <KPI
          label="En attente"
          value={String(ADMIN_COMPANIES.filter((c) => c.status === "En attente").length)}
          tint="orange"
        />
        <KPI
          label="Suspendues"
          value={String(ADMIN_COMPANIES.filter((c) => c.status === "Suspendue").length)}
          tint="coral"
        />
      </div>

      <div className="mb-4 relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher une entreprise…"
          className="rounded-full pl-9"
        />
      </div>

      <SectionCard title="Toutes les entreprises">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="py-3">Entreprise</th>
                <th>Secteur</th>
                <th>Statut</th>
                <th className="text-right">Défis</th>
                <th className="text-right">Recrutements</th>
                <th>Inscription</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((c) => (
                <tr key={c.id} className="border-b border-border last:border-0 hover:bg-accent/40">
                  <td className="py-3">
                    <span className="mr-2 text-lg">{c.logo}</span>
                    <span className="font-semibold">{c.name}</span>
                  </td>
                  <td className="text-muted-foreground">{c.sector}</td>
                  <td>
                    <StatusPill status={c.status} />
                  </td>
                  <td className="text-right font-bold">{c.challenges}</td>
                  <td className="text-right">{c.hires}</td>
                  <td className="text-muted-foreground">{c.joined}</td>
                  <td className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 rounded-full text-teal"
                        onClick={() => toast.success(`${c.name} validée`)}
                      >
                        <CheckCircle2 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 rounded-full text-orange"
                        onClick={() => toast.success(`${c.name} suspendue`)}
                      >
                        <Ban className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 rounded-full text-coral"
                        onClick={() => toast.success(`${c.name} refusée`)}
                      >
                        <XCircle className="h-4 w-4" />
                      </Button>
                    </div>
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
