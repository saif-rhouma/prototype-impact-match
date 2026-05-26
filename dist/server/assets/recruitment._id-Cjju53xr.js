import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { u as useParams, L as Link } from "./router-BXyXzjDA.js";
import { S as SiteShell } from "./SiteShell-CvLYnWK4.js";
import { b as POSITIONS } from "./mock-BcjI2Up7.js";
import { B as Badge } from "./badge-BWxUkKm2.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { A as ArrowLeft } from "./arrow-left-FALBMqwA.js";
import { U as Upload } from "./upload-DH6D9V8c.js";
import { C as Check } from "./check-CTW0Ue0k.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./sparkles-C4svRH2K.js";
import "./x-Db4UbFx3.js";
import "./clsx-DgYk2OaC.js";
function PositionDetail() {
  const {
    id
  } = useParams({
    from: "/recruitment/$id"
  });
  const p = POSITIONS.find((x) => x.id === id) ?? POSITIONS[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-4 pt-8 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/recruitment", className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " All positions"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-5xl px-4 pt-6 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[36px] border border-border bg-card p-8 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 -top-20 h-64 w-64 rounded-full gradient-warm opacity-30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-wrap items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-14 w-14 place-items-center rounded-2xl bg-accent text-3xl", children: p.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: p.company }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-extrabold", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap gap-1.5 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "rounded-full", children: p.type }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "rounded-full", children: [
                p.city,
                p.remote && " · Remote"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "rounded-full bg-foreground text-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mr-2 h-4 w-4" }),
          " Apply now"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto grid max-w-5xl gap-6 px-4 py-10 md:grid-cols-3 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 rounded-3xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-extrabold", children: "About the role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Join a small team building meaningful technology. You’ll work on end-to-end features, contribute to product decisions, and learn alongside experienced mentors." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display font-extrabold", children: "What you’ll do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm", children: ["Own a clear scope from day one", "Pair daily with senior engineers", "Ship to production weekly", "Contribute to public showcases"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-teal" }),
          " ",
          l
        ] }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-3 rounded-3xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-extrabold", children: "Required skills" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: p.skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "rounded-full", children: s }, s)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-muted p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Your match score" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl font-extrabold gradient-text", children: [
            p.match,
            "%"
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  PositionDetail as component
};
