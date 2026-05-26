import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { COMPANY_NAV } from "@/lib/nav";
import { SectionCard, KPI } from "@/components/site/Dash";
import { CANDIDATES } from "@/lib/mockFr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bookmark, Filter, Users, Sparkles, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/company/candidates")({ component: CompanyCandidates });

const ALL_SKILLS = Array.from(new Set(CANDIDATES.flatMap((c) => c.skills)));

function CompanyCandidates() {
  const [q, setQ] = useState("");
  const [skill, setSkill] = useState<string | null>(null);
  const items = CANDIDATES.filter(
    (c) =>
      (c.name + c.role + c.city).toLowerCase().includes(q.toLowerCase()) &&
      (!skill || c.skills.includes(skill)),
  );

  return (
    <DashboardShell title="Talents" badge="Espace entreprise" items={COMPANY_NAV}>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI
          label="Profils découverts"
          value="184"
          tint="primary"
          icon={<Users className="h-4 w-4" />}
        />
        <KPI
          label="Score moyen IA"
          value="86%"
          tint="coral"
          delta="+3%"
          icon={<Sparkles className="h-4 w-4" />}
        />
        <KPI
          label="Profils sauvegardés"
          value="22"
          tint="teal"
          icon={<Bookmark className="h-4 w-4" />}
        />
        <KPI
          label="Recrutés ce mois"
          value="3"
          tint="orange"
          icon={<Trophy className="h-4 w-4" />}
        />
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher un talent par nom, rôle, ville…"
            className="rounded-full pl-9"
          />
        </div>
        <Button variant="outline" className="rounded-full border-2">
          <Filter className="mr-1 h-4 w-4" /> Filtres
        </Button>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <button
          onClick={() => setSkill(null)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${!skill ? "bg-foreground text-background" : "bg-muted hover:bg-accent"}`}
        >
          Toutes compétences
        </button>
        {ALL_SKILLS.map((s) => (
          <button
            key={s}
            onClick={() => setSkill(s === skill ? null : s)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${skill === s ? "bg-foreground text-background" : "bg-muted hover:bg-accent"}`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-card hover:shadow-soft transition-all"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full gradient-cool opacity-25 blur-2xl" />
            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-3xl">
                    {c.avatar}
                  </span>
                  <div>
                    <div className="font-display text-lg font-extrabold">{c.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {c.role} • {c.city}
                    </div>
                  </div>
                </div>
                <div className="rounded-full gradient-warm px-3 py-1 text-xs font-extrabold shadow-glow">
                  {c.score}%
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-1">
                {c.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <Cell k="Défis" v={String(c.challenges)} />
                <Cell k="Badges" v={String(c.badges.length)} />
                <Cell k="Dispo" v={c.availability} />
              </div>

              <div className="mt-4 flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 rounded-full border-2">
                  <Bookmark className="mr-1 h-3 w-3" /> Sauver
                </Button>
                <Button size="sm" className="flex-1 rounded-full bg-foreground text-background">
                  Contacter
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {items.length === 0 && (
        <SectionCard title="Aucun résultat">
          <p className="text-sm text-muted-foreground">
            Essayez d'élargir vos filtres ou de modifier votre recherche.
          </p>
        </SectionCard>
      )}
    </DashboardShell>
  );
}

function Cell({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl bg-muted/40 p-2">
      <div className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">{k}</div>
      <div className="text-sm font-bold">{v}</div>
    </div>
  );
}
