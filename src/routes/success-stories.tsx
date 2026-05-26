import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { STORIES } from "@/lib/mock";
import { Badge } from "@/components/ui/badge";
import teamIllus from "@/assets/illus-team.png";

export const Route = createFileRoute("/success-stories")({ component: SuccessStories });

function SuccessStories() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pt-12 pb-12 md:grid-cols-2 md:px-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-coral">
              Success stories
            </div>
            <h1 className="mt-2 font-display text-4xl font-extrabold md:text-5xl">
              Real teams. <span className="gradient-text">Real impact.</span>
            </h1>
            <p className="mt-3 max-w-xl text-muted-foreground">
              From challenge to hire, from prototype to product — every story here started with a
              brief.
            </p>
          </div>
          <img
            src={teamIllus}
            alt="Team celebrating"
            loading="lazy"
            width={1024}
            height={1024}
            className="ml-auto w-full max-w-md animate-float"
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <ol className="relative space-y-10 border-l-2 border-border pl-8">
          {STORIES.map((s, i) => (
            <li key={s.id} className="relative">
              <span className="absolute -left-[37px] grid h-8 w-8 place-items-center rounded-full gradient-warm shadow-glow font-display font-extrabold">
                {i + 1}
              </span>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="rounded-full border-teal/30 bg-teal/10">
                    {s.tag}
                  </Badge>
                  <Badge className="rounded-full bg-primary text-primary-foreground hover:bg-primary">
                    {s.outcome}
                  </Badge>
                </div>
                <h2 className="mt-4 font-display text-2xl font-extrabold">{s.title}</h2>
                <div className="text-sm text-muted-foreground">{s.company}</div>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl bg-muted p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Before
                    </div>
                    <div className="mt-1 text-sm">{s.before}</div>
                  </div>
                  <div className="rounded-2xl gradient-cool p-4 text-white">
                    <div className="text-xs font-bold uppercase tracking-wider opacity-80">
                      After
                    </div>
                    <div className="mt-1 text-sm font-semibold">{s.after}</div>
                  </div>
                </div>
                <blockquote className="mt-5 rounded-2xl border-l-4 border-coral bg-accent p-4 text-sm italic">
                  “{s.quote}” <span className="not-italic text-muted-foreground">— {s.author}</span>
                </blockquote>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </SiteShell>
  );
}
