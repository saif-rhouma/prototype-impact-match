import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { L as Link } from "./router-BXyXzjDA.js";
import { S as SiteShell } from "./SiteShell-CvLYnWK4.js";
import { d as TEAMS } from "./mock-BcjI2Up7.js";
import { B as Badge } from "./badge-BWxUkKm2.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { P as Plus } from "./plus--Q_8G3ny.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./sparkles-C4svRH2K.js";
import "./x-Db4UbFx3.js";
import "./clsx-DgYk2OaC.js";
function TeamsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 pt-12 pb-8 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-extrabold md:text-5xl", children: "Team Formation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-xl text-muted-foreground", children: "AI-matched teams of complementary skills. Form, invite, and ship together." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "rounded-full bg-foreground text-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
          " Create a team"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 py-10 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: TEAMS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/teams/$id", params: {
      id: t.id
    }, className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-12 -top-12 h-32 w-32 rounded-full gradient-cool opacity-20 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-accent text-2xl", children: t.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-extrabold", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.challenge })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-full gradient-warm px-3 py-1 text-xs font-extrabold", children: [
          t.match,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex -space-x-2", children: t.members.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-full border-2 border-card bg-muted text-lg", title: `${m.name} · ${m.role}`, children: m.avatar }, m.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: t.lookingFor.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "rounded-full", children: "Closed" }) : t.lookingFor.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "rounded-full bg-teal text-teal-foreground hover:bg-teal", children: [
          "Looking: ",
          s
        ] }, s)) }),
        t.open && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-teal", children: "● Open" })
      ] })
    ] }, t.id)) }) })
  ] });
}
export {
  TeamsPage as component
};
