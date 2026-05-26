import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { TALENT_NAV } from "@/lib/nav";
import { SectionCard, StatusPill, KPI } from "@/components/site/Dash";
import { CHALLENGES } from "@/lib/mock";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Compass, Trophy, Sparkles, Clock } from "lucide-react";

export const Route = createFileRoute("/talent/challenges")({ component: TalentChallenges });

function TalentChallenges() {
  const inProgress = CHALLENGES.slice(0, 4);
  const recommended = CHALLENGES.slice(4);
  const completed = CHALLENGES.slice(0, 2);

  return (
    <DashboardShell title="Mes défis" badge="Espace talent" items={TALENT_NAV}>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI label="En cours" value="4" tint="primary" icon={<Compass className="h-4 w-4" />} />
        <KPI label="Terminés" value="8" tint="teal" icon={<Trophy className="h-4 w-4" />} />
        <KPI label="Score moyen" value="86" tint="coral" icon={<Sparkles className="h-4 w-4" />} />
        <KPI
          label="Prochaine deadline"
          value="30 juin"
          tint="orange"
          icon={<Clock className="h-4 w-4" />}
        />
      </div>

      <Tabs defaultValue="active">
        <TabsList className="rounded-full">
          <TabsTrigger value="active" className="rounded-full">
            En cours
          </TabsTrigger>
          <TabsTrigger value="recommended" className="rounded-full">
            Recommandés
          </TabsTrigger>
          <TabsTrigger value="done" className="rounded-full">
            Terminés
          </TabsTrigger>
        </TabsList>

        {[
          { v: "active", list: inProgress, status: "En cours" },
          { v: "recommended", list: recommended, status: "Nouveau" },
          { v: "done", list: completed, status: "Acceptée" },
        ].map(({ v, list, status }) => (
          <TabsContent key={v} value={v} className="mt-5">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {list.map((c) => (
                <Link
                  key={c.id}
                  to="/challenges/$id"
                  params={{ id: c.id }}
                  className="rounded-3xl border border-border bg-card p-5 shadow-card hover:shadow-soft transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-2xl">
                      {c.companyLogo}
                    </span>
                    <StatusPill status={status} />
                  </div>
                  <div className="mt-3 font-display text-lg font-extrabold leading-snug">
                    {c.title}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {c.company} • {c.category}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1">
                    {c.skills.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">📅 {c.deadline}</span>
                    <Button size="sm" className="rounded-full bg-foreground text-background">
                      Continuer
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <SectionCard title="Opportunités à fort impact" className="mt-6">
        <ul className="space-y-2">
          {CHALLENGES.slice(2, 6).map((c) => (
            <li
              key={c.id}
              className="flex items-center justify-between rounded-2xl border border-border p-3 hover:bg-accent/40"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent text-xl">
                  {c.companyLogo}
                </span>
                <div>
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {c.company} • Récompense {c.reward}
                  </div>
                </div>
              </div>
              <Link to="/challenges/$id" params={{ id: c.id }}>
                <Button size="sm" variant="outline" className="rounded-full border-2">
                  Rejoindre
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </SectionCard>
    </DashboardShell>
  );
}
