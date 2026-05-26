import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { COMPANY_NAV } from "@/lib/nav";
import { SectionCard, StatusPill, KPI } from "@/components/site/Dash";
import { COMPANY_CHALLENGES, SUBMISSIONS, CANDIDATES } from "@/lib/mockFr";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Sparkles, Trophy, Send, Users, ChevronLeft, Star, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const Route = createFileRoute("/company/challenges/$id")({
  component: CompanyChallengeDetail,
});

function CompanyChallengeDetail() {
  const { id } = useParams({ from: "/company/challenges/$id" });
  const c = COMPANY_CHALLENGES.find((x) => x.id === id) ?? COMPANY_CHALLENGES[0];

  return (
    <DashboardShell title={c.title} badge="Défi entreprise" items={COMPANY_NAV}>
      <div className="mb-4">
        <Link to="/company/challenges">
          <Button variant="ghost" size="sm" className="rounded-full">
            <ChevronLeft className="mr-1 h-4 w-4" /> Retour aux défis
          </Button>
        </Link>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full gradient-warm opacity-30 blur-3xl" />
        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <StatusPill status={c.status} />
              <span className="text-xs text-muted-foreground">
                {c.category} • Échéance {c.deadline}
              </span>
            </div>
            <h2 className="mt-2 font-display text-2xl font-extrabold">{c.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Pilotez les soumissions, comparez les équipes et sélectionnez votre match idéal.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-full border-2">
              Modifier
            </Button>
            <Button className="rounded-full gradient-warm font-bold text-foreground shadow-glow">
              <Trophy className="mr-1 h-4 w-4" /> Annoncer le match
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI
          label="Soumissions"
          value={c.submissions}
          tint="coral"
          icon={<Send className="h-4 w-4" />}
        />
        <KPI
          label="Équipes participantes"
          value={c.teams}
          tint="primary"
          icon={<Users className="h-4 w-4" />}
        />
        <KPI label="Score moyen" value="84" tint="teal" icon={<Star className="h-4 w-4" />} />
        <KPI
          label="Recommandations IA"
          value="3"
          tint="orange"
          icon={<Sparkles className="h-4 w-4" />}
        />
      </div>

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList className="rounded-full">
          <TabsTrigger value="overview" className="rounded-full">
            Aperçu
          </TabsTrigger>
          <TabsTrigger value="participants" className="rounded-full">
            Participants
          </TabsTrigger>
          <TabsTrigger value="solutions" className="rounded-full">
            Solutions
          </TabsTrigger>
          <TabsTrigger value="ranking" className="rounded-full">
            Classement
          </TabsTrigger>
          <TabsTrigger value="ai" className="rounded-full">
            Recommandations IA
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-5 grid gap-4 lg:grid-cols-3">
          <SectionCard title="Brief du défi" className="lg:col-span-2">
            <p className="text-sm text-muted-foreground">
              Aidez-nous à imaginer une nouvelle génération d'emballages circulaires et zéro-déchet,
              à déployer sur toute la chaîne logistique européenne d'ici fin 2026.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Item k="Récompense" v="5 000 € + stage" />
              <Item k="Format" v="Équipes 3-5" />
              <Item k="Livrables" v="Concept, prototype, deck" />
              <Item k="Critères" v="Impact, faisabilité, créativité" />
            </div>
          </SectionCard>
          <SectionCard title="Panel d'évaluation">
            <ul className="space-y-3 text-sm">
              {[
                "Impact environnemental",
                "Faisabilité technique",
                "Créativité",
                "Business model",
                "Présentation",
              ].map((k, i) => (
                <li key={k}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold">{k}</span>
                    <span className="text-muted-foreground">{[92, 84, 88, 76, 90][i]}/100</span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${[92, 84, 88, 76, 90][i]}%` }}
                      transition={{ duration: 0.8, delay: i * 0.08 }}
                      className="h-full"
                      style={{
                        background: `var(--${["teal", "primary", "coral", "orange", "teal"][i]})`,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </SectionCard>
        </TabsContent>

        <TabsContent value="participants" className="mt-5">
          <SectionCard title={`${CANDIDATES.length} participants`}>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {CANDIDATES.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl border border-border bg-card p-4 hover:shadow-soft transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-2xl">
                      {p.avatar}
                    </span>
                    <div>
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {p.role} • {p.city}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {p.skills.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </TabsContent>

        <TabsContent value="solutions" className="mt-5">
          <SectionCard title="Soumissions reçues">
            <ul className="space-y-2">
              {SUBMISSIONS.map((s) => (
                <li
                  key={s.id}
                  className="flex items-center justify-between rounded-2xl border border-border p-3 hover:bg-accent/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent text-xl">
                      {s.emoji}
                    </span>
                    <div>
                      <div className="font-semibold">{s.team}</div>
                      <div className="text-xs text-muted-foreground">Soumis le {s.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full gradient-warm px-3 py-1 text-xs font-extrabold">
                      {s.score}
                    </div>
                    <StatusPill status={s.status} />
                    <Button variant="ghost" size="sm" className="rounded-full">
                      Voir
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </SectionCard>
        </TabsContent>

        <TabsContent value="ranking" className="mt-5">
          <SectionCard title="Classement des équipes">
            <ol className="space-y-2">
              {SUBMISSIONS.slice()
                .sort((a, b) => b.score - a.score)
                .map((s, i) => (
                  <li
                    key={s.id}
                    className="flex items-center justify-between rounded-2xl border border-border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`grid h-9 w-9 place-items-center rounded-full font-display text-sm font-extrabold ${i === 0 ? "gradient-warm shadow-glow" : "bg-muted"}`}
                      >
                        #{i + 1}
                      </div>
                      <span className="text-xl">{s.emoji}</span>
                      <div className="font-semibold">{s.team}</div>
                    </div>
                    <div className="font-display text-xl font-extrabold text-teal">{s.score}</div>
                  </li>
                ))}
            </ol>
          </SectionCard>
        </TabsContent>

        <TabsContent value="ai" className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {SUBMISSIONS.slice(0, 3).map((s, i) => (
            <div
              key={s.id}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-card"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full gradient-cool opacity-30 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-coral" />
                  <span className="text-xs font-bold uppercase tracking-wider text-coral">
                    Recommandation IA
                  </span>
                </div>
                <div className="mt-2 font-display text-lg font-extrabold">{s.team}</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Forte cohérence avec vos critères RSE et un prototype mature. Compatibilité
                  culturelle élevée.
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="rounded-full gradient-warm px-3 py-1 text-xs font-extrabold">
                    {s.score}% match
                  </div>
                  <Button
                    size="sm"
                    className="rounded-full bg-foreground text-background"
                    onClick={() => toast.success(`Match annoncé avec ${s.team} 🎉`)}
                  >
                    <CheckCircle2 className="mr-1 h-4 w-4" /> Sélectionner
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </DashboardShell>
  );
}

function Item({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl bg-muted/40 p-3">
      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
        {k}
      </div>
      <div className="font-semibold">{v}</div>
    </div>
  );
}
