import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { S as SiteShell } from "./SiteShell-CvLYnWK4.js";
import { c as STORIES } from "./mock-BcjI2Up7.js";
import { B as Badge } from "./badge-BWxUkKm2.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BXyXzjDA.js";
import "./sparkles-C4svRH2K.js";
import "./button-BM5-xbQ5.js";
import "./clsx-DgYk2OaC.js";
import "./x-Db4UbFx3.js";
const teamIllus = "/assets/illus-team-BXQ2OQTO.png";
function SuccessStories() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl items-center gap-8 px-4 pt-12 pb-12 md:grid-cols-2 md:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-coral", children: "Success stories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-2 font-display text-4xl font-extrabold md:text-5xl", children: [
            "Real teams. ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Real impact." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-xl text-muted-foreground", children: "From challenge to hire, from prototype to product — every story here started with a brief." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: teamIllus, alt: "Team celebrating", loading: "lazy", width: 1024, height: 1024, className: "ml-auto w-full max-w-md animate-float" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-5xl px-4 py-10 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative space-y-10 border-l-2 border-border pl-8", children: STORIES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[37px] grid h-8 w-8 place-items-center rounded-full gradient-warm shadow-glow font-display font-extrabold", children: i + 1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-6 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "rounded-full border-teal/30 bg-teal/10", children: s.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "rounded-full bg-primary text-primary-foreground hover:bg-primary", children: s.outcome })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-2xl font-extrabold", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: s.company }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-3 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-muted p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Before" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm", children: s.before })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl gradient-cool p-4 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider opacity-80", children: "After" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold", children: s.after })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-5 rounded-2xl border-l-4 border-coral bg-accent p-4 text-sm italic", children: [
          "“",
          s.quote,
          "” ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "not-italic text-muted-foreground", children: [
            "— ",
            s.author
          ] })
        ] })
      ] })
    ] }, s.id)) }) })
  ] });
}
export {
  SuccessStories as component
};
