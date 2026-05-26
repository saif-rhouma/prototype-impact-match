import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { L as Link } from "./router-BXyXzjDA.js";
import { D as DashboardShell, T as TALENT_NAV, b as Compass } from "./nav-F0L5CvbD.js";
import { K as KPI, S as SectionCard, a as StatusPill } from "./Dash-DWra08bV.js";
import { c as APPLICATIONS, I as INTERVIEWS, A as ACTIVITY } from "./mockFr-DOSkJMeA.js";
import { a as CHALLENGES, d as TEAMS } from "./mock-BcjI2Up7.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { F as Flame } from "./flame-l5GDaLP2.js";
import { m as motion } from "./proxy-BU9HUXss.js";
import { S as Send } from "./send-BriFhOZj.js";
import { S as Sparkles } from "./sparkles-C4svRH2K.js";
import { C as Calendar } from "./calendar-Dg45qUm7.js";
import { T as Trophy } from "./trophy-Bh4dMqlN.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./building-2-62ZqTlH-.js";
import "./users-C9-52kja.js";
import "./clsx-DgYk2OaC.js";
function TalentDashboard() {
  const completion = 82;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Tableau de bord", badge: "Espace talent — Amélie L.", items: TALENT_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 -top-20 h-64 w-64 rounded-full gradient-warm opacity-30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-wrap items-center justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-coral", children: "Salut Amélie 👋" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-extrabold", children: [
            "Tu es sur une série de 12 jours ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "inline h-6 w-6 text-orange" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "3 nouvelles opportunités matchent ton profil cette semaine." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/talent/challenges", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "rounded-full bg-foreground text-background", children: "Voir mes défis" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/challenges", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "rounded-full border-2", children: "Explorer" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid h-32 w-32 place-items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0", viewBox: "0 0 100 100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "44", stroke: "var(--muted)", strokeWidth: "10", fill: "none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.circle, { cx: "50", cy: "50", r: "44", stroke: "var(--primary)", strokeWidth: "10", fill: "none", strokeLinecap: "round", transform: "rotate(-90 50 50)", strokeDasharray: `${2 * Math.PI * 44}`, initial: {
              strokeDashoffset: 2 * Math.PI * 44
            }, animate: {
              strokeDashoffset: 2 * Math.PI * 44 * (1 - completion / 100)
            }, transition: {
              duration: 1.2
            } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl font-extrabold", children: [
              completion,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", children: "profil" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Défis rejoints", value: "6", tint: "primary", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Soumissions envoyées", value: "4", tint: "coral", delta: "+2", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Matchs obtenus", value: "2", tint: "teal", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Entretiens", value: "3", tint: "orange", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Score profil", value: "91", tint: "teal", delta: "+4", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Mes défis en cours", className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: CHALLENGES.slice(0, 4).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/challenges/$id", params: {
        id: c.id
      }, className: "flex items-center justify-between rounded-2xl border border-border p-3 hover:bg-accent/50 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-2xl bg-accent text-xl", children: c.companyLogo }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              c.company,
              " • ",
              c.category
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-teal text-teal-foreground px-2 py-0.5 text-[10px] font-bold", children: "En cours" })
      ] }) }, c.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Badges & gamification", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [{
        e: "🏆",
        l: "Top 1%"
      }, {
        e: "🔥",
        l: "Streak 12j"
      }, {
        e: "🤝",
        l: "Team player"
      }, {
        e: "🌱",
        l: "Eco hero"
      }, {
        e: "⭐",
        l: "Reviewer"
      }, {
        e: "🎯",
        l: "First win"
      }].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        scale: 0.8,
        opacity: 0
      }, animate: {
        scale: 1,
        opacity: 1
      }, transition: {
        delay: i * 0.06
      }, className: "grid place-items-center rounded-2xl border border-border bg-card p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: b.e }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] font-semibold", children: b.l })
      ] }, b.l)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Mes candidatures", className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: APPLICATIONS.slice(0, 5).map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-2xl border border-border p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-2xl bg-accent text-xl", children: a.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: a.position }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              a.company,
              " • ",
              a.date
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: a.status })
      ] }, a.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Prochains entretiens", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: INTERVIEWS.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-2xl border border-border p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase text-coral", children: i.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: i.position }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
          i.time,
          " • ",
          i.mode
        ] })
      ] }, i.id)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Mes équipes", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: TEAMS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-2xl border border-border p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-2xl bg-accent text-xl", children: t.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.challenge })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-full gradient-warm px-2 py-0.5 text-[10px] font-extrabold", children: [
          t.match,
          "%"
        ] })
      ] }, t.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Activité récente", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: ACTIVITY.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-base", children: a.avatar }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: a.who }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: a.action }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: a.target }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: a.time })
        ] })
      ] }, a.id)) }) })
    ] })
  ] });
}
export {
  TalentDashboard as component
};
