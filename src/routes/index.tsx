import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChallengeCard } from "@/components/site/ChallengeCard";
import { CountUp } from "@/components/site/CountUp";
import { CATEGORIES, CHALLENGES, PARTNERS, STATS, TESTIMONIALS } from "@/lib/mock";
import { ArrowRight, Sparkles, Rocket, Users, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-collab.png";

export const Route = createFileRoute("/")({ component: Landing });

function Landing() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pt-12 pb-20 md:grid-cols-2 md:px-6 md:pt-20 md:pb-28">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <Badge className="rounded-full bg-white/70 backdrop-blur text-foreground hover:bg-white/70 border border-border">
                <Sparkles className="mr-1 h-3.5 w-3.5 text-coral" />
                Innovation × Recruitment
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl"
            >
              Transform <span className="gradient-text">Challenges</span> Into{" "}
              <span className="gradient-text">Opportunities</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 max-w-xl text-lg text-muted-foreground"
            >
              Companies post real-world challenges. Young talents bring fresh solutions — and
              sometimes land their first role. One platform for innovation and recruitment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Link to="/company/onboarding">
                <Button
                  size="lg"
                  className="rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-glow"
                >
                  Post a Challenge <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/talent/onboarding">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 bg-white/70 backdrop-blur"
                >
                  Join as Talent
                </Button>
              </Link>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl glass p-4 shadow-card">
                  <div className="font-display text-2xl font-extrabold">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[40px] gradient-cool opacity-30 blur-2xl" />
            <div className="relative rounded-[36px] glass p-3 shadow-soft">
              <img
                src={heroImg}
                alt="Diverse team collaborating on innovation challenges"
                width={1280}
                height={1024}
                className="w-full rounded-[28px]"
              />
            </div>
            <FloatingBadge
              className="left-[-12px] top-10 animate-float"
              emoji="🌱"
              text="80% less plastic"
            />
            <FloatingBadge
              className="right-[-12px] top-1/3 animate-float"
              emoji="🤖"
              text="AI copilot live"
            />
            <FloatingBadge
              className="left-1/4 -bottom-4 animate-float"
              emoji="🎯"
              text="96% match"
            />
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-y border-border bg-muted/30 py-6">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-4 md:grid-cols-8">
            {PARTNERS.map((p) => (
              <div
                key={p}
                className="text-center font-display text-sm font-extrabold tracking-widest text-muted-foreground"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeader
          eyebrow="Explore"
          title="Pick a theme that moves you"
          subtitle="From climate to civic tech, browse challenges across the topics shaping tomorrow."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {CATEGORIES.map((c) => (
            <Link
              key={c.name}
              to="/challenges"
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-5 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="text-3xl">{c.emoji}</div>
              <div className="mt-2 font-display text-sm font-bold">{c.name}</div>
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1 opacity-70"
                style={{
                  background:
                    c.tint === "teal"
                      ? "var(--teal)"
                      : c.tint === "coral"
                        ? "var(--coral)"
                        : c.tint === "pink-soft"
                          ? "var(--pink-soft)"
                          : c.tint === "orange"
                            ? "var(--orange)"
                            : "var(--primary)",
                }}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Featured challenges */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="flex items-end justify-between">
          <SectionHeader eyebrow="Featured" title="Live challenges you can join today" />
          <Link
            to="/challenges"
            className="hidden text-sm font-semibold text-foreground hover:underline md:inline"
          >
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CHALLENGES.filter((c) => c.featured).map((c) => (
            <ChallengeCard key={c.id} c={c} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="relative mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <SectionHeader
          eyebrow="How it works"
          title="From spark to shipped — in three steps"
          centered
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Rocket,
              title: "Companies post a challenge",
              desc: "Briefs are co-designed with our team to attract the right talent.",
              color: "primary",
            },
            {
              icon: Users,
              title: "Talents team up & submit",
              desc: "Form complementary teams with AI matching, then iterate openly.",
              color: "coral",
            },
            {
              icon: Trophy,
              title: "Solutions win & hire",
              desc: "Winners get funded, hired, or both — with our celebration ritual.",
              color: "teal",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card"
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl"
                style={{
                  background:
                    s.color === "primary"
                      ? "var(--primary)"
                      : s.color === "coral"
                        ? "var(--coral)"
                        : "var(--teal)",
                }}
              />
              <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-warm shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-xl font-extrabold">{s.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 text-xs font-bold text-muted-foreground">STEP 0{i + 1}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-warm opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6">
          <SectionHeader eyebrow="Voices" title="A new generation of collaboration" dark />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="rounded-3xl glass p-6 shadow-card">
                <p className="font-display text-lg font-semibold leading-snug">“{t.quote}”</p>
                <div className="mt-4 text-sm">
                  <div className="font-bold">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="relative overflow-hidden rounded-[36px] border border-border bg-card p-10 shadow-card md:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full gradient-cool opacity-30 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full gradient-warm opacity-30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl font-extrabold md:text-5xl">
              Ready to <span className="gradient-text">make it real</span>?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Whether you’re scoping a strategic challenge or looking for your first role, Impact
              Match is your launchpad.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/company/onboarding">
                <Button size="lg" className="rounded-full bg-foreground text-background">
                  Post a Challenge
                </Button>
              </Link>
              <Link to="/talent/onboarding">
                <Button size="lg" variant="outline" className="rounded-full border-2">
                  Join as Talent
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered,
  dark,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div
          className={`text-xs font-bold uppercase tracking-widest ${dark ? "text-foreground/70" : "text-coral"}`}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function FloatingBadge({
  className,
  emoji,
  text,
}: {
  className?: string;
  emoji: string;
  text: string;
}) {
  return (
    <div className={`absolute rounded-2xl glass px-3 py-2 shadow-soft ${className ?? ""}`}>
      <div className="flex items-center gap-2 text-sm font-semibold">
        <span className="text-base">{emoji}</span> {text}
      </div>
    </div>
  );
}
