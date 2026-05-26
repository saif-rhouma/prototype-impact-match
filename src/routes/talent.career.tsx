import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { TALENT_NAV } from "@/lib/nav";
import { SectionCard, StatusPill, KPI } from "@/components/site/Dash";
import { APPLICATIONS, INTERVIEWS } from "@/lib/mockFr";
import { POSITIONS } from "@/lib/mock";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Briefcase, Calendar, Bookmark, Sparkles, MapPin } from "lucide-react";

export const Route = createFileRoute("/talent/career")({ component: TalentCareer });

const TIMELINE: { stage: import("@/lib/mockFr").Application["status"]; color: string }[] = [
  { stage: "Envoyée", color: "primary" },
  { stage: "Vue", color: "primary" },
  { stage: "Entretien", color: "orange" },
  { stage: "Finaliste", color: "primary" },
  { stage: "Acceptée", color: "teal" },
];

function TalentCareer() {
  return (
    <DashboardShell title="Carrière" badge="Espace talent" items={TALENT_NAV}>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI
          label="Candidatures"
          value={String(APPLICATIONS.length)}
          tint="primary"
          icon={<Briefcase className="h-4 w-4" />}
        />
        <KPI
          label="Entretiens"
          value={String(INTERVIEWS.length)}
          tint="orange"
          icon={<Calendar className="h-4 w-4" />}
        />
        <KPI
          label="Postes sauvegardés"
          value="7"
          tint="coral"
          icon={<Bookmark className="h-4 w-4" />}
        />
        <KPI label="Recommandés" value="12" tint="teal" icon={<Sparkles className="h-4 w-4" />} />
      </div>

      <Tabs defaultValue="applications">
        <TabsList className="rounded-full">
          <TabsTrigger value="applications" className="rounded-full">
            Mes candidatures
          </TabsTrigger>
          <TabsTrigger value="interviews" className="rounded-full">
            Entretiens
          </TabsTrigger>
          <TabsTrigger value="saved" className="rounded-full">
            Sauvegardés
          </TabsTrigger>
          <TabsTrigger value="recommended" className="rounded-full">
            Recommandés
          </TabsTrigger>
        </TabsList>

        <TabsContent value="applications" className="mt-5 space-y-3">
          {APPLICATIONS.map((a) => {
            const idx = TIMELINE.findIndex((s) => s.stage === a.status);
            return (
              <div key={a.id} className="rounded-3xl border border-border bg-card p-5 shadow-card">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-2xl">
                      {a.emoji}
                    </span>
                    <div>
                      <div className="font-display text-base font-extrabold">{a.position}</div>
                      <div className="text-xs text-muted-foreground">
                        {a.company} • {a.date}
                      </div>
                    </div>
                  </div>
                  <StatusPill status={a.status} />
                </div>
                <div className="mt-4 flex items-center gap-1">
                  {TIMELINE.map((s, i) => {
                    const active = i <= idx && a.status !== "Refusée";
                    return (
                      <div key={s.stage} className="flex flex-1 items-center gap-1">
                        <div
                          className={`grid h-7 w-7 place-items-center rounded-full text-[10px] font-extrabold ${active ? "gradient-warm shadow-glow" : "bg-muted text-muted-foreground"}`}
                        >
                          {i + 1}
                        </div>
                        {i < TIMELINE.length - 1 && (
                          <div
                            className={`h-1 flex-1 rounded-full ${active ? "bg-primary" : "bg-border"}`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-1 grid grid-cols-5 text-[10px] text-muted-foreground">
                  {TIMELINE.map((s) => (
                    <div key={s.stage} className="text-center">
                      {s.stage}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </TabsContent>

        <TabsContent value="interviews" className="mt-5 grid gap-3 md:grid-cols-2">
          {INTERVIEWS.map((i) => (
            <SectionCard key={i.id} title={i.position}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-2xl">
                    {i.avatar}
                  </span>
                  <div>
                    <div className="font-semibold">{i.with}</div>
                    <div className="text-xs text-muted-foreground">
                      {i.date} • {i.time} • {i.mode}
                    </div>
                  </div>
                </div>
                <Button size="sm" className="rounded-full bg-foreground text-background">
                  Préparer
                </Button>
              </div>
            </SectionCard>
          ))}
        </TabsContent>

        <TabsContent value="saved" className="mt-5 grid gap-3 md:grid-cols-2">
          {POSITIONS.slice(0, 4).map((p) => (
            <PositionCard key={p.id} p={p} />
          ))}
        </TabsContent>

        <TabsContent value="recommended" className="mt-5 grid gap-3 md:grid-cols-2">
          {POSITIONS.map((p) => (
            <PositionCard key={p.id} p={p} />
          ))}
        </TabsContent>
      </Tabs>
    </DashboardShell>
  );
}

function PositionCard({ p }: { p: (typeof POSITIONS)[number] }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-5 shadow-card hover:shadow-soft transition-all">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-2xl">
            {p.emoji}
          </span>
          <div>
            <div className="font-display font-extrabold">{p.title}</div>
            <div className="text-xs text-muted-foreground">{p.company}</div>
          </div>
        </div>
        <div className="rounded-full gradient-warm px-2 py-0.5 text-[10px] font-extrabold">
          {p.match}%
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1">
        <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold">{p.type}</span>
        <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold flex items-center gap-1">
          <MapPin className="h-2.5 w-2.5" /> {p.city}
        </span>
        {p.skills.slice(0, 3).map((s) => (
          <span key={s} className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold">
            {s}
          </span>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <Button size="sm" variant="outline" className="flex-1 rounded-full border-2">
          <Bookmark className="mr-1 h-3 w-3" /> Sauver
        </Button>
        <Button size="sm" className="flex-1 rounded-full bg-foreground text-background">
          Postuler
        </Button>
      </div>
    </div>
  );
}
