import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { POSITIONS } from "@/lib/mock";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin } from "lucide-react";

export const Route = createFileRoute("/recruitment")({ component: RecruitmentPage });

function RecruitmentPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-8 md:px-6">
          <h1 className="font-display text-4xl font-extrabold md:text-5xl">Recruitment</h1>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Open positions from companies actively hiring through Impact Match.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {POSITIONS.map((p) => (
            <Link
              key={p.id}
              to="/recruitment/$id"
              params={{ id: p.id }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full gradient-warm opacity-20 blur-2xl" />
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-2xl">
                    {p.emoji}
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground inline-flex items-center gap-1">
                      <Building2 className="h-3 w-3" /> {p.company}
                    </div>
                    <div className="font-display text-base font-extrabold">{p.title}</div>
                  </div>
                </div>
                <Badge className="rounded-full bg-primary text-primary-foreground hover:bg-primary">
                  {p.match}%
                </Badge>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
                <Badge variant="outline" className="rounded-full">
                  {p.type}
                </Badge>
                <Badge variant="outline" className="rounded-full">
                  <MapPin className="mr-1 h-3 w-3" />
                  {p.city}
                </Badge>
                {p.remote && (
                  <Badge variant="outline" className="rounded-full border-teal/30 bg-teal/10">
                    Remote
                  </Badge>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.skills.map((s) => (
                  <Badge key={s} variant="outline" className="rounded-full">
                    {s}
                  </Badge>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
