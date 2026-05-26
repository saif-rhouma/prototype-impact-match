import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, A as ADMIN_NAV } from "./nav-F0L5CvbD.js";
import { K as KPI, S as SectionCard } from "./Dash-DWra08bV.js";
import { G as GROWTH_DATA, i as RSE_DATA, g as CONVERSION_DATA, R as REGION_DATA, E as ENGAGEMENT_DATA } from "./mockFr-DOSkJMeA.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { D as Download } from "./download-B0Qa0EDa.js";
import { c as createLucideIcon, S as Sparkles } from "./sparkles-C4svRH2K.js";
import { T as Trophy } from "./trophy-Bh4dMqlN.js";
import { U as Users } from "./users-C9-52kja.js";
import { R as ResponsiveContainer, e as Tooltip, d as Legend, B as Bar, C as Cell } from "./generateCategoricalChart-BL4l5GLG.js";
import { a as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, A as Area } from "./AreaChart-C8RWRDTY.js";
import { c as RadarChart, a as PolarGrid, P as PolarAngleAxis, R as Radar } from "./RadarChart-uo5j7FnY.js";
import { B as BarChart, a as PieChart, P as Pie } from "./PieChart-Bxb-_I85.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BXyXzjDA.js";
import "./building-2-62ZqTlH-.js";
import "./send-BriFhOZj.js";
import "./proxy-BU9HUXss.js";
import "./clsx-DgYk2OaC.js";
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
const COLORS = ["#FFC604", "#EF897E", "#44B1A8", "#F3B11D", "#F0BDB8", "#9CA3AF"];
function AdminAnalytics() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Analytique exécutive", badge: "Espace admin", items: ADMIN_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Métriques d'adoption, d'impact et de réussite de la plateforme." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "rounded-full border-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-1 h-4 w-4" }),
        " Exporter le rapport"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Adoption mensuelle", value: "+18%", tint: "primary", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Collaborations réussies", value: "142", tint: "coral", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Taux de recrutement", value: "42%", tint: "teal", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Utilisateurs actifs", value: "12.4k", tint: "orange", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Croissance multi-axes", className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: GROWTH_DATA, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--border)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "mois", stroke: "var(--muted-foreground)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--muted-foreground)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
          borderRadius: 16,
          border: "1px solid var(--border)",
          background: "var(--card)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", name: "Talents", dataKey: "talents", stroke: "var(--teal)", fill: "var(--teal)", fillOpacity: 0.35, strokeWidth: 3 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", name: "Entreprises", dataKey: "entreprises", stroke: "var(--primary)", fill: "var(--primary)", fillOpacity: 0.35, strokeWidth: 3 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", name: "Matchs", dataKey: "matchs", stroke: "var(--coral)", fill: "var(--coral)", fillOpacity: 0.35, strokeWidth: 3 })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Impact RSE", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RadarChart, { data: RSE_DATA, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PolarGrid, { stroke: "var(--border)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PolarAngleAxis, { dataKey: "axe", stroke: "var(--muted-foreground)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Radar, { dataKey: "value", stroke: "var(--teal)", fill: "var(--teal)", fillOpacity: 0.45 })
      ] }) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Entonnoir d'adoption", className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: CONVERSION_DATA, layout: "vertical", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--border)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { type: "number", stroke: "var(--muted-foreground)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { dataKey: "etape", type: "category", width: 140, stroke: "var(--muted-foreground)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
          borderRadius: 16,
          border: "1px solid var(--border)",
          background: "var(--card)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "value", radius: [0, 12, 12, 0], fill: "var(--primary)" })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Activité par région", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: REGION_DATA, dataKey: "value", nameKey: "region", innerRadius: 50, outerRadius: 90, paddingAngle: 4, children: REGION_DATA.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: COLORS[i % COLORS.length] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
          borderRadius: 16,
          border: "1px solid var(--border)",
          background: "var(--card)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {})
      ] }) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Engagement hebdomadaire", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: ENGAGEMENT_DATA, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--border)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "jour", stroke: "var(--muted-foreground)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "var(--muted-foreground)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
        borderRadius: 16,
        border: "1px solid var(--border)",
        background: "var(--card)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "actifs", name: "Utilisateurs actifs", radius: [12, 12, 0, 0], fill: "var(--primary)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "soumissions", name: "Soumissions", radius: [12, 12, 0, 0], fill: "var(--coral)" })
    ] }) }) }) })
  ] });
}
export {
  AdminAnalytics as component
};
