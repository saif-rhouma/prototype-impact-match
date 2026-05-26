import { U as reactExports, L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { L as Link } from "./router-BXyXzjDA.js";
import { D as DashboardShell, C as COMPANY_NAV, M as Megaphone } from "./nav-F0L5CvbD.js";
import { K as KPI, a as StatusPill, S as SectionCard } from "./Dash-DWra08bV.js";
import { e as COMPANY_CHALLENGES, d as CHALLENGE_STATUSES } from "./mockFr-DOSkJMeA.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { I as Input } from "./input-BnVki95y.js";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent } from "./tabs-C8Wm3esH.js";
import { S as Send } from "./send-BriFhOZj.js";
import { T as Trophy } from "./trophy-Bh4dMqlN.js";
import { C as Calendar } from "./calendar-Dg45qUm7.js";
import { S as Search } from "./search-B9ReI4BR.js";
import { P as Plus } from "./plus--Q_8G3ny.js";
import { m as motion } from "./proxy-BU9HUXss.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./sparkles-C4svRH2K.js";
import "./building-2-62ZqTlH-.js";
import "./users-C9-52kja.js";
import "./clsx-DgYk2OaC.js";
import "./index-CEDyCZqb.js";
import "./index-DZkrjyUQ.js";
function CompanyChallenges() {
  const [q, setQ] = reactExports.useState("");
  const items = COMPANY_CHALLENGES.filter((c) => c.title.toLowerCase().includes(q.toLowerCase()));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Mes défis", badge: "Espace entreprise", items: COMPANY_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Défis publiés", value: "6", tint: "primary", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Soumissions totales", value: "172", tint: "coral", delta: "+18%", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Matchs trouvés", value: "3", tint: "teal", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Prochaine deadline", value: "30 juin", tint: "orange", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[240px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Rechercher un défi…", className: "rounded-full pl-9" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company/onboarding", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "rounded-full gradient-warm font-bold text-foreground shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
        " Créer un défi"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "kanban", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "kanban", className: "rounded-full", children: "Kanban" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "table", className: "rounded-full", children: "Tableau" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "calendar", className: "rounded-full", children: "Calendrier" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "kanban", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 overflow-x-auto pb-2", style: {
        gridTemplateColumns: `repeat(${CHALLENGE_STATUSES.length}, minmax(260px, 1fr))`
      }, children: CHALLENGE_STATUSES.map((status) => {
        const col = items.filter((c) => c.status === status);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-muted/30 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between px-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: col.length })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            col.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
              opacity: 0,
              y: 6
            }, animate: {
              opacity: 1,
              y: 0
            }, transition: {
              delay: i * 0.05
            }, className: "cursor-grab rounded-2xl border border-border bg-card p-3 shadow-card hover:shadow-soft transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/company/challenges/$id", params: {
              id: c.id
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold leading-snug", children: c.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: c.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  "📅 ",
                  c.deadline
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-coral", children: [
                  c.submissions,
                  " sol."
                ] })
              ] })
            ] }) }, c.id)),
            col.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-dashed border-border p-4 text-center text-xs text-muted-foreground", children: "Aucun défi" })
          ] })
        ] }, status);
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "table", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Tous les défis", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3", children: "Défi" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Catégorie" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Statut" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Soumissions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Équipes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Échéance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", {})
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: items.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0 hover:bg-accent/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 font-semibold", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: c.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: c.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-bold", children: c.submissions }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", children: c.teams }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: c.deadline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company/challenges/$id", params: {
            id: c.id
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "rounded-full", children: "Ouvrir" }) }) })
        ] }, c.id)) })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "calendar", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Calendrier des échéances", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 md:grid-cols-2 lg:grid-cols-3", children: items.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-coral", children: c.deadline }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-semibold", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: c.status }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            c.submissions,
            " sol."
          ] })
        ] })
      ] }, c.id)) }) }) })
    ] })
  ] });
}
export {
  CompanyChallenges as component
};
