import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { ADMIN_NAV } from "@/lib/nav";
import { KPI, SectionCard, StatusPill } from "@/components/site/Dash";
import { GROWTH_DATA, MODERATION, ACTIVITY, RSE_DATA } from "@/lib/mockFr";
import { Building2, Users, Trophy, Megaphone, Briefcase, AlertTriangle } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
} from "recharts";

export const Route = createFileRoute("/admin")({ component: AdminDashboard });

function AdminDashboard() {
  return (
    <DashboardShell title="Centre de contrôle" badge="Espace admin" items={ADMIN_NAV}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <KPI
          label="Entreprises validées"
          value="320"
          tint="primary"
          delta="+18"
          icon={<Building2 className="h-4 w-4" />}
        />
        <KPI
          label="Défis actifs"
          value="86"
          tint="coral"
          delta="+12"
          icon={<Megaphone className="h-4 w-4" />}
        />
        <KPI
          label="Jeunes inscrits"
          value="18.5k"
          tint="teal"
          delta="+5.3k"
          icon={<Users className="h-4 w-4" />}
        />
        <KPI
          label="Matchs réalisés"
          value="96"
          tint="orange"
          delta="+24"
          icon={<Trophy className="h-4 w-4" />}
        />
        <KPI
          label="Recrutements"
          value="760"
          tint="teal"
          delta="+96"
          icon={<Briefcase className="h-4 w-4" />}
        />
        <KPI
          label="Signalements"
          value="14"
          tint="coral"
          delta="-3"
          icon={<AlertTriangle className="h-4 w-4" />}
        />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <SectionCard title="Croissance de l'écosystème" className="lg:col-span-2">
          <div className="h-72">
            <ResponsiveContainer>
              <AreaChart data={GROWTH_DATA}>
                <defs>
                  <linearGradient id="ag1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="ag2" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--coral)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--coral)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="ag3" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--teal)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--teal)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="mois" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    borderRadius: 16,
                    border: "1px solid var(--border)",
                    background: "var(--card)",
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  name="Talents"
                  dataKey="talents"
                  stroke="var(--teal)"
                  fill="url(#ag3)"
                  strokeWidth={3}
                />
                <Area
                  type="monotone"
                  name="Entreprises"
                  dataKey="entreprises"
                  stroke="var(--primary)"
                  fill="url(#ag1)"
                  strokeWidth={3}
                />
                <Area
                  type="monotone"
                  name="Matchs"
                  dataKey="matchs"
                  stroke="var(--coral)"
                  fill="url(#ag2)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Impact RSE global">
          <div className="h-72">
            <ResponsiveContainer>
              <RadarChart data={RSE_DATA}>
                <PolarGrid stroke="var(--border)" />
                <PolarAngleAxis dataKey="axe" stroke="var(--muted-foreground)" />
                <Radar
                  dataKey="value"
                  stroke="var(--coral)"
                  fill="var(--coral)"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <SectionCard title="Modération récente">
          <ul className="space-y-2">
            {MODERATION.slice(0, 4).map((m) => (
              <li
                key={m.id}
                className="flex items-start justify-between gap-3 rounded-2xl border border-border p-3"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <StatusPill status={m.level} />
                    <span className="text-xs text-muted-foreground">{m.type}</span>
                  </div>
                  <div className="mt-1 font-semibold">{m.target}</div>
                  <div className="text-xs text-muted-foreground">{m.reason}</div>
                </div>
                <StatusPill status={m.status} />
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard
          title="Activité plateforme"
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
    </DashboardShell>
  );
}
