import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, A as ADMIN_NAV, M as Megaphone } from "./nav-F0L5CvbD.js";
import { K as KPI, a as StatusPill } from "./Dash-DWra08bV.js";
import { d as CHALLENGE_STATUSES, e as COMPANY_CHALLENGES } from "./mockFr-DOSkJMeA.js";
import { S as Send } from "./send-BriFhOZj.js";
import { T as Trophy } from "./trophy-Bh4dMqlN.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BXyXzjDA.js";
import "./sparkles-C4svRH2K.js";
import "./building-2-62ZqTlH-.js";
import "./users-C9-52kja.js";
import "./proxy-BU9HUXss.js";
function AdminChallenges() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Défis", badge: "Espace admin", items: ADMIN_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Défis totaux", value: "86", tint: "primary", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Soumissions", value: "1 240", tint: "coral", delta: "+18%", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Matchs", value: "96", tint: "teal", delta: "+24", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Taux de réussite", value: "92%", tint: "orange", delta: "+4%" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 overflow-x-auto pb-2", style: {
      gridTemplateColumns: `repeat(${CHALLENGE_STATUSES.length}, minmax(240px, 1fr))`
    }, children: CHALLENGE_STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-muted/30 p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between px-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: s }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: COMPANY_CHALLENGES.filter((c) => c.status === s).length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: COMPANY_CHALLENGES.filter((c) => c.status === s).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-3 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold leading-snug", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [
          c.category,
          " • ",
          c.deadline
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-coral", children: c.submissions }),
          " sol. ·",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: c.teams }),
          " équipes"
        ] })
      ] }, c.id)) })
    ] }, s)) })
  ] });
}
export {
  AdminChallenges as component
};
