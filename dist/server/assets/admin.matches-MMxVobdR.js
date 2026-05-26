import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, A as ADMIN_NAV } from "./nav-F0L5CvbD.js";
import { K as KPI, S as SectionCard } from "./Dash-DWra08bV.js";
import { S as SUBMISSIONS } from "./mockFr-DOSkJMeA.js";
import { S as Sparkles } from "./sparkles-C4svRH2K.js";
import { T as Trophy } from "./trophy-Bh4dMqlN.js";
import { U as Users } from "./users-C9-52kja.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BXyXzjDA.js";
import "./building-2-62ZqTlH-.js";
import "./send-BriFhOZj.js";
import "./proxy-BU9HUXss.js";
function AdminMatches() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Matchs", badge: "Espace admin", items: ADMIN_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Matchs ce mois", value: "24", tint: "primary", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Recrutements", value: "9", tint: "teal", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Équipes matchées", value: "17", tint: "coral", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Score moyen", value: "89", tint: "orange" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Derniers matchs réalisés", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: SUBMISSIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-2xl border border-border p-3 hover:bg-accent/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl gradient-warm shadow-glow text-2xl", children: s.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-extrabold", children: [
            s.team,
            " × ",
            s.challenge
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.date })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-full gradient-warm px-3 py-1 text-xs font-extrabold", children: [
        s.score,
        "% match"
      ] })
    ] }, s.id)) }) })
  ] });
}
export {
  AdminMatches as component
};
