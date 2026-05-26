import { U as reactExports, L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, C as COMPANY_NAV } from "./nav-F0L5CvbD.js";
import { K as KPI, S as SectionCard } from "./Dash-DWra08bV.js";
import { C as CANDIDATES } from "./mockFr-DOSkJMeA.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { I as Input } from "./input-BnVki95y.js";
import { U as Users } from "./users-C9-52kja.js";
import { c as createLucideIcon, S as Sparkles } from "./sparkles-C4svRH2K.js";
import { B as Bookmark } from "./bookmark-COLZQYNT.js";
import { T as Trophy } from "./trophy-Bh4dMqlN.js";
import { S as Search } from "./search-B9ReI4BR.js";
import { m as motion } from "./proxy-BU9HUXss.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BXyXzjDA.js";
import "./building-2-62ZqTlH-.js";
import "./send-BriFhOZj.js";
import "./clsx-DgYk2OaC.js";
const __iconNode = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode);
const ALL_SKILLS = Array.from(new Set(CANDIDATES.flatMap((c) => c.skills)));
function CompanyCandidates() {
  const [q, setQ] = reactExports.useState("");
  const [skill, setSkill] = reactExports.useState(null);
  const items = CANDIDATES.filter((c) => (c.name + c.role + c.city).toLowerCase().includes(q.toLowerCase()) && (!skill || c.skills.includes(skill)));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Talents", badge: "Espace entreprise", items: COMPANY_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Profils découverts", value: "184", tint: "primary", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Score moyen IA", value: "86%", tint: "coral", delta: "+3%", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Profils sauvegardés", value: "22", tint: "teal", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Recrutés ce mois", value: "3", tint: "orange", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[240px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Rechercher un talent par nom, rôle, ville…", className: "rounded-full pl-9" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "rounded-full border-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "mr-1 h-4 w-4" }),
        " Filtres"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSkill(null), className: `rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${!skill ? "bg-foreground text-background" : "bg-muted hover:bg-accent"}`, children: "Toutes compétences" }),
      ALL_SKILLS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSkill(s === skill ? null : s), className: `rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${skill === s ? "bg-foreground text-background" : "bg-muted hover:bg-accent"}`, children: s }, s))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: items.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 8
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: i * 0.04
    }, className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-card hover:shadow-soft transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-28 w-28 rounded-full gradient-cool opacity-25 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-14 w-14 place-items-center rounded-2xl bg-accent text-3xl", children: c.avatar }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-extrabold", children: c.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                c.role,
                " • ",
                c.city
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-full gradient-warm px-3 py-1 text-xs font-extrabold shadow-glow", children: [
            c.score,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1", children: c.skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold", children: s }, s)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-3 gap-2 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { k: "Défis", v: String(c.challenges) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { k: "Badges", v: String(c.badges.length) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { k: "Dispo", v: c.availability })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "flex-1 rounded-full border-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "mr-1 h-3 w-3" }),
            " Sauver"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "flex-1 rounded-full bg-foreground text-background", children: "Contacter" })
        ] })
      ] })
    ] }, c.id)) }),
    items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Aucun résultat", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Essayez d'élargir vos filtres ou de modifier votre recherche." }) })
  ] });
}
function Cell({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted/40 p-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold", children: v })
  ] });
}
export {
  CompanyCandidates as component
};
