import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { ADMIN_NAV } from "@/lib/nav";
import { SectionCard, KPI } from "@/components/site/Dash";
import { GROWTH_DATA, CONVERSION_DATA, REGION_DATA, RSE_DATA, ENGAGEMENT_DATA } from "@/lib/mockFr";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Trophy, Users, Sparkles } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
} from "recharts";

export const Route = createFileRoute("/admin/analytics")({ component: AdminAnalytics });

const COLORS = ["#FFC604", "#EF897E", "#44B1A8", "#F3B11D", "#F0BDB8", "#9CA3AF"];

function AdminAnalytics() {
  return (
    <DashboardShell title="Analytique exécutive" badge="Espace admin" items={ADMIN_NAV}>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Métriques d'adoption, d'impact et de réussite de la plateforme.
        </p>
        <Button variant="outline" className="rounded-full border-2">
          <Download className="mr-1 h-4 w-4" /> Exporter le rapport
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI
          label="Adoption mensuelle"
          value="+18%"
          tint="primary"
          icon={<TrendingUp className="h-4 w-4" />}
        />
        <KPI
          label="Collaborations réussies"
          value="142"
          tint="coral"
          icon={<Sparkles className="h-4 w-4" />}
        />
        <KPI
          label="Taux de recrutement"
          value="42%"
          tint="teal"
          icon={<Trophy className="h-4 w-4" />}
        />
        <KPI
          label="Utilisateurs actifs"
          value="12.4k"
          tint="orange"
          icon={<Users className="h-4 w-4" />}
        />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <SectionCard title="Croissance multi-axes" className="lg:col-span-2">
          <div className="h-72">
            <ResponsiveContainer>
              <AreaChart data={GROWTH_DATA}>
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
                  fill="var(--teal)"
                  fillOpacity={0.35}
                  strokeWidth={3}
                />
                <Area
                  type="monotone"
                  name="Entreprises"
                  dataKey="entreprises"
                  stroke="var(--primary)"
                  fill="var(--primary)"
                  fillOpacity={0.35}
                  strokeWidth={3}
                />
                <Area
                  type="monotone"
                  name="Matchs"
                  dataKey="matchs"
                  stroke="var(--coral)"
                  fill="var(--coral)"
                  fillOpacity={0.35}
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Impact RSE">
          <div className="h-72">
            <ResponsiveContainer>
              <RadarChart data={RSE_DATA}>
                <PolarGrid stroke="var(--border)" />
                <PolarAngleAxis dataKey="axe" stroke="var(--muted-foreground)" />
                <Radar dataKey="value" stroke="var(--teal)" fill="var(--teal)" fillOpacity={0.45} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <SectionCard title="Entonnoir d'adoption" className="lg:col-span-2">
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
                <Bar dataKey="value" radius={[0, 12, 12, 0]} fill="var(--primary)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Activité par région">
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

      <SectionCard title="Engagement hebdomadaire" className="mt-6">
        <div className="h-64">
          <ResponsiveContainer>
            <BarChart data={ENGAGEMENT_DATA}>
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
              <Bar
                dataKey="actifs"
                name="Utilisateurs actifs"
                radius={[12, 12, 0, 0]}
                fill="var(--primary)"
              />
              <Bar
                dataKey="soumissions"
                name="Soumissions"
                radius={[12, 12, 0, 0]}
                fill="var(--coral)"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </SectionCard>
    </DashboardShell>
  );
}
