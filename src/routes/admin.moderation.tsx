import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { ADMIN_NAV } from "@/lib/nav";
import { SectionCard, StatusPill, KPI } from "@/components/site/Dash";
import { MODERATION } from "@/lib/mockFr";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { AlertTriangle, Shield, Check, X } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/moderation")({ component: AdminModeration });

function AdminModeration() {
  return (
    <DashboardShell title="Modération" badge="Espace admin" items={ADMIN_NAV}>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI
          label="Ouverts"
          value={String(MODERATION.filter((m) => m.status === "Ouvert").length)}
          tint="coral"
          icon={<AlertTriangle className="h-4 w-4" />}
        />
        <KPI
          label="En cours"
          value={String(MODERATION.filter((m) => m.status === "En cours").length)}
          tint="orange"
        />
        <KPI label="Résolus (30j)" value="42" tint="teal" icon={<Check className="h-4 w-4" />} />
        <KPI
          label="Niveau élevé"
          value={String(MODERATION.filter((m) => m.level === "Élevé").length)}
          tint="coral"
          icon={<Shield className="h-4 w-4" />}
        />
      </div>

      <SectionCard title="File de modération">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="py-3">Type</th>
                <th>Cible</th>
                <th>Raison</th>
                <th>Niveau</th>
                <th>Statut</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {MODERATION.map((m) => (
                <tr key={m.id} className="border-b border-border last:border-0 hover:bg-accent/40">
                  <td className="py-3 font-semibold">{m.type}</td>
                  <td>{m.target}</td>
                  <td className="text-muted-foreground max-w-[280px] truncate">{m.reason}</td>
                  <td>
                    <StatusPill status={m.level} />
                  </td>
                  <td>
                    <StatusPill status={m.status} />
                  </td>
                  <td className="text-muted-foreground">{m.date}</td>
                  <td className="text-right">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button size="sm" variant="outline" className="rounded-full border-2">
                          Inspecter
                        </Button>
                      </SheetTrigger>
                      <SheetContent className="w-[420px] sm:max-w-md">
                        <SheetHeader>
                          <SheetTitle>
                            {m.type} — {m.target}
                          </SheetTitle>
                        </SheetHeader>
                        <div className="mt-4 space-y-3 text-sm">
                          <div className="rounded-2xl bg-muted/40 p-3">
                            <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                              Raison
                            </div>
                            <div>{m.reason}</div>
                          </div>
                          <div className="flex gap-2">
                            <StatusPill status={m.level} />
                            <StatusPill status={m.status} />
                          </div>
                          <div>
                            <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                              Notes admin
                            </div>
                            <Textarea
                              rows={5}
                              placeholder="Décision, contexte, actions menées…"
                              className="rounded-2xl"
                            />
                          </div>
                          <div className="flex gap-2">
                            <Button
                              className="flex-1 rounded-full bg-teal text-teal-foreground hover:bg-teal/90"
                              onClick={() => toast.success("Cas résolu")}
                            >
                              <Check className="mr-1 h-4 w-4" />
                              Résoudre
                            </Button>
                            <Button
                              className="flex-1 rounded-full bg-coral text-coral-foreground hover:bg-coral/90"
                              onClick={() => toast.success("Sanction appliquée")}
                            >
                              <X className="mr-1 h-4 w-4" />
                              Sanctionner
                            </Button>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      <SectionCard title="Historique des actions" className="mt-4">
        <ul className="space-y-2">
          {[
            { who: "Admin Léa", act: "a résolu", t: "Signalement Bloom Bank", time: "il y a 1h" },
            { who: "Admin Karim", act: "a suspendu", t: "Profil anonyme_42", time: "il y a 4h" },
            { who: "Admin Léa", act: "a validé", t: "Entreprise SolaraCo", time: "hier" },
          ].map((a, i) => (
            <li
              key={i}
              className="flex items-center gap-3 rounded-2xl border border-border p-3 text-sm"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-accent">🛡️</span>
              <div className="flex-1">
                <span className="font-semibold">{a.who}</span>{" "}
                <span className="text-muted-foreground">{a.act}</span>{" "}
                <span className="font-semibold">{a.t}</span>
              </div>
              <span className="text-xs text-muted-foreground">{a.time}</span>
            </li>
          ))}
        </ul>
      </SectionCard>
    </DashboardShell>
  );
}
