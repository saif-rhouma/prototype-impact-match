import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { POSITIONS } from "@/lib/mock";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Upload } from "lucide-react";

export const Route = createFileRoute("/recruitment/$id")({ component: PositionDetail });

function PositionDetail() {
  const { id } = useParams({ from: "/recruitment/$id" });
  const p = POSITIONS.find((x) => x.id === id) ?? POSITIONS[0];

  return (
    <SiteShell>
      <div className="mx-auto max-w-5xl px-4 pt-8 md:px-6">
        <Link
          to="/recruitment"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All positions
        </Link>
      </div>
      <section className="mx-auto max-w-5xl px-4 pt-6 md:px-6">
        <div className="relative overflow-hidden rounded-[36px] border border-border bg-card p-8 shadow-card">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full gradient-warm opacity-30 blur-3xl" />
          <div className="relative flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-3xl">
                {p.emoji}
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{p.company}</div>
                <h1 className="font-display text-3xl font-extrabold">{p.title}</h1>
                <div className="mt-2 flex flex-wrap gap-1.5 text-xs">
                  <Badge variant="outline" className="rounded-full">
                    {p.type}
                  </Badge>
                  <Badge variant="outline" className="rounded-full">
                    {p.city}
                    {p.remote && " · Remote"}
                  </Badge>
                </div>
              </div>
            </div>
            <Button className="rounded-full bg-foreground text-background">
              <Upload className="mr-2 h-4 w-4" /> Apply now
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-10 md:grid-cols-3 md:px-6">
        <div className="md:col-span-2 rounded-3xl border border-border bg-card p-6">
          <h2 className="font-display text-xl font-extrabold">About the role</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Join a small team building meaningful technology. You’ll work on end-to-end features,
            contribute to product decisions, and learn alongside experienced mentors.
          </p>
          <h3 className="mt-6 font-display font-extrabold">What you’ll do</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              "Own a clear scope from day one",
              "Pair daily with senior engineers",
              "Ship to production weekly",
              "Contribute to public showcases",
            ].map((l) => (
              <li key={l} className="flex gap-2">
                <Check className="h-4 w-4 text-teal" /> {l}
              </li>
            ))}
          </ul>
        </div>
        <aside className="space-y-3 rounded-3xl border border-border bg-card p-6">
          <h3 className="font-display font-extrabold">Required skills</h3>
          <div className="flex flex-wrap gap-1.5">
            {p.skills.map((s) => (
              <Badge key={s} variant="outline" className="rounded-full">
                {s}
              </Badge>
            ))}
          </div>
          <div className="rounded-2xl bg-muted p-3">
            <div className="text-xs text-muted-foreground">Your match score</div>
            <div className="font-display text-3xl font-extrabold gradient-text">{p.match}%</div>
          </div>
        </aside>
      </section>
    </SiteShell>
  );
}
