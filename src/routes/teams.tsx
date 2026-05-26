import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { TEAMS } from "@/lib/mock";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/teams")({ component: TeamsPage });

function TeamsPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-8 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-4xl font-extrabold md:text-5xl">Team Formation</h1>
              <p className="mt-2 max-w-xl text-muted-foreground">
                AI-matched teams of complementary skills. Form, invite, and ship together.
              </p>
            </div>
            <Button className="rounded-full bg-foreground text-background">
              <Plus className="mr-2 h-4 w-4" /> Create a team
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TEAMS.map((t) => (
            <Link
              key={t.id}
              to="/teams/$id"
              params={{ id: t.id }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full gradient-cool opacity-20 blur-2xl" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-2xl">
                    {t.emoji}
                  </span>
                  <div>
                    <div className="font-display text-lg font-extrabold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.challenge}</div>
                  </div>
                </div>
                <div className="rounded-full gradient-warm px-3 py-1 text-xs font-extrabold">
                  {t.match}%
                </div>
              </div>
              <div className="mt-4 flex -space-x-2">
                {t.members.map((m) => (
                  <div
                    key={m.name}
                    className="grid h-9 w-9 place-items-center rounded-full border-2 border-card bg-muted text-lg"
                    title={`${m.name} · ${m.role}`}
                  >
                    {m.avatar}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {t.lookingFor.length === 0 ? (
                    <Badge variant="outline" className="rounded-full">
                      Closed
                    </Badge>
                  ) : (
                    t.lookingFor.map((s) => (
                      <Badge
                        key={s}
                        className="rounded-full bg-teal text-teal-foreground hover:bg-teal"
                      >
                        Looking: {s}
                      </Badge>
                    ))
                  )}
                </div>
                {t.open && <span className="text-xs font-semibold text-teal">● Open</span>}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
