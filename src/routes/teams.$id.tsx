import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { TEAMS } from "@/lib/mock";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Upload } from "lucide-react";

export const Route = createFileRoute("/teams/$id")({ component: TeamDetail });

function TeamDetail() {
  const { id } = useParams({ from: "/teams/$id" });
  const t = TEAMS.find((x) => x.id === id) ?? TEAMS[0];

  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 pt-8 md:px-6">
        <Link
          to="/teams"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All teams
        </Link>
      </div>

      <section className="mx-auto max-w-6xl px-4 pt-6 md:px-6">
        <div className="relative overflow-hidden rounded-[36px] border border-border bg-card p-8 shadow-card">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full gradient-cool opacity-30 blur-3xl" />
          <div className="relative flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-accent text-3xl">
                {t.emoji}
              </div>
              <div>
                <h1 className="font-display text-3xl font-extrabold">{t.name}</h1>
                <div className="text-sm text-muted-foreground">{t.challenge}</div>
              </div>
            </div>
            <div className="rounded-full gradient-warm px-4 py-2 font-display text-sm font-extrabold">
              Match {t.match}%
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3 md:px-6">
        <div className="rounded-3xl border border-border bg-card p-5">
          <h2 className="font-display text-base font-extrabold">Members</h2>
          <ul className="mt-3 space-y-2">
            {t.members.map((m) => (
              <li
                key={m.name}
                className="flex items-center justify-between rounded-2xl border border-border p-3"
              >
                <div className="flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-muted text-lg">
                    {m.avatar}
                  </span>
                  <div>
                    <div className="font-semibold">{m.name}</div>
                    <div className="text-xs text-muted-foreground">{m.role}</div>
                  </div>
                </div>
              </li>
            ))}
            {t.lookingFor.map((r) => (
              <li
                key={r}
                className="flex items-center justify-between rounded-2xl border-2 border-dashed border-border p-3 text-sm text-muted-foreground"
              >
                Open seat:{" "}
                <Badge className="rounded-full bg-teal text-teal-foreground hover:bg-teal">
                  {r}
                </Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 rounded-3xl border border-border bg-card p-5">
          <h2 className="font-display text-base font-extrabold">Team chat</h2>
          <div className="mt-3 space-y-3">
            {[
              ["Amélie", "👩🏻‍🎨", "Drafted three packaging concepts — sharing now."],
              ["Diego", "🧑🏽‍🌾", "Ran LCA on concept 2, looking great 🌱"],
              ["Nora", "👩🏽‍💻", "I’ll prototype the dashboard tonight."],
            ].map(([n, a, msg], i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-lg">
                  {a}
                </span>
                <div className="rounded-2xl bg-muted px-4 py-2 text-sm">
                  <div className="text-xs font-bold">{n}</div>
                  {msg}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <Input placeholder="Write a message…" className="rounded-2xl" />
            <Button className="rounded-2xl bg-foreground text-background">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="md:col-span-3 rounded-3xl border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-base font-extrabold">Shared submission</h2>
            <Button className="rounded-full bg-foreground text-background">
              <Upload className="mr-2 h-4 w-4" /> Upload
            </Button>
          </div>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {["Brief.pdf", "Prototype.fig", "Pitch.mp4"].map((f) => (
              <div key={f} className="rounded-2xl border border-border p-4">
                <div className="font-display text-sm font-bold">{f}</div>
                <div className="text-xs text-muted-foreground">Updated 2h ago</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
