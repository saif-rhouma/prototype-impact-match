import { U as reactExports, L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, T as TALENT_NAV } from "./nav-F0L5CvbD.js";
import { K as KPI } from "./Dash-DWra08bV.js";
import { d as TEAMS } from "./mock-BcjI2Up7.js";
import { T as TEAM_CHAT } from "./mockFr-DOSkJMeA.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { I as Input } from "./input-BnVki95y.js";
import { t as toast } from "./index-CTsKZJB0.js";
import { U as Users } from "./users-C9-52kja.js";
import { c as createLucideIcon, S as Sparkles } from "./sparkles-C4svRH2K.js";
import { S as Send } from "./send-BriFhOZj.js";
import { T as Trophy } from "./trophy-Bh4dMqlN.js";
import { P as Plus } from "./plus--Q_8G3ny.js";
import { F as FileText } from "./file-text-BiInxENP.js";
import { P as Paperclip } from "./paperclip-B6t1W0hx.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BXyXzjDA.js";
import "./building-2-62ZqTlH-.js";
import "./proxy-BU9HUXss.js";
import "./clsx-DgYk2OaC.js";
const __iconNode = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
];
const Hash = createLucideIcon("hash", __iconNode);
function TalentTeams() {
  const [sel, setSel] = reactExports.useState(TEAMS[0].id);
  const [text, setText] = reactExports.useState("");
  const team = TEAMS.find((t) => t.id === sel);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Mes équipes", badge: "Espace talent", items: TALENT_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Équipes actives", value: String(TEAMS.length), tint: "primary", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Score compatibilité", value: "93%", tint: "coral", delta: "+5%", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Soumissions équipe", value: "7", tint: "teal", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Victoires", value: "2", tint: "orange", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-[280px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-2 py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Mes équipes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-7 w-7 rounded-full", onClick: () => toast.success("Nouvelle équipe créée"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1", children: TEAMS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSel(t.id), className: `flex w-full items-center gap-2 rounded-2xl p-2 text-left transition-all ${sel === t.id ? "bg-accent" : "hover:bg-accent/50"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-2xl bg-muted text-lg", children: t.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-semibold", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "truncate text-[11px] text-muted-foreground", children: [
              t.members.length,
              " membres"
            ] })
          ] })
        ] }) }, t.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col rounded-3xl border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-border p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl gradient-warm text-2xl shadow-glow", children: team.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-extrabold", children: team.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              "Défi : ",
              team.challenge
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-full gradient-warm px-3 py-1 text-xs font-extrabold", children: [
            team.match,
            "% fit"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 border-b border-border p-4 lg:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Membres" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1", children: team.members.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-full bg-accent text-base", children: m.avatar }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold leading-tight", children: m.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: m.role })
              ] })
            ] }, m.name)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Canaux" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1 text-sm", children: ["général", "design", "tech", "deck"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-accent/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "h-3 w-3 text-muted-foreground" }),
              " ",
              c
            ] }, c)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Fichiers partagés" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1 text-sm", children: ["moodboard-v3.fig", "lca-data.xlsx", "deck-final.pdf"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-accent/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3 w-3 text-coral" }),
              " ",
              f
            ] }, f)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 space-y-3 overflow-y-auto p-4 min-h-[280px]", children: TEAM_CHAT.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-end gap-2 ${m.mine ? "justify-end" : ""}`, children: [
          !m.mine && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-full bg-accent text-base", children: m.avatar }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[70%] rounded-3xl px-4 py-2 ${m.mine ? "gradient-warm text-foreground" : "bg-muted"}`, children: [
            !m.mine && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold opacity-70", children: m.user }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: m.msg }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[10px] opacity-70", children: m.time })
          ] })
        ] }, m.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          if (!text.trim()) return;
          toast.success("Message envoyé à l'équipe");
          setText("");
        }, className: "flex items-center gap-2 border-t border-border p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", size: "icon", variant: "ghost", className: "rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: text, onChange: (e) => setText(e.target.value), placeholder: `Écrire dans #général…`, className: "rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "rounded-full bg-foreground text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  TalentTeams as component
};
