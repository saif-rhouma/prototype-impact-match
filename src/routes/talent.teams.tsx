import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { TALENT_NAV } from "@/lib/nav";
import { SectionCard, KPI } from "@/components/site/Dash";
import { TEAMS } from "@/lib/mock";
import { TEAM_CHAT } from "@/lib/mockFr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Send, Users, Paperclip, FileText, Hash, Sparkles, Trophy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/talent/teams")({ component: TalentTeams });

function TalentTeams() {
  const [sel, setSel] = useState(TEAMS[0].id);
  const [text, setText] = useState("");
  const team = TEAMS.find((t) => t.id === sel)!;

  return (
    <DashboardShell title="Mes équipes" badge="Espace talent" items={TALENT_NAV}>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI
          label="Équipes actives"
          value={String(TEAMS.length)}
          tint="primary"
          icon={<Users className="h-4 w-4" />}
        />
        <KPI
          label="Score compatibilité"
          value="93%"
          tint="coral"
          delta="+5%"
          icon={<Sparkles className="h-4 w-4" />}
        />
        <KPI label="Soumissions équipe" value="7" tint="teal" icon={<Send className="h-4 w-4" />} />
        <KPI label="Victoires" value="2" tint="orange" icon={<Trophy className="h-4 w-4" />} />
      </div>

      <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
        <div className="rounded-3xl border border-border bg-card p-3">
          <div className="flex items-center justify-between px-2 py-1">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Mes équipes
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7 rounded-full"
              onClick={() => toast.success("Nouvelle équipe créée")}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <ul className="mt-2 space-y-1">
            {TEAMS.map((t) => (
              <li key={t.id}>
                <button
                  onClick={() => setSel(t.id)}
                  className={`flex w-full items-center gap-2 rounded-2xl p-2 text-left transition-all ${sel === t.id ? "bg-accent" : "hover:bg-accent/50"}`}
                >
                  <span className="grid h-9 w-9 place-items-center rounded-2xl bg-muted text-lg">
                    {t.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold">{t.name}</div>
                    <div className="truncate text-[11px] text-muted-foreground">
                      {t.members.length} membres
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col rounded-3xl border border-border bg-card">
          <div className="flex items-center gap-3 border-b border-border p-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl gradient-warm text-2xl shadow-glow">
              {team.emoji}
            </span>
            <div className="flex-1">
              <div className="font-display text-lg font-extrabold">{team.name}</div>
              <div className="text-xs text-muted-foreground">Défi : {team.challenge}</div>
            </div>
            <div className="rounded-full gradient-warm px-3 py-1 text-xs font-extrabold">
              {team.match}% fit
            </div>
          </div>

          <div className="grid gap-4 border-b border-border p-4 lg:grid-cols-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Membres
              </div>
              <ul className="mt-2 space-y-1">
                {team.members.map((m) => (
                  <li key={m.name} className="flex items-center gap-2 text-sm">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-base">
                      {m.avatar}
                    </span>
                    <div>
                      <div className="font-semibold leading-tight">{m.name}</div>
                      <div className="text-[10px] text-muted-foreground">{m.role}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Canaux
              </div>
              <ul className="mt-2 space-y-1 text-sm">
                {["général", "design", "tech", "deck"].map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-accent/50"
                  >
                    <Hash className="h-3 w-3 text-muted-foreground" /> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Fichiers partagés
              </div>
              <ul className="mt-2 space-y-1 text-sm">
                {["moodboard-v3.fig", "lca-data.xlsx", "deck-final.pdf"].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-accent/50"
                  >
                    <FileText className="h-3 w-3 text-coral" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4 min-h-[280px]">
            {TEAM_CHAT.map((m) => (
              <div key={m.id} className={`flex items-end gap-2 ${m.mine ? "justify-end" : ""}`}>
                {!m.mine && (
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-base">
                    {m.avatar}
                  </span>
                )}
                <div
                  className={`max-w-[70%] rounded-3xl px-4 py-2 ${m.mine ? "gradient-warm text-foreground" : "bg-muted"}`}
                >
                  {!m.mine && <div className="text-[10px] font-bold opacity-70">{m.user}</div>}
                  <div className="text-sm">{m.msg}</div>
                  <div className="mt-0.5 text-[10px] opacity-70">{m.time}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!text.trim()) return;
              toast.success("Message envoyé à l'équipe");
              setText("");
            }}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <Button type="button" size="icon" variant="ghost" className="rounded-full">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={`Écrire dans #général…`}
              className="rounded-full"
            />
            <Button type="submit" className="rounded-full bg-foreground text-background">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </DashboardShell>
  );
}
