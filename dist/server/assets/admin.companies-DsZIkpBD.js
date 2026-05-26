import { U as reactExports, L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, A as ADMIN_NAV } from "./nav-F0L5CvbD.js";
import { K as KPI, S as SectionCard, a as StatusPill } from "./Dash-DWra08bV.js";
import { a as ADMIN_COMPANIES } from "./mockFr-DOSkJMeA.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { I as Input } from "./input-BnVki95y.js";
import { t as toast } from "./index-CTsKZJB0.js";
import { B as Building2 } from "./building-2-62ZqTlH-.js";
import { S as Search } from "./search-B9ReI4BR.js";
import { C as CircleCheck } from "./circle-check-x97T7GMH.js";
import { c as createLucideIcon } from "./sparkles-C4svRH2K.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BXyXzjDA.js";
import "./users-C9-52kja.js";
import "./send-BriFhOZj.js";
import "./proxy-BU9HUXss.js";
import "./clsx-DgYk2OaC.js";
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }]
];
const Ban = createLucideIcon("ban", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode);
function AdminCompanies() {
  const [q, setQ] = reactExports.useState("");
  const items = ADMIN_COMPANIES.filter((c) => (c.name + c.sector).toLowerCase().includes(q.toLowerCase()));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Entreprises", badge: "Espace admin", items: ADMIN_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Total", value: String(ADMIN_COMPANIES.length), tint: "primary", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Vérifiées", value: String(ADMIN_COMPANIES.filter((c) => c.status === "Vérifiée").length), tint: "teal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "En attente", value: String(ADMIN_COMPANIES.filter((c) => c.status === "En attente").length), tint: "orange" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Suspendues", value: String(ADMIN_COMPANIES.filter((c) => c.status === "Suspendue").length), tint: "coral" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 relative max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Rechercher une entreprise…", className: "rounded-full pl-9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Toutes les entreprises", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3", children: "Entreprise" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Secteur" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Statut" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Défis" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Recrutements" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Inscription" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: items.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0 hover:bg-accent/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 text-lg", children: c.logo }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: c.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: c.sector }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: c.status }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-bold", children: c.challenges }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", children: c.hires }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: c.joined }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-7 w-7 rounded-full text-teal", onClick: () => toast.success(`${c.name} validée`), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-7 w-7 rounded-full text-orange", onClick: () => toast.success(`${c.name} suspendue`), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ban, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-7 w-7 rounded-full text-coral", onClick: () => toast.success(`${c.name} refusée`), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4" }) })
        ] }) })
      ] }, c.id)) })
    ] }) }) })
  ] });
}
export {
  AdminCompanies as component
};
