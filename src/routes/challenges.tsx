import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { CHALLENGES, CATEGORIES, type Category } from "@/lib/mock";
import { ChallengeCard } from "@/components/site/ChallengeCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal, Flame } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/challenges")({ component: ChallengesPage });

function ChallengesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Category | "All">("All");
  const [diff, setDiff] = useState<string>("All");

  const filtered = useMemo(() => {
    return CHALLENGES.filter((c) => {
      if (cat !== "All" && c.category !== cat) return false;
      if (diff !== "All" && c.difficulty !== diff) return false;
      if (q && !`${c.title} ${c.company} ${c.summary}`.toLowerCase().includes(q.toLowerCase()))
        return false;
      return true;
    });
  }, [q, cat, diff]);

  const trending = CHALLENGES.filter((c) => c.trending);

  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-8 md:px-6">
          <h1 className="font-display text-4xl font-extrabold md:text-5xl">
            Challenge Marketplace
          </h1>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Discover real-world briefs from companies looking for fresh ideas — and fresh hires.
          </p>

          <div className="mt-6 flex flex-col gap-3 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search challenges, companies, themes…"
                className="h-12 rounded-2xl border-2 pl-10 bg-white/80 backdrop-blur"
              />
            </div>
            <Button
              variant="outline"
              className="h-12 rounded-2xl border-2 bg-white/80 backdrop-blur"
            >
              <SlidersHorizontal className="mr-2 h-4 w-4" /> Advanced filters
            </Button>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill active={cat === "All"} onClick={() => setCat("All")}>
              ✨ All
            </Pill>
            {CATEGORIES.map((c) => (
              <Pill key={c.name} active={cat === c.name} onClick={() => setCat(c.name)}>
                {c.emoji} {c.name}
              </Pill>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            {["All", "Beginner", "Intermediate", "Advanced"].map((d) => (
              <button
                key={d}
                onClick={() => setDiff(d)}
                className={`rounded-full px-3 py-1 transition-all ${diff === d ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:bg-accent"}`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trending strip */}
      <section className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Flame className="h-4 w-4 text-coral" /> Trending now
        </div>
        <div className="-mx-4 mt-3 flex gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0">
          {trending.map((c) => (
            <Link
              key={c.id}
              to="/challenges/$id"
              params={{ id: c.id }}
              className="min-w-[280px] shrink-0 rounded-3xl border border-border bg-card p-4 shadow-card hover:shadow-soft"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-accent text-xl">
                  {c.companyLogo}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {c.category}
                  </div>
                  <div className="font-display text-sm font-bold leading-tight">{c.title}</div>
                </div>
              </div>
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>{c.reward}</span>
                <span>Ends {c.deadline}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">{filtered.length} challenges</div>
          <Badge variant="outline" className="rounded-full">
            Sorted: Most relevant
          </Badge>
        </div>
        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <ChallengeCard key={c.id} c={c} />
            ))}
          </div>
        )}
      </section>
    </SiteShell>
  );
}

function Pill({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
        active
          ? "border-transparent bg-foreground text-background"
          : "border-border bg-white/70 backdrop-blur hover:bg-white"
      }`}
    >
      {children}
    </button>
  );
}

function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
      <div className="text-5xl">🔎</div>
      <div className="mt-3 font-display text-xl font-bold">No challenges match those filters</div>
      <div className="text-sm text-muted-foreground">
        Try widening your search or browsing a different theme.
      </div>
    </div>
  );
}
