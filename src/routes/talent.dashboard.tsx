import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { TALENT_NAV } from "@/lib/nav";
import { KPI, SectionCard, StatusPill } from "@/components/site/Dash";
import { APPLICATIONS, INTERVIEWS, ACTIVITY } from "@/lib/mockFr";
import { CHALLENGES, TEAMS } from "@/lib/mock";
import { Button } from "@/components/ui/button";
import { Compass, Send, Trophy, Calendar, Flame, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/talent/dashboard")({ component: TalentDashboard });

function TalentDashboard() {
  const completion = 82;
  return (
    <DashboardShell title="Tableau de bord" badge="Espace talent — Amélie L." items={TALENT_NAV}>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full gradient-warm opacity-30 blur-3xl" />
        <div className="relative flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-coral">
              Salut Amélie 👋
            </div>
            <h2 className="font-display text-2xl font-extrabold">
              Tu es sur une série de 12 jours <Flame className="inline h-6 w-6 text-orange" />
            </h2>
            <p className="text-sm text-muted-foreground">
              3 nouvelles opportunités matchent ton profil cette semaine.
            </p>
            <div className="mt-4 flex gap-2">
              <Link to="/talent/challenges">
                <Button className="rounded-full bg-foreground text-background">
                  Voir mes défis
                </Button>
              </Link>
              <Link to="/challenges">
                <Button variant="outline" className="rounded-full border-2">
                  Explorer
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative grid h-32 w-32 place-items-center">
            <svg className="absolute inset-0" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" stroke="var(--muted)" strokeWidth="10" fill="none" />
              <motion.circle
                cx="50"
                cy="50"
                r="44"
                stroke="var(--primary)"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
                strokeDasharray={`${2 * Math.PI * 44}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 44 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 44 * (1 - completion / 100) }}
                transition={{ duration: 1.2 }}
              />
            </svg>
            <div className="text-center">
              <div className="font-display text-2xl font-extrabold">{completion}%</div>
              <div className="text-[10px] uppercase text-muted-foreground">profil</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <KPI
          label="Défis rejoints"
          value="6"
          tint="primary"
          icon={<Compass className="h-4 w-4" />}
        />
        <KPI
          label="Soumissions envoyées"
          value="4"
          tint="coral"
          delta="+2"
          icon={<Send className="h-4 w-4" />}
        />
        <KPI label="Matchs obtenus" value="2" tint="teal" icon={<Sparkles className="h-4 w-4" />} />
        <KPI label="Entretiens" value="3" tint="orange" icon={<Calendar className="h-4 w-4" />} />
        <KPI
          label="Score profil"
          value="91"
          tint="teal"
          delta="+4"
          icon={<Trophy className="h-4 w-4" />}
        />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <SectionCard title="Mes défis en cours" className="lg:col-span-2">
          <ul className="space-y-2">
            {CHALLENGES.slice(0, 4).map((c) => (
              <li key={c.id}>
                <Link
                  to="/challenges/$id"
                  params={{ id: c.id }}
                  className="flex items-center justify-between rounded-2xl border border-border p-3 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent text-xl">
                      {c.companyLogo}
                    </span>
                    <div>
                      <div className="font-semibold">{c.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {c.company} • {c.category}
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full bg-teal text-teal-foreground px-2 py-0.5 text-[10px] font-bold">
                    En cours
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Badges & gamification">
          <div className="grid grid-cols-3 gap-2">
            {[
              { e: "🏆", l: "Top 1%" },
              { e: "🔥", l: "Streak 12j" },
              { e: "🤝", l: "Team player" },
              { e: "🌱", l: "Eco hero" },
              { e: "⭐", l: "Reviewer" },
              { e: "🎯", l: "First win" },
            ].map((b, i) => (
              <motion.div
                key={b.l}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
                className="grid place-items-center rounded-2xl border border-border bg-card p-3 text-center"
              >
                <div className="text-2xl">{b.e}</div>
                <div className="mt-1 text-[10px] font-semibold">{b.l}</div>
              </motion.div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <SectionCard title="Mes candidatures" className="lg:col-span-2">
          <ul className="space-y-2">
            {APPLICATIONS.slice(0, 5).map((a) => (
              <li
                key={a.id}
                className="flex items-center justify-between rounded-2xl border border-border p-3"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent text-xl">
                    {a.emoji}
                  </span>
                  <div>
                    <div className="font-semibold">{a.position}</div>
                    <div className="text-xs text-muted-foreground">
                      {a.company} • {a.date}
                    </div>
                  </div>
                </div>
                <StatusPill status={a.status} />
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Prochains entretiens">
          <ul className="space-y-2">
            {INTERVIEWS.map((i) => (
              <li key={i.id} className="rounded-2xl border border-border p-3">
                <div className="text-xs font-bold uppercase text-coral">{i.date}</div>
                <div className="font-semibold">{i.position}</div>
                <div className="text-xs text-muted-foreground">
                  {i.time} • {i.mode}
                </div>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <SectionCard title="Mes équipes">
          <ul className="space-y-2">
            {TEAMS.map((t) => (
              <li
                key={t.id}
                className="flex items-center justify-between rounded-2xl border border-border p-3"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent text-xl">
                    {t.emoji}
                  </span>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.challenge}</div>
                  </div>
                </div>
                <div className="rounded-full gradient-warm px-2 py-0.5 text-[10px] font-extrabold">
                  {t.match}%
                </div>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Activité récente">
          <ul className="space-y-3">
            {ACTIVITY.map((a) => (
              <li key={a.id} className="flex items-start gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-base">
                  {a.avatar}
                </span>
                <div className="text-sm">
                  <span className="font-semibold">{a.who}</span>{" "}
                  <span className="text-muted-foreground">{a.action}</span>{" "}
                  <span className="font-semibold">{a.target}</span>
                  <div className="text-[11px] text-muted-foreground">{a.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </DashboardShell>
  );
}
