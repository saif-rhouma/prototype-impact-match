import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { CHALLENGES } from "@/lib/mock";

export const Route = createFileRoute("/match/$id")({ component: MatchPage });

function MatchPage() {
  const { id } = useParams({ from: "/match/$id" });
  const c = CHALLENGES.find((x) => x.id === id) ?? CHALLENGES[0];
  const [score, setScore] = useState(0);

  useEffect(() => {
    const colors = ["#FFC604", "#EF897E", "#F3B11D", "#44B1A8", "#F0BDB8"];
    const blast = () =>
      confetti({
        particleCount: 80,
        spread: 80,
        startVelocity: 45,
        origin: { y: 0.6 },
        colors,
      });
    blast();
    const t1 = setTimeout(blast, 600);
    const t2 = setTimeout(blast, 1200);
    let v = 0;
    const i = setInterval(() => {
      v += 2;
      setScore(Math.min(96, v));
      if (v >= 96) clearInterval(i);
    }, 25);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(i);
    };
  }, []);

  return (
    <SiteShell hideFooter>
      <section className="relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto max-w-3xl px-4 pt-16 pb-24 text-center md:px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 16 }}
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-bold uppercase tracking-widest">
              <span>🎯</span> A new match
            </div>
            <h1 className="mt-6 font-display text-6xl font-black md:text-8xl">
              It’s a <span className="gradient-text">Match!</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Verda Foods just selected your solution for{" "}
              <span className="font-semibold text-foreground">{c.title}</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-10 grid h-56 w-56 place-items-center rounded-full gradient-warm shadow-glow"
          >
            <div className="grid h-44 w-44 place-items-center rounded-full bg-background">
              <div className="text-center">
                <div className="text-xs font-bold uppercase tracking-widest text-coral">
                  Match score
                </div>
                <div className="font-display text-6xl font-extrabold">{score}%</div>
              </div>
            </div>
          </motion.div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              ["💬", "Kick-off call", "We’ll schedule it in 24h"],
              ["📄", "Sign agreement", "Light, friendly contract"],
              ["🚀", "Start sprint", "Ship in 2 weeks"],
            ].map(([e, t, s], i) => (
              <div key={i} className="rounded-3xl glass p-4 text-left">
                <div className="text-2xl">{e}</div>
                <div className="mt-1 font-display font-extrabold">{t}</div>
                <div className="text-xs text-muted-foreground">{s}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/talent/dashboard">
              <Button size="lg" className="rounded-full bg-foreground text-background">
                Go to dashboard
              </Button>
            </Link>
            <Link to="/challenges">
              <Button size="lg" variant="outline" className="rounded-full border-2">
                Find more challenges
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
