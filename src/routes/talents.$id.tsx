import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { TALENTS } from "@/lib/mock";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis,
} from "recharts";
import { ArrowLeft, MessageCircle, Sparkles } from "lucide-react";

export const Route = createFileRoute("/talents/$id")({ component: TalentDetail });

function TalentDetail() {
  const { id } = useParams({ from: "/talents/$id" });
  const t = TALENTS.find((x) => x.id === id) ?? TALENTS[0];

  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 pt-8 md:px-6">
        <Link
          to="/talents"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
      </div>

      <section className="mx-auto max-w-6xl px-4 pt-6 md:px-6">
        <div className="relative overflow-hidden rounded-[36px] border border-border bg-card p-8 shadow-card">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full gradient-warm opacity-30 blur-3xl" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
            <div className="grid h-24 w-24 place-items-center rounded-3xl bg-accent text-5xl">
              {t.avatar}
            </div>
            <div className="flex-1">
              <h1 className="font-display text-3xl font-extrabold md:text-4xl">{t.name}</h1>
              <div className="text-muted-foreground">
                {t.role} • {t.city}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.badges.map((b) => (
                  <Badge
                    key={b}
                    className="rounded-full bg-coral text-coral-foreground hover:bg-coral"
                  >
                    🏅 {b}
                  </Badge>
                ))}
                {t.interests.map((i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="rounded-full border-teal/30 bg-teal/10"
                  >
                    {i}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <Button className="rounded-full bg-foreground text-background">
                <Sparkles className="mr-2 h-4 w-4" /> Invite to team
              </Button>
              <Button variant="outline" className="rounded-full border-2">
                <MessageCircle className="mr-2 h-4 w-4" /> Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3 md:px-6">
        <div className="md:col-span-2 rounded-3xl border border-border bg-card p-6">
          <h2 className="font-display text-xl font-extrabold">Skills radar</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={t.skills}>
                <PolarGrid stroke="var(--border)" />
                <PolarAngleAxis
                  dataKey="name"
                  tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                />
                <PolarRadiusAxis tick={false} axisLine={false} />
                <Radar
                  dataKey="level"
                  stroke="var(--coral)"
                  fill="var(--coral)"
                  fillOpacity={0.35}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <h2 className="font-display text-xl font-extrabold">Portfolio</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl gradient-cool opacity-90 shadow-card"
              />
            ))}
          </div>
        </div>

        <div className="md:col-span-3 rounded-3xl border border-border bg-card p-6">
          <h2 className="font-display text-xl font-extrabold">Activity timeline</h2>
          <ol className="mt-4 relative border-l-2 border-border pl-6">
            {[
              ["Joined challenge", "Reimagine packaging — 2d ago"],
              ["Earned badge", "Top 1% Designer — 1w ago"],
              ["Created team", "Loop Studio — 2w ago"],
              ["Profile updated", "Added skills & portfolio — 3w ago"],
            ].map(([title, sub], i) => (
              <li key={i} className="mb-5">
                <span className="absolute -left-[7px] mt-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-primary" />
                <div className="font-semibold">{title}</div>
                <div className="text-sm text-muted-foreground">{sub}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SiteShell>
  );
}
