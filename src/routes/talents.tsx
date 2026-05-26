import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { TALENTS } from "@/lib/mock";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/talents")({ component: TalentsPage });

function TalentsPage() {
  const [q, setQ] = useState("");
  const filtered = TALENTS.filter(
    (t) => !q || `${t.name} ${t.role} ${t.city}`.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-8 md:px-6">
          <h1 className="font-display text-4xl font-extrabold md:text-5xl">Young Talents</h1>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Curious, ambitious, ready to ship. Meet the next generation.
          </p>
          <div className="relative mt-6 max-w-xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name, skill, city…"
              className="h-12 rounded-2xl border-2 pl-10 bg-white/80 backdrop-blur"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <Link
              key={t.id}
              to="/talents/$id"
              params={{ id: t.id }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full gradient-warm opacity-20 blur-2xl" />
              <div className="flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-3xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-display text-lg font-extrabold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {t.role} • {t.city}
                  </div>
                </div>
                <div className="ml-auto rounded-full gradient-warm px-3 py-1 text-xs font-extrabold">
                  {t.match}%
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {t.skills.slice(0, 4).map((s) => (
                  <Badge key={s.name} variant="outline" className="rounded-full">
                    {s.name}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {t.badges.map((b) => (
                  <Badge
                    key={b}
                    className="rounded-full bg-coral text-coral-foreground hover:bg-coral"
                  >
                    🏅 {b}
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
