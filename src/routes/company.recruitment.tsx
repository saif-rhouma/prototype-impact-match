import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { COMPANY_NAV } from "@/lib/nav";
import { SectionCard, StatusPill, KPI } from "@/components/site/Dash";
import { CANDIDATES, COMPANY_POSITIONS, PIPELINE_STAGES, type PipelineStage } from "@/lib/mockFr";
import { Button } from "@/components/ui/button";
import { Plus, Briefcase, Users, Trophy, Clock, GripVertical } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/company/recruitment")({ component: CompanyRecruitment });

function CompanyRecruitment() {
  const [board, setBoard] = useState(
    () =>
      Object.fromEntries(
        PIPELINE_STAGES.map((s) => [s, CANDIDATES.filter((c) => c.stage === s)]),
      ) as Record<PipelineStage, typeof CANDIDATES>,
  );
  const [drag, setDrag] = useState<string | null>(null);

  const move = (id: string, to: PipelineStage) => {
    setBoard((b) => {
      const next = { ...b } as typeof b;
      let item: any = null;
      for (const s of PIPELINE_STAGES) {
        const f = next[s].find((c) => c.id === id);
        if (f) {
          item = f;
          next[s] = next[s].filter((c) => c.id !== id);
        }
      }
      if (item) next[to] = [{ ...item, stage: to }, ...next[to]];
      return next;
    });
    toast.success(`Candidat déplacé vers ${to}`);
  };

  return (
    <DashboardShell title="Recrutement" badge="Espace entreprise" items={COMPANY_NAV}>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI
          label="Postes ouverts"
          value="4"
          tint="primary"
          icon={<Briefcase className="h-4 w-4" />}
        />
        <KPI
          label="Candidats en pipeline"
          value="46"
          tint="coral"
          delta="+8"
          icon={<Users className="h-4 w-4" />}
        />
        <KPI
          label="Recrutements"
          value="3"
          tint="teal"
          delta="+1"
          icon={<Trophy className="h-4 w-4" />}
        />
        <KPI
          label="Délai moyen"
          value="14j"
          tint="orange"
          delta="-3j"
          icon={<Clock className="h-4 w-4" />}
        />
      </div>

      <Tabs defaultValue="pipeline">
        <TabsList className="rounded-full">
          <TabsTrigger value="pipeline" className="rounded-full">
            Pipeline
          </TabsTrigger>
          <TabsTrigger value="positions" className="rounded-full">
            Postes
          </TabsTrigger>
          <TabsTrigger value="interviews" className="rounded-full">
            Entretiens
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pipeline" className="mt-5">
          <div
            className="grid gap-3 overflow-x-auto pb-2"
            style={{ gridTemplateColumns: `repeat(${PIPELINE_STAGES.length}, minmax(260px, 1fr))` }}
          >
            {PIPELINE_STAGES.map((stage) => (
              <div
                key={stage}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => drag && move(drag, stage)}
                className="rounded-3xl border border-border bg-muted/30 p-3"
              >
                <div className="mb-3 flex items-center justify-between px-1">
                  <StatusPill status={stage} />
                  <span className="text-xs text-muted-foreground">{board[stage]?.length ?? 0}</span>
                </div>
                <div className="space-y-2">
                  {board[stage]?.map((c, i) => (
                    <motion.div
                      key={c.id}
                      draggable
                      onDragStart={() => setDrag(c.id)}
                      onDragEnd={() => setDrag(null)}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="group cursor-grab rounded-2xl border border-border bg-card p-3 shadow-card hover:shadow-soft transition-all active:cursor-grabbing"
                    >
                      <div className="flex items-start gap-2">
                        <GripVertical className="mt-1 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100" />
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-xl">
                          {c.avatar}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="truncate font-semibold">{c.name}</div>
                          <div className="truncate text-xs text-muted-foreground">{c.role}</div>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="rounded-full gradient-warm px-2 py-0.5 text-[10px] font-extrabold">
                          {c.score}%
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 rounded-full text-[10px]"
                            >
                              Notes
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Notes — {c.name}</DialogTitle>
                            </DialogHeader>
                            <Textarea
                              rows={5}
                              placeholder="Ajoutez vos impressions sur ce candidat…"
                              className="rounded-2xl"
                            />
                            <Button
                              className="rounded-full bg-foreground text-background"
                              onClick={() => toast.success("Note enregistrée")}
                            >
                              Enregistrer
                            </Button>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="positions" className="mt-5">
          <SectionCard
            title="Postes ouverts"
            action={
              <Button className="rounded-full gradient-warm font-bold text-foreground">
                <Plus className="mr-1 h-4 w-4" /> Nouveau poste
              </Button>
            }
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <th className="py-3">Titre</th>
                    <th>Type</th>
                    <th>Ville</th>
                    <th className="text-right">Candidats</th>
                    <th>Statut</th>
                    <th>Ouvert le</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPANY_POSITIONS.map((p) => (
                    <tr
                      key={p.id}
                      className="border-b border-border last:border-0 hover:bg-accent/40"
                    >
                      <td className="py-3 font-semibold">{p.title}</td>
                      <td>
                        <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold">
                          {p.type}
                        </span>
                      </td>
                      <td className="text-muted-foreground">
                        {p.city}
                        {p.remote && " · Remote"}
                      </td>
                      <td className="text-right font-bold">{p.candidates}</td>
                      <td>
                        <StatusPill status={p.status} />
                      </td>
                      <td className="text-muted-foreground">{p.openedAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        </TabsContent>

        <TabsContent value="interviews" className="mt-5">
          <SectionCard title="Entretiens planifiés">
            <div className="grid gap-3 md:grid-cols-2">
              {CANDIDATES.filter((c) => c.stage === "Entretien").map((c) => (
                <div
                  key={c.id}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-2xl">
                    {c.avatar}
                  </span>
                  <div className="flex-1">
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {c.role} • Visio • Demain 14:00
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="rounded-full border-2">
                    Rejoindre
                  </Button>
                </div>
              ))}
            </div>
          </SectionCard>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  );
}
