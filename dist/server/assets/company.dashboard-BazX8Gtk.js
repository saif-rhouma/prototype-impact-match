import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { L as Link } from "./router-BXyXzjDA.js";
import { D as DashboardShell, C as COMPANY_NAV, M as Megaphone } from "./nav-F0L5CvbD.js";
import { K as KPI, S as SectionCard, a as StatusPill } from "./Dash-DWra08bV.js";
import { E as ENGAGEMENT_DATA, N as NOTIFICATIONS, e as COMPANY_CHALLENGES, C as CANDIDATES, S as SUBMISSIONS, I as INTERVIEWS, A as ACTIVITY } from "./mockFr-DOSkJMeA.js";
import { a as CHALLENGES } from "./mock-BcjI2Up7.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { P as Plus } from "./plus--Q_8G3ny.js";
import { c as createLucideIcon, S as Sparkles } from "./sparkles-C4svRH2K.js";
import { T as Trophy } from "./trophy-Bh4dMqlN.js";
import { U as Users } from "./users-C9-52kja.js";
import { C as Clock } from "./clock-DUK_DKs1.js";
import { R as ResponsiveContainer, e as Tooltip } from "./generateCategoricalChart-BL4l5GLG.js";
import { a as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, A as Area } from "./AreaChart-C8RWRDTY.js";
import { m as motion } from "./proxy-BU9HUXss.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./building-2-62ZqTlH-.js";
import "./send-BriFhOZj.js";
import "./clsx-DgYk2OaC.js";
const __iconNode = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode);
function CompanyDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Tableau de bord — Verda Foods", badge: "Espace entreprise", items: COMPANY_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Bienvenue Camille 👋 Voici l'activité de votre écosystème impact." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company/challenges", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "rounded-full gradient-warm text-foreground font-bold shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
        " Créer un défi"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Défis actifs", value: "4", tint: "primary", delta: "+1", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Solutions reçues", value: "128", tint: "coral", delta: "+24%", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Talents recrutés", value: "9", tint: "teal", delta: "+3", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Matchs réalisés", value: "17", tint: "orange", delta: "+5", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Taux d'engagement", value: "82%", tint: "teal", delta: "+6%", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Réponse moyenne", value: "3.2h", tint: "coral", delta: "-12%", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Activité des soumissions", className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: ENGAGEMENT_DATA, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "cg1", x1: "0", x2: "0", y1: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--coral)", stopOpacity: 0.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--coral)", stopOpacity: 0 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "cg2", x1: "0", x2: "0", y1: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--primary)", stopOpacity: 0.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--primary)", stopOpacity: 0 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--border)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "jour", stroke: "var(--muted-foreground)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--muted-foreground)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
          borderRadius: 16,
          border: "1px solid var(--border)",
          background: "var(--card)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", name: "Soumissions", dataKey: "soumissions", stroke: "var(--coral)", fill: "url(#cg1)", strokeWidth: 3 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", name: "Actifs", dataKey: "actifs", stroke: "var(--primary)", fill: "url(#cg2)", strokeWidth: 3 })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Notifications récentes", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "rounded-full", children: "Tout voir" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: NOTIFICATIONS.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 rounded-2xl border border-border p-3 hover:bg-accent transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 h-2 w-2 shrink-0 rounded-full", style: {
          background: `var(--${n.tint})`
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: n.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs text-muted-foreground", children: n.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] text-muted-foreground", children: n.time })
        ] })
      ] }, n.id)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Défis récents", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company/challenges", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", className: "rounded-full", children: "Gérer" }) }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: COMPANY_CHALLENGES.slice(0, 4).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-2xl border border-border p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate font-semibold", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            c.category,
            " • ",
            c.submissions,
            " soumissions • ",
            c.deadline
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: c.status })
      ] }, c.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Talents recommandés", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company/candidates", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "rounded-full", children: "Voir tout" }) }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: CANDIDATES.slice(0, 4).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-2xl border border-border p-3 hover:bg-accent transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-full bg-accent text-xl", children: c.avatar }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: c.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              c.role,
              " • ",
              c.city
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-full gradient-warm px-3 py-1 text-xs font-extrabold", children: [
          c.score,
          "%"
        ] })
      ] }, c.id)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Solutions prometteuses", className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: SUBMISSIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-2xl border border-border p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-2xl bg-accent text-xl", children: s.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: s.team }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              s.challenge,
              " • ",
              s.date
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-extrabold text-teal", children: s.score }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", children: "score" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: s.status })
        ] })
      ] }, s.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Pipeline recrutement", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ["Nouveau", "Présélection", "Entretien", "Finaliste", "Recruté"].map((stage, i) => {
        const count = [12, 8, 5, 3, 2][i];
        const pct = [100, 70, 45, 28, 18][i];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: stage }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: count })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-2 overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            width: 0
          }, animate: {
            width: `${pct}%`
          }, transition: {
            duration: 0.8,
            delay: i * 0.1
          }, className: "h-full gradient-warm" }) })
        ] }, stage);
      }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Calendrier des entretiens", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "rounded-full", children: "Planifier" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: INTERVIEWS.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-2xl border border-border p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-full bg-accent text-xl", children: i.avatar }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: i.with }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: i.position })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: i.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground", children: [
            i.time,
            " • ",
            i.mode
          ] })
        ] })
      ] }, i.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Flux d'activité", action: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-bold uppercase text-teal", children: "Live" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: ACTIVITY.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
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
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden", children: CHALLENGES.length })
  ] });
}
export {
  CompanyDashboard as component
};
