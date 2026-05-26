import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { CHALLENGES, TEAMS } from "@/lib/mock";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Trophy,
  Users,
  Sparkles,
  Upload,
  MessageCircle,
  ArrowLeft,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/challenges/$id")({ component: ChallengeDetail });

function ChallengeDetail() {
  const { id } = useParams({ from: "/challenges/$id" });
  const c = CHALLENGES.find((x) => x.id === id) ?? CHALLENGES[0];
  const teams = TEAMS.filter((t) => t.challenge === c.title);

  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 pt-8 md:px-6">
        <Link
          to="/challenges"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to marketplace
        </Link>
      </div>

      <section className="relative mx-auto max-w-6xl px-4 pt-6 md:px-6">
        <div className="relative overflow-hidden rounded-[36px] border border-border bg-card p-8 shadow-card md:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full gradient-cool opacity-30 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_320px]">
            <div>
              <div className="flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-3xl">
                  {c.companyLogo}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.company}
                  </div>
                  <Badge variant="outline" className="rounded-full border-teal/30 bg-teal/10">
                    {c.category}
                  </Badge>
                </div>
              </div>
              <h1 className="mt-5 font-display text-3xl font-extrabold md:text-4xl">{c.title}</h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">{c.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <Badge key={s} variant="outline" className="rounded-full">
                    {s}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/match/$id" params={{ id: c.id }}>
                  <Button size="lg" className="rounded-full bg-foreground text-background">
                    <Upload className="mr-2 h-4 w-4" /> Submit a solution
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="rounded-full border-2">
                  Join a team
                </Button>
                <Button size="lg" variant="ghost" className="rounded-full">
                  <MessageCircle className="mr-2 h-4 w-4" /> Ask the company
                </Button>
              </div>
            </div>

            <aside className="space-y-3">
              <StatCard
                icon={<Calendar className="h-4 w-4" />}
                label="Deadline"
                value={c.deadline}
              />
              <StatCard
                icon={<Trophy className="h-4 w-4 text-orange" />}
                label="Reward"
                value={c.reward}
              />
              <StatCard
                icon={<Users className="h-4 w-4" />}
                label="Difficulty"
                value={c.difficulty}
              />
              <StatCard
                icon={<Sparkles className="h-4 w-4 text-coral" />}
                label="Mode"
                value={c.recruiting ? "Challenge + Recruiting" : "Challenge"}
              />
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 rounded-3xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-extrabold">What we’re looking for</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "A clear problem framing and target users",
                "Working prototype or detailed technical spec",
                "Sustainability or ethical considerations",
                "Plan for measurable impact in 6 months",
              ].map((l) => (
                <li key={l} className="flex items-start gap-2">
                  <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-teal/15 text-teal">
                    <Check className="h-3 w-3" />
                  </span>
                  {l}
                </li>
              ))}
            </ul>
            <h2 className="mt-8 font-display text-xl font-extrabold">Timeline</h2>
            <ol className="mt-4 grid gap-3 sm:grid-cols-4">
              {["Open", "Team forming", "Submissions", "Pitch & match"].map((t, i) => (
                <li key={t} className="rounded-2xl border border-border p-3 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Phase {i + 1}
                  </div>
                  <div className="font-display text-sm font-bold">{t}</div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="font-display text-base font-extrabold">Teams already on it</h3>
            <div className="mt-4 space-y-3">
              {teams.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  Be the first team to claim this challenge.
                </p>
              )}
              {teams.map((t) => (
                <Link
                  key={t.id}
                  to="/teams/$id"
                  params={{ id: t.id }}
                  className="block rounded-2xl border border-border p-3 hover:bg-accent"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-semibold">
                      <span className="text-xl">{t.emoji}</span> {t.name}
                    </div>
                    <Badge className="rounded-full bg-teal text-teal-foreground hover:bg-teal">
                      {t.match}%
                    </Badge>
                  </div>
                  <div className="mt-2 flex -space-x-2">
                    {t.members.map((m) => (
                      <div
                        key={m.name}
                        className="grid h-7 w-7 place-items-center rounded-full border-2 border-card bg-muted"
                      >
                        {m.avatar}
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-border bg-muted/40 p-3">
      <span className="text-xs text-muted-foreground inline-flex items-center gap-2">
        {icon} {label}
      </span>
      <span className="font-display text-sm font-bold">{value}</span>
    </div>
  );
}
