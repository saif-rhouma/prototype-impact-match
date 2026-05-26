import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { COMPANY_NAV } from "@/lib/nav";
import { SectionCard, StatusPill, KPI } from "@/components/site/Dash";
import { COMPANY_CHALLENGES, CHALLENGE_STATUSES } from "@/lib/mockFr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Plus, Search, Megaphone, Send, Trophy, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/company/challenges")({ component: CompanyChallenges });

function CompanyChallenges() {
  const [q, setQ] = useState("");
  const items = COMPANY_CHALLENGES.filter((c) => c.title.toLowerCase().includes(q.toLowerCase()));

  return (
    <DashboardShell title="Mes défis" badge="Espace entreprise" items={COMPANY_NAV}>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI
          label="Défis publiés"
          value="6"
          tint="primary"
          icon={<Megaphone className="h-4 w-4" />}
        />
        <KPI
          label="Soumissions totales"
          value="172"
          tint="coral"
          delta="+18%"
          icon={<Send className="h-4 w-4" />}
        />
        <KPI label="Matchs trouvés" value="3" tint="teal" icon={<Trophy className="h-4 w-4" />} />
        <KPI
          label="Prochaine deadline"
          value="30 juin"
          tint="orange"
          icon={<Calendar className="h-4 w-4" />}
        />
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher un défi…"
            className="rounded-full pl-9"
          />
        </div>
        <Link to="/company/onboarding">
          <Button className="rounded-full gradient-warm font-bold text-foreground shadow-glow">
            <Plus className="mr-1 h-4 w-4" /> Créer un défi
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="kanban">
        <TabsList className="rounded-full">
          <TabsTrigger value="kanban" className="rounded-full">
            Kanban
          </TabsTrigger>
          <TabsTrigger value="table" className="rounded-full">
            Tableau
          </TabsTrigger>
          <TabsTrigger value="calendar" className="rounded-full">
            Calendrier
          </TabsTrigger>
        </TabsList>

        <TabsContent value="kanban" className="mt-5">
          <div
            className="grid gap-3 overflow-x-auto pb-2"
            style={{
              gridTemplateColumns: `repeat(${CHALLENGE_STATUSES.length}, minmax(260px, 1fr))`,
            }}
          >
            {CHALLENGE_STATUSES.map((status) => {
              const col = items.filter((c) => c.status === status);
              return (
                <div key={status} className="rounded-3xl border border-border bg-muted/30 p-3">
                  <div className="mb-3 flex items-center justify-between px-1">
                    <StatusPill status={status} />
                    <span className="text-xs text-muted-foreground">{col.length}</span>
                  </div>
                  <div className="space-y-2">
                    {col.map((c, i) => (
                      <motion.div
                        key={c.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="cursor-grab rounded-2xl border border-border bg-card p-3 shadow-card hover:shadow-soft transition-all"
                      >
                        <Link to="/company/challenges/$id" params={{ id: c.id }}>
                          <div className="font-semibold leading-snug">{c.title}</div>
                          <div className="mt-1 text-xs text-muted-foreground">{c.category}</div>
                          <div className="mt-3 flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">📅 {c.deadline}</span>
                            <span className="font-bold text-coral">{c.submissions} sol.</span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                    {col.length === 0 && (
                      <div className="rounded-2xl border border-dashed border-border p-4 text-center text-xs text-muted-foreground">
                        Aucun défi
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="table" className="mt-5">
          <SectionCard title="Tous les défis">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <th className="py-3">Défi</th>
                    <th>Catégorie</th>
                    <th>Statut</th>
                    <th className="text-right">Soumissions</th>
                    <th className="text-right">Équipes</th>
                    <th>Échéance</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((c) => (
                    <tr
                      key={c.id}
                      className="border-b border-border last:border-0 hover:bg-accent/40"
                    >
                      <td className="py-3 font-semibold">{c.title}</td>
                      <td className="text-muted-foreground">{c.category}</td>
                      <td>
                        <StatusPill status={c.status} />
                      </td>
                      <td className="text-right font-bold">{c.submissions}</td>
                      <td className="text-right">{c.teams}</td>
                      <td className="text-muted-foreground">{c.deadline}</td>
                      <td className="text-right">
                        <Link to="/company/challenges/$id" params={{ id: c.id }}>
                          <Button variant="ghost" size="sm" className="rounded-full">
                            Ouvrir
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        </TabsContent>

        <TabsContent value="calendar" className="mt-5">
          <SectionCard title="Calendrier des échéances">
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              {items.map((c) => (
                <div key={c.id} className="rounded-2xl border border-border bg-card p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-coral">
                    {c.deadline}
                  </div>
                  <div className="mt-1 font-semibold">{c.title}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <StatusPill status={c.status} />
                    <span className="text-xs text-muted-foreground">{c.submissions} sol.</span>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  );
}
