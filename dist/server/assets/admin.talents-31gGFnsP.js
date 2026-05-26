import { U as reactExports, L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, A as ADMIN_NAV } from "./nav-F0L5CvbD.js";
import { K as KPI, S as SectionCard, a as StatusPill } from "./Dash-DWra08bV.js";
import { b as ADMIN_TALENTS } from "./mockFr-DOSkJMeA.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { I as Input } from "./input-BnVki95y.js";
import { t as toast } from "./index-CTsKZJB0.js";
import { U as Users } from "./users-C9-52kja.js";
import { c as createLucideIcon } from "./sparkles-C4svRH2K.js";
import { T as TriangleAlert } from "./triangle-alert-B4ixyh1w.js";
import { S as Search } from "./search-B9ReI4BR.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BXyXzjDA.js";
import "./building-2-62ZqTlH-.js";
import "./send-BriFhOZj.js";
import "./proxy-BU9HUXss.js";
import "./clsx-DgYk2OaC.js";
const __iconNode = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const BadgeCheck = createLucideIcon("badge-check", __iconNode);
function AdminTalents() {
  const [q, setQ] = reactExports.useState("");
  const items = ADMIN_TALENTS.filter((t) => (t.name + t.city).toLowerCase().includes(q.toLowerCase()));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Talents", badge: "Espace admin", items: ADMIN_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Total", value: "18 500", tint: "primary", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Vérifiés", value: "16 240", tint: "teal", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "En attente", value: "1 820", tint: "orange" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Signalés", value: String(ADMIN_TALENTS.filter((t) => t.flagged).length), tint: "coral", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 relative max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Rechercher un talent…", className: "rounded-full pl-9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Annuaire talents", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3", children: "Nom" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Ville" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Statut" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Participations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Badges" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Dernière activité" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: items.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: `border-b border-border last:border-0 hover:bg-accent/40 ${t.flagged ? "bg-coral/5" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 text-lg", children: t.avatar }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: t.name }),
          t.flagged && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "ml-2 inline h-3 w-3 text-coral" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: t.city }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: t.status }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-bold", children: t.participations }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", children: t.badges }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: t.lastActive }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "rounded-full", onClick: () => toast.success(`Profil ${t.name} ouvert`), children: "Voir" }) })
      ] }, t.id)) })
    ] }) }) })
  ] });
}
export {
  AdminTalents as component
};
