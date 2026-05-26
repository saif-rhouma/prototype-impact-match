import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { L as Link } from "./router-BXyXzjDA.js";
import { D as DashboardShell, T as TALENT_NAV, b as Compass } from "./nav-F0L5CvbD.js";
import { K as KPI, a as StatusPill, S as SectionCard } from "./Dash-DWra08bV.js";
import { a as CHALLENGES } from "./mock-BcjI2Up7.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent } from "./tabs-C8Wm3esH.js";
import { T as Trophy } from "./trophy-Bh4dMqlN.js";
import { S as Sparkles } from "./sparkles-C4svRH2K.js";
import { C as Clock } from "./clock-DUK_DKs1.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./building-2-62ZqTlH-.js";
import "./users-C9-52kja.js";
import "./send-BriFhOZj.js";
import "./proxy-BU9HUXss.js";
import "./clsx-DgYk2OaC.js";
import "./index-CEDyCZqb.js";
import "./index-DZkrjyUQ.js";
function TalentChallenges() {
  const inProgress = CHALLENGES.slice(0, 4);
  const recommended = CHALLENGES.slice(4);
  const completed = CHALLENGES.slice(0, 2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Mes défis", badge: "Espace talent", items: TALENT_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "En cours", value: "4", tint: "primary", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Terminés", value: "8", tint: "teal", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Score moyen", value: "86", tint: "coral", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Prochaine deadline", value: "30 juin", tint: "orange", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "active", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "active", className: "rounded-full", children: "En cours" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "recommended", className: "rounded-full", children: "Recommandés" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "done", className: "rounded-full", children: "Terminés" })
      ] }),
      [{
        v: "active",
        list: inProgress,
        status: "En cours"
      }, {
        v: "recommended",
        list: recommended,
        status: "Nouveau"
      }, {
        v: "done",
        list: completed,
        status: "Acceptée"
      }].map(({
        v,
        list,
        status
      }) => /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: v, className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: list.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/challenges/$id", params: {
        id: c.id
      }, className: "rounded-3xl border border-border bg-card p-5 shadow-card hover:shadow-soft transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-accent text-2xl", children: c.companyLogo }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-lg font-extrabold leading-snug", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [
          c.company,
          " • ",
          c.category
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1", children: c.skills.slice(0, 3).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold", children: s }, s)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            "📅 ",
            c.deadline
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "rounded-full bg-foreground text-background", children: "Continuer" })
        ] })
      ] }, c.id)) }) }, v))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Opportunités à fort impact", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: CHALLENGES.slice(2, 6).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-2xl border border-border p-3 hover:bg-accent/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-2xl bg-accent text-xl", children: c.companyLogo }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            c.company,
            " • Récompense ",
            c.reward
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/challenges/$id", params: {
        id: c.id
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "rounded-full border-2", children: "Rejoindre" }) })
    ] }, c.id)) }) })
  ] });
}
export {
  TalentChallenges as component
};
