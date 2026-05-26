import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { TALENT_NAV } from "@/lib/nav";
import { MESSAGES, TEAM_CHAT } from "@/lib/mockFr";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Send, Paperclip } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/talent/messages")({ component: TalentMessages });

function TalentMessages() {
  const [sel, setSel] = useState(MESSAGES[0].id);
  const [text, setText] = useState("");
  const active = MESSAGES.find((m) => m.id === sel)!;
  return (
    <DashboardShell title="Messages" badge="Espace talent" items={TALENT_NAV}>
      <div className="grid h-[calc(100vh-180px)] gap-4 md:grid-cols-[320px_1fr]">
        <div className="flex flex-col rounded-3xl border border-border bg-card p-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Rechercher…" className="rounded-full pl-9" />
          </div>
          <ul className="mt-3 flex-1 space-y-1 overflow-y-auto">
            {MESSAGES.map((m) => (
              <li key={m.id}>
                <button
                  onClick={() => setSel(m.id)}
                  className={`flex w-full items-center gap-3 rounded-2xl p-2 text-left transition-all ${sel === m.id ? "bg-accent" : "hover:bg-accent/50"}`}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-xl">
                    {m.avatar}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <div className="truncate text-sm font-semibold">{m.from}</div>
                      <div className="text-[10px] text-muted-foreground">{m.time}</div>
                    </div>
                    <div className="truncate text-xs text-muted-foreground">{m.preview}</div>
                  </div>
                  {m.unread && <span className="h-2 w-2 rounded-full bg-coral" />}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col rounded-3xl border border-border bg-card">
          <div className="flex items-center gap-3 border-b border-border p-4">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-xl">
              {active.avatar}
            </span>
            <div className="flex-1">
              <div className="font-semibold">{active.from}</div>
              <div className="text-xs text-teal">En ligne</div>
            </div>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {TEAM_CHAT.map((t) => (
              <div key={t.id} className={`flex items-end gap-2 ${t.mine ? "justify-end" : ""}`}>
                {!t.mine && (
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-base">
                    {t.avatar}
                  </span>
                )}
                <div
                  className={`max-w-[70%] rounded-3xl px-4 py-2 ${t.mine ? "gradient-warm text-foreground" : "bg-muted"}`}
                >
                  <div className="text-sm">{t.msg}</div>
                  <div className="mt-0.5 text-[10px] opacity-70">{t.time}</div>
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!text.trim()) return;
              toast.success("Message envoyé");
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
              placeholder="Écrire un message…"
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
