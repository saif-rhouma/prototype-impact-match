import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { COMPANY_NAV } from "@/lib/nav";
import { KPI, SectionCard, StatusPill } from "@/components/site/Dash";
import {
  COMPANY_CHALLENGES,
  CANDIDATES,
  ACTIVITY,
  NOTIFICATIONS,
  INTERVIEWS,
  SUBMISSIONS,
  ENGAGEMENT_DATA,
} from "@/lib/mockFr";
import { CHALLENGES } from "@/lib/mock";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Megaphone,
  Users,
  Trophy,
  Sparkles,
  Clock,
  Activity as ActivityIcon,
} from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  LineChart,
} from "recharts";
import { motion } from "framer-motion";

export const Route = createFileRoute("/company/dashboard")({ component: CompanyDashboard });

function CompanyDashboard() {
  return (
    <DashboardShell
      title="Tableau de bord — Verda Foods"
      badge="Espace entreprise"
      items={COMPANY_NAV}
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Bienvenue Camille 👋 Voici l'activité de votre écosystème impact.
        </p>
        <Link to="/company/challenges">
          <Button className="rounded-full gradient-warm text-foreground font-bold shadow-glow">
            <Plus className="mr-1 h-4 w-4" /> Créer un défi
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <KPI
          label="Défis actifs"
          value="4"
          tint="primary"
          delta="+1"
          icon={<Megaphone className="h-4 w-4" />}
        />
        <KPI
          label="Solutions reçues"
          value="128"
          tint="coral"
          delta="+24%"
          icon={<Sparkles className="h-4 w-4" />}
        />
        <KPI
          label="Talents recrutés"
          value="9"
          tint="teal"
          delta="+3"
          icon={<Trophy className="h-4 w-4" />}
        />
        <KPI
          label="Matchs réalisés"
          value="17"
          tint="orange"
          delta="+5"
          icon={<Users className="h-4 w-4" />}
        />
        <KPI
          label="Taux d'engagement"
          value="82%"
          tint="teal"
          delta="+6%"
          icon={<ActivityIcon className="h-4 w-4" />}
        />
        <KPI
          label="Réponse moyenne"
          value="3.2h"
          tint="coral"
          delta="-12%"
          icon={<Clock className="h-4 w-4" />}
        />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <SectionCard title="Activité des soumissions" className="lg:col-span-2">
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={ENGAGEMENT_DATA}>
                <defs>
                  <linearGradient id="cg1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--coral)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--coral)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="cg2" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="jour" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    borderRadius: 16,
                    border: "1px solid var(--border)",
                    background: "var(--card)",
                  }}
                />
                <Area
                  type="monotone"
                  name="Soumissions"
                  dataKey="soumissions"
                  stroke="var(--coral)"
                  fill="url(#cg1)"
                  strokeWidth={3}
                />
                <Area
                  type="monotone"
                  name="Actifs"
                  dataKey="actifs"
                  stroke="var(--primary)"
                  fill="url(#cg2)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard
          title="Notifications récentes"
          action={
            <Button variant="ghost" size="sm" className="rounded-full">
              Tout voir
            </Button>
          }
        >
          <ul className="space-y-2">
            {NOTIFICATIONS.map((n) => (
              <li
                key={n.id}
                className="flex items-start gap-3 rounded-2xl border border-border p-3 hover:bg-accent transition-colors"
              >
                <span
                  className="mt-1 h-2 w-2 shrink-0 rounded-full"
                  style={{ background: `var(--${n.tint})` }}
                />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold">{n.title}</div>
                  <div className="truncate text-xs text-muted-foreground">{n.desc}</div>
                  <div className="mt-1 text-[11px] text-muted-foreground">{n.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <SectionCard
          title="Défis récents"
          action={
            <Link to="/company/challenges">
              <Button variant="outline" size="sm" className="rounded-full">
                Gérer
              </Button>
            </Link>
          }
        >
          <ul className="space-y-2">
            {COMPANY_CHALLENGES.slice(0, 4).map((c) => (
              <li
                key={c.id}
                className="flex items-center justify-between rounded-2xl border border-border p-3"
              >
                <div className="min-w-0">
                  <div className="truncate font-semibold">{c.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {c.category} • {c.submissions} soumissions • {c.deadline}
                  </div>
                </div>
                <StatusPill status={c.status} />
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard
          title="Talents recommandés"
          action={
            <Link to="/company/candidates">
              <Button variant="ghost" size="sm" className="rounded-full">
                Voir tout
              </Button>
            </Link>
          }
        >
          <ul className="space-y-2">
            {CANDIDATES.slice(0, 4).map((c) => (
              <li
                key={c.id}
                className="flex items-center justify-between rounded-2xl border border-border p-3 hover:bg-accent transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-xl">
                    {c.avatar}
                  </span>
                  <div>
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {c.role} • {c.city}
                    </div>
                  </div>
                </div>
                <div className="rounded-full gradient-warm px-3 py-1 text-xs font-extrabold">
                  {c.score}%
                </div>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <SectionCard title="Solutions prometteuses" className="lg:col-span-2">
          <ul className="space-y-2">
            {SUBMISSIONS.map((s) => (
              <li
                key={s.id}
                className="flex items-center justify-between rounded-2xl border border-border p-3"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent text-xl">
                    {s.emoji}
                  </span>
                  <div>
                    <div className="font-semibold">{s.team}</div>
                    <div className="text-xs text-muted-foreground">
                      {s.challenge} • {s.date}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-display text-lg font-extrabold text-teal">{s.score}</div>
                    <div className="text-[10px] uppercase text-muted-foreground">score</div>
                  </div>
                  <StatusPill status={s.status} />
                </div>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Pipeline recrutement">
          <div className="space-y-3">
            {["Nouveau", "Présélection", "Entretien", "Finaliste", "Recruté"].map((stage, i) => {
              const count = [12, 8, 5, 3, 2][i];
              const pct = [100, 70, 45, 28, 18][i];
              return (
                <div key={stage}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold">{stage}</span>
                    <span className="text-muted-foreground">{count}</span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="h-full gradient-warm"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <SectionCard
          title="Calendrier des entretiens"
          action={
            <Button variant="ghost" size="sm" className="rounded-full">
              Planifier
            </Button>
          }
        >
          <ul className="space-y-2">
            {INTERVIEWS.map((i) => (
              <li
                key={i.id}
                className="flex items-center justify-between rounded-2xl border border-border p-3"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-xl">
                    {i.avatar}
                  </span>
                  <div>
                    <div className="font-semibold">{i.with}</div>
                    <div className="text-xs text-muted-foreground">{i.position}</div>
                  </div>
                </div>
                <div className="text-right text-xs">
                  <div className="font-bold">{i.date}</div>
                  <div className="text-muted-foreground">
                    {i.time} • {i.mode}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard
          title="Flux d'activité"
          action={
            <span className="rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-bold uppercase text-teal">
              Live
            </span>
          }
        >
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

      {/* Hidden challenge list anchor for navigation context */}
      <div className="hidden">{CHALLENGES.length}</div>
    </DashboardShell>
  );
}
