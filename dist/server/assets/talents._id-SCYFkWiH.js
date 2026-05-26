import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { u as useParams, L as Link } from "./router-BXyXzjDA.js";
import { S as SiteShell } from "./SiteShell-CvLYnWK4.js";
import { T as TALENTS } from "./mock-BcjI2Up7.js";
import { B as Badge } from "./badge-BWxUkKm2.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { A as ArrowLeft } from "./arrow-left-FALBMqwA.js";
import { S as Sparkles } from "./sparkles-C4svRH2K.js";
import { M as MessageCircle } from "./message-circle-C9Y4I_dk.js";
import { R as ResponsiveContainer } from "./generateCategoricalChart-BL4l5GLG.js";
import { c as RadarChart, a as PolarGrid, P as PolarAngleAxis, b as PolarRadiusAxis, R as Radar } from "./RadarChart-uo5j7FnY.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./x-Db4UbFx3.js";
import "./clsx-DgYk2OaC.js";
function TalentDetail() {
  const {
    id
  } = useParams({
    from: "/talents/$id"
  });
  const t = TALENTS.find((x) => x.id === id) ?? TALENTS[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 pt-8 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/talents", className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Back"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-4 pt-6 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[36px] border border-border bg-card p-8 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 -top-20 h-64 w-64 rounded-full gradient-warm opacity-30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col gap-6 md:flex-row md:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-24 w-24 place-items-center rounded-3xl bg-accent text-5xl", children: t.avatar }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-extrabold md:text-4xl", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground", children: [
            t.role,
            " • ",
            t.city
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
            t.badges.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "rounded-full bg-coral text-coral-foreground hover:bg-coral", children: [
              "🏅 ",
              b
            ] }, b)),
            t.interests.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "rounded-full border-teal/30 bg-teal/10", children: i }, i))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "rounded-full bg-foreground text-background", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-4 w-4" }),
            " Invite to team"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "rounded-full border-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "mr-2 h-4 w-4" }),
            " Message"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 rounded-3xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-extrabold", children: "Skills radar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RadarChart, { data: t.skills, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PolarGrid, { stroke: "var(--border)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PolarAngleAxis, { dataKey: "name", tick: {
            fill: "var(--muted-foreground)",
            fontSize: 12
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PolarRadiusAxis, { tick: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Radar, { dataKey: "level", stroke: "var(--coral)", fill: "var(--coral)", fillOpacity: 0.35 })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-extrabold", children: "Portfolio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded-2xl gradient-cool opacity-90 shadow-card" }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 rounded-3xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-extrabold", children: "Activity timeline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-4 relative border-l-2 border-border pl-6", children: [["Joined challenge", "Reimagine packaging — 2d ago"], ["Earned badge", "Top 1% Designer — 1w ago"], ["Created team", "Loop Studio — 2w ago"], ["Profile updated", "Added skills & portfolio — 3w ago"]].map(([title, sub], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[7px] mt-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: sub })
        ] }, i)) })
      ] })
    ] })
  ] });
}
export {
  TalentDetail as component
};
