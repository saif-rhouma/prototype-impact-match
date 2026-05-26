import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { COMPANY_NAV } from "@/lib/nav";
import { KPI, SectionCard } from "@/components/site/Dash";
import { ENGAGEMENT_DATA, CONVERSION_DATA, REGION_DATA, RSE_DATA } from "@/lib/mockFr";
import { Button } from "@/components/ui/button";
import { Download, BarChart3, Sparkles, Users, Trophy } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";

export const Route = createFileRoute("/company/analytics")({ component: CompanyAnalytics });

const COLORS = ["#FFC604", "#EF897E", "#44B1A8", "#F3B11D", "#F0BDB8", "#9CA3AF"];

function CompanyAnalytics() {
  return (
    <DashboardShell title="Analytique" badge="Espace entreprise" items={COMPANY_NAV}>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Vue d'ensemble de la performance de vos défis et de votre recrutement.
        </p>
        <Button variant="outline" className="rounded-full border-2">
          <Download className="mr-1 h-4 w-4" /> Exporter
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI
          label="Taux de conversion"
          value="4.1%"
          tint="primary"
          delta="+0.6%"
          icon={<BarChart3 className="h-4 w-4" />}
        />
        <KPI
          label="Score IA moyen"
          value="86"
          tint="coral"
          delta="+2"
          icon={<Sparkles className="h-4 w-4" />}
        />
        <KPI
          label="Engagement talents"
          value="78%"
          tint="teal"
          delta="+5%"
          icon={<Users className="h-4 w-4" />}
        />
        <KPI
          label="Succès matchs"
          value="92%"
          tint="orange"
          delta="+4%"
          icon={<Trophy className="h-4 w-4" />}
        />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <SectionCard title="Performance des défis" className="lg:col-span-2">
          <div className="h-72">
            <ResponsiveContainer>
              <AreaChart data={ENGAGEMENT_DATA}>
                <defs>
                  <linearGradient id="a1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="a2" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--coral)" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="var(--coral)" stopOpacity={0} />
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
                <Legend />
                <Area
                  type="monotone"
                  name="Actifs"
                  dataKey="actifs"
                  stroke="var(--primary)"
                  fill="url(#a1)"
                  strokeWidth={3}
                />
                <Area
                  type="monotone"
                  name="Soumissions"
                  dataKey="soumissions"
                  stroke="var(--coral)"
                  fill="url(#a2)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Profil RSE de l'écosystème">
          <div className="h-72">
            <ResponsiveContainer>
              <RadarChart data={RSE_DATA}>
                <PolarGrid stroke="var(--border)" />
                <PolarAngleAxis dataKey="axe" stroke="var(--muted-foreground)" />
                <PolarRadiusAxis stroke="var(--muted-foreground)" />
                <Radar dataKey="value" stroke="var(--teal)" fill="var(--teal)" fillOpacity={0.45} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <SectionCard title="Entonnoir de conversion" className="lg:col-span-2">
          <div className="h-72">
            <ResponsiveContainer>
              <BarChart data={CONVERSION_DATA} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis type="number" stroke="var(--muted-foreground)" />
                <YAxis
                  dataKey="etape"
                  type="category"
                  width={140}
                  stroke="var(--muted-foreground)"
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: 16,
                    border: "1px solid var(--border)",
                    background: "var(--card)",
                  }}
                />
                <Bar dataKey="value" radius={[0, 12, 12, 0]} fill="var(--coral)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Répartition régionale">
          <div className="h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={REGION_DATA}
                  dataKey="value"
                  nameKey="region"
                  innerRadius={50}
                  outerRadius={90}
                  paddingAngle={4}
                >
                  {REGION_DATA.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: 16,
                    border: "1px solid var(--border)",
                    background: "var(--card)",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Heatmap engagement (7 derniers jours)" className="mt-6">
        <div className="overflow-x-auto">
          <div
            className="grid gap-1 text-[10px] text-muted-foreground"
            style={{ gridTemplateColumns: "60px repeat(24, 1fr)" }}
          >
            <div></div>
            {Array.from({ length: 24 }).map((_, h) => (
              <div key={h} className="text-center">
                {h}
              </div>
            ))}
            {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((d) => (
              <>
                <div key={`l-${d}`} className="py-1 font-semibold text-foreground">
                  {d}
                </div>
                {Array.from({ length: 24 }).map((_, h) => {
                  const v = Math.random();
                  return (
                    <div
                      key={`${d}-${h}`}
                      className="aspect-square rounded-md"
                      style={{
                        background: `color-mix(in oklab, var(--primary) ${Math.round(v * 90)}%, var(--muted))`,
                      }}
                    />
                  );
                })}
              </>
            ))}
          </div>
        </div>
      </SectionCard>
    </DashboardShell>
  );
}
