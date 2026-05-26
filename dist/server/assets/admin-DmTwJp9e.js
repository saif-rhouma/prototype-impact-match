import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, A as ADMIN_NAV, M as Megaphone, B as Briefcase } from "./nav-F0L5CvbD.js";
import { K as KPI, S as SectionCard, a as StatusPill } from "./Dash-DWra08bV.js";
import { G as GROWTH_DATA, i as RSE_DATA, h as MODERATION, A as ACTIVITY } from "./mockFr-DOSkJMeA.js";
import { B as Building2 } from "./building-2-62ZqTlH-.js";
import { U as Users } from "./users-C9-52kja.js";
import { T as Trophy } from "./trophy-Bh4dMqlN.js";
import { T as TriangleAlert } from "./triangle-alert-B4ixyh1w.js";
import { R as ResponsiveContainer, e as Tooltip, d as Legend } from "./generateCategoricalChart-BL4l5GLG.js";
import { a as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, A as Area } from "./AreaChart-C8RWRDTY.js";
import { c as RadarChart, a as PolarGrid, P as PolarAngleAxis, R as Radar } from "./RadarChart-uo5j7FnY.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BXyXzjDA.js";
import "./sparkles-C4svRH2K.js";
import "./send-BriFhOZj.js";
import "./proxy-BU9HUXss.js";
import "./clsx-DgYk2OaC.js";
function AdminDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Centre de contrôle", badge: "Espace admin", items: ADMIN_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Entreprises validées", value: "320", tint: "primary", delta: "+18", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Défis actifs", value: "86", tint: "coral", delta: "+12", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Jeunes inscrits", value: "18.5k", tint: "teal", delta: "+5.3k", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Matchs réalisés", value: "96", tint: "orange", delta: "+24", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Recrutements", value: "760", tint: "teal", delta: "+96", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Signalements", value: "14", tint: "coral", delta: "-3", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Croissance de l'écosystème", className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: GROWTH_DATA, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "ag1", x1: "0", x2: "0", y1: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--primary)", stopOpacity: 0.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--primary)", stopOpacity: 0 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "ag2", x1: "0", x2: "0", y1: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--coral)", stopOpacity: 0.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--coral)", stopOpacity: 0 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "ag3", x1: "0", x2: "0", y1: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--teal)", stopOpacity: 0.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--teal)", stopOpacity: 0 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--border)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "mois", stroke: "var(--muted-foreground)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--muted-foreground)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
          borderRadius: 16,
          border: "1px solid var(--border)",
          background: "var(--card)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", name: "Talents", dataKey: "talents", stroke: "var(--teal)", fill: "url(#ag3)", strokeWidth: 3 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", name: "Entreprises", dataKey: "entreprises", stroke: "var(--primary)", fill: "url(#ag1)", strokeWidth: 3 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", name: "Matchs", dataKey: "matchs", stroke: "var(--coral)", fill: "url(#ag2)", strokeWidth: 3 })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Impact RSE global", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RadarChart, { data: RSE_DATA, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PolarGrid, { stroke: "var(--border)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PolarAngleAxis, { dataKey: "axe", stroke: "var(--muted-foreground)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Radar, { dataKey: "value", stroke: "var(--coral)", fill: "var(--coral)", fillOpacity: 0.4 })
      ] }) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Modération récente", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: MODERATION.slice(0, 4).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start justify-between gap-3 rounded-2xl border border-border p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: m.level }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: m.type })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-semibold", children: m.target }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: m.reason })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: m.status })
      ] }, m.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Activité plateforme", action: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-bold uppercase text-teal", children: "Live" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: ACTIVITY.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
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
  AdminDashboard as component
};
