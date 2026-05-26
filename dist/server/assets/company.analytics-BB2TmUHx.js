import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, C as COMPANY_NAV, a as ChartColumn } from "./nav-F0L5CvbD.js";
import { K as KPI, S as SectionCard } from "./Dash-DWra08bV.js";
import { E as ENGAGEMENT_DATA, i as RSE_DATA, g as CONVERSION_DATA, R as REGION_DATA } from "./mockFr-DOSkJMeA.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { D as Download } from "./download-B0Qa0EDa.js";
import { S as Sparkles } from "./sparkles-C4svRH2K.js";
import { U as Users } from "./users-C9-52kja.js";
import { T as Trophy } from "./trophy-Bh4dMqlN.js";
import { R as ResponsiveContainer, e as Tooltip, d as Legend, B as Bar, C as Cell } from "./generateCategoricalChart-BL4l5GLG.js";
import { a as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, A as Area } from "./AreaChart-C8RWRDTY.js";
import { c as RadarChart, a as PolarGrid, P as PolarAngleAxis, b as PolarRadiusAxis, R as Radar } from "./RadarChart-uo5j7FnY.js";
import { B as BarChart, a as PieChart, P as Pie } from "./PieChart-Bxb-_I85.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BXyXzjDA.js";
import "./building-2-62ZqTlH-.js";
import "./send-BriFhOZj.js";
import "./proxy-BU9HUXss.js";
import "./clsx-DgYk2OaC.js";
const COLORS = ["#FFC604", "#EF897E", "#44B1A8", "#F3B11D", "#F0BDB8", "#9CA3AF"];
function CompanyAnalytics() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Analytique", badge: "Espace entreprise", items: COMPANY_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Vue d'ensemble de la performance de vos défis et de votre recrutement." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "rounded-full border-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-1 h-4 w-4" }),
        " Exporter"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Taux de conversion", value: "4.1%", tint: "primary", delta: "+0.6%", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Score IA moyen", value: "86", tint: "coral", delta: "+2", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Engagement talents", value: "78%", tint: "teal", delta: "+5%", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Succès matchs", value: "92%", tint: "orange", delta: "+4%", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Performance des défis", className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: ENGAGEMENT_DATA, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "a1", x1: "0", x2: "0", y1: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--primary)", stopOpacity: 0.6 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--primary)", stopOpacity: 0 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "a2", x1: "0", x2: "0", y1: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--coral)", stopOpacity: 0.6 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--coral)", stopOpacity: 0 })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", name: "Actifs", dataKey: "actifs", stroke: "var(--primary)", fill: "url(#a1)", strokeWidth: 3 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", name: "Soumissions", dataKey: "soumissions", stroke: "var(--coral)", fill: "url(#a2)", strokeWidth: 3 })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Profil RSE de l'écosystème", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RadarChart, { data: RSE_DATA, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PolarGrid, { stroke: "var(--border)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PolarAngleAxis, { dataKey: "axe", stroke: "var(--muted-foreground)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PolarRadiusAxis, { stroke: "var(--muted-foreground)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Radar, { dataKey: "value", stroke: "var(--teal)", fill: "var(--teal)", fillOpacity: 0.45 })
      ] }) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Entonnoir de conversion", className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: CONVERSION_DATA, layout: "vertical", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--border)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { type: "number", stroke: "var(--muted-foreground)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { dataKey: "etape", type: "category", width: 140, stroke: "var(--muted-foreground)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
          borderRadius: 16,
          border: "1px solid var(--border)",
          background: "var(--card)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "value", radius: [0, 12, 12, 0], fill: "var(--coral)" })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Répartition régionale", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: REGION_DATA, dataKey: "value", nameKey: "region", innerRadius: 50, outerRadius: 90, paddingAngle: 4, children: REGION_DATA.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: COLORS[i % COLORS.length] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
          borderRadius: 16,
          border: "1px solid var(--border)",
          background: "var(--card)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {})
      ] }) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Heatmap engagement (7 derniers jours)", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1 text-[10px] text-muted-foreground", style: {
      gridTemplateColumns: "60px repeat(24, 1fr)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      Array.from({
        length: 24
      }).map((_, h) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: h }, h)),
      ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-1 font-semibold text-foreground", children: d }, `l-${d}`),
        Array.from({
          length: 24
        }).map((_, h) => {
          const v = Math.random();
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded-md", style: {
            background: `color-mix(in oklab, var(--primary) ${Math.round(v * 90)}%, var(--muted))`
          } }, `${d}-${h}`);
        })
      ] }))
    ] }) }) })
  ] });
}
export {
  CompanyAnalytics as component
};
