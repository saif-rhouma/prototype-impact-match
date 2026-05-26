import { Link } from "@tanstack/react-router";
import type { Challenge } from "@/lib/mock";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function ChallengeCard({ c }: { c: Challenge }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-card hover:shadow-soft"
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full gradient-cool opacity-20 blur-2xl transition-opacity group-hover:opacity-40" />
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-2xl">
            {c.companyLogo}
          </div>
          <div>
            <div className="text-xs text-muted-foreground">{c.company}</div>
            <div className="font-display text-base font-bold leading-tight">{c.title}</div>
          </div>
        </div>
        {c.trending && (
          <Badge className="rounded-full bg-coral text-coral-foreground hover:bg-coral">
            🔥 Trending
          </Badge>
        )}
      </div>
      <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{c.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        <Badge variant="outline" className="rounded-full border-teal/30 bg-teal/10 text-foreground">
          {c.category}
        </Badge>
        <Badge variant="outline" className="rounded-full">
          {c.difficulty}
        </Badge>
        {c.recruiting && (
          <Badge className="rounded-full bg-primary text-primary-foreground hover:bg-primary">
            Recruiting
          </Badge>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" /> {c.deadline}
        </span>
        <span className="inline-flex items-center gap-1">
          <Trophy className="h-3.5 w-3.5 text-orange" /> {c.reward}
        </span>
        <span className="inline-flex items-center gap-1">
          <Users className="h-3.5 w-3.5" /> Teams
        </span>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex -space-x-2">
          {["👩🏻‍🎨", "👨🏽‍💻", "🧑🏿‍🔬"].map((a, i) => (
            <div
              key={i}
              className="grid h-7 w-7 place-items-center rounded-full border-2 border-card bg-muted text-sm"
            >
              {a}
            </div>
          ))}
        </div>
        <Link
          to="/challenges/$id"
          params={{ id: c.id }}
          className="inline-flex items-center gap-1 rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold text-background transition-transform group-hover:translate-x-0.5"
        >
          Open <Sparkles className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}
