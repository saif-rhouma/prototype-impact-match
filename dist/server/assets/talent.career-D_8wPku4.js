import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, T as TALENT_NAV, B as Briefcase } from "./nav-F0L5CvbD.js";
import { K as KPI, a as StatusPill, S as SectionCard } from "./Dash-DWra08bV.js";
import { c as APPLICATIONS, I as INTERVIEWS } from "./mockFr-DOSkJMeA.js";
import { b as POSITIONS } from "./mock-BcjI2Up7.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent } from "./tabs-C8Wm3esH.js";
import { C as Calendar } from "./calendar-Dg45qUm7.js";
import { B as Bookmark } from "./bookmark-COLZQYNT.js";
import { S as Sparkles } from "./sparkles-C4svRH2K.js";
import { M as MapPin } from "./map-pin-CgFvdgvi.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BXyXzjDA.js";
import "./building-2-62ZqTlH-.js";
import "./users-C9-52kja.js";
import "./send-BriFhOZj.js";
import "./proxy-BU9HUXss.js";
import "./clsx-DgYk2OaC.js";
import "./index-CEDyCZqb.js";
import "./index-DZkrjyUQ.js";
const TIMELINE = [{
  stage: "Envoyée",
  color: "primary"
}, {
  stage: "Vue",
  color: "primary"
}, {
  stage: "Entretien",
  color: "orange"
}, {
  stage: "Finaliste",
  color: "primary"
}, {
  stage: "Acceptée",
  color: "teal"
}];
function TalentCareer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Carrière", badge: "Espace talent", items: TALENT_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Candidatures", value: String(APPLICATIONS.length), tint: "primary", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Entretiens", value: String(INTERVIEWS.length), tint: "orange", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Postes sauvegardés", value: "7", tint: "coral", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Recommandés", value: "12", tint: "teal", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "applications", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "applications", className: "rounded-full", children: "Mes candidatures" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "interviews", className: "rounded-full", children: "Entretiens" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "saved", className: "rounded-full", children: "Sauvegardés" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "recommended", className: "rounded-full", children: "Recommandés" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "applications", className: "mt-5 space-y-3", children: APPLICATIONS.map((a) => {
        const idx = TIMELINE.findIndex((s) => s.stage === a.status);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-5 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-accent text-2xl", children: a.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-extrabold", children: a.position }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  a.company,
                  " • ",
                  a.date
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: a.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-center gap-1", children: TIMELINE.map((s, i) => {
            const active = i <= idx && a.status !== "Refusée";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-7 w-7 place-items-center rounded-full text-[10px] font-extrabold ${active ? "gradient-warm shadow-glow" : "bg-muted text-muted-foreground"}`, children: i + 1 }),
              i < TIMELINE.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-1 flex-1 rounded-full ${active ? "bg-primary" : "bg-border"}` })
            ] }, s.stage);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 grid grid-cols-5 text-[10px] text-muted-foreground", children: TIMELINE.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: s.stage }, s.stage)) })
        ] }, a.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "interviews", className: "mt-5 grid gap-3 md:grid-cols-2", children: INTERVIEWS.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: i.position, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-full bg-accent text-2xl", children: i.avatar }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: i.with }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              i.date,
              " • ",
              i.time,
              " • ",
              i.mode
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "rounded-full bg-foreground text-background", children: "Préparer" })
      ] }) }, i.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "saved", className: "mt-5 grid gap-3 md:grid-cols-2", children: POSITIONS.slice(0, 4).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PositionCard, { p }, p.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "recommended", className: "mt-5 grid gap-3 md:grid-cols-2", children: POSITIONS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(PositionCard, { p }, p.id)) })
    ] })
  ] });
}
function PositionCard({
  p
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-5 shadow-card hover:shadow-soft transition-all", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-accent text-2xl", children: p.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-extrabold", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: p.company })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-full gradient-warm px-2 py-0.5 text-[10px] font-extrabold", children: [
        p.match,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold", children: p.type }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-2.5 w-2.5" }),
        " ",
        p.city
      ] }),
      p.skills.slice(0, 3).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold", children: s }, s))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "flex-1 rounded-full border-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "mr-1 h-3 w-3" }),
        " Sauver"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "flex-1 rounded-full bg-foreground text-background", children: "Postuler" })
    ] })
  ] });
}
export {
  TalentCareer as component
};
