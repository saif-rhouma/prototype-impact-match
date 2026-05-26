import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { L as Link } from "./router-BXyXzjDA.js";
import { S as SiteShell } from "./SiteShell-CvLYnWK4.js";
import { b as POSITIONS } from "./mock-BcjI2Up7.js";
import { B as Badge } from "./badge-BWxUkKm2.js";
import { B as Building2 } from "./building-2-62ZqTlH-.js";
import { M as MapPin } from "./map-pin-CgFvdgvi.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./sparkles-C4svRH2K.js";
import "./button-BM5-xbQ5.js";
import "./clsx-DgYk2OaC.js";
import "./x-Db4UbFx3.js";
function RecruitmentPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 pt-12 pb-8 md:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-extrabold md:text-5xl", children: "Recruitment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-xl text-muted-foreground", children: "Open positions from companies actively hiring through Impact Match." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 py-10 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: POSITIONS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/recruitment/$id", params: {
      id: p.id
    }, className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-12 -top-12 h-32 w-32 rounded-full gradient-warm opacity-20 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-accent text-2xl", children: p.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3 w-3" }),
              " ",
              p.company
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-extrabold", children: p.title })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "rounded-full bg-primary text-primary-foreground hover:bg-primary", children: [
          p.match,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-1.5 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "rounded-full", children: p.type }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "rounded-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mr-1 h-3 w-3" }),
          p.city
        ] }),
        p.remote && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "rounded-full border-teal/30 bg-teal/10", children: "Remote" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: p.skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "rounded-full", children: s }, s)) })
    ] }, p.id)) }) })
  ] });
}
export {
  RecruitmentPage as component
};
