import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { L as Link } from "./router-BXyXzjDA.js";
import { B as Badge } from "./badge-BWxUkKm2.js";
import { m as motion } from "./proxy-BU9HUXss.js";
import { C as Calendar } from "./calendar-Dg45qUm7.js";
import { T as Trophy } from "./trophy-Bh4dMqlN.js";
import { U as Users } from "./users-C9-52kja.js";
import { S as Sparkles } from "./sparkles-C4svRH2K.js";
function ChallengeCard({ c }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      whileHover: { y: -4 },
      transition: { type: "spring", stiffness: 260, damping: 20 },
      className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-card hover:shadow-soft",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-12 -top-12 h-32 w-32 rounded-full gradient-cool opacity-20 blur-2xl transition-opacity group-hover:opacity-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-accent text-2xl", children: c.companyLogo }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: c.company }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-bold leading-tight", children: c.title })
            ] })
          ] }),
          c.trending && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "rounded-full bg-coral text-coral-foreground hover:bg-coral", children: "🔥 Trending" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 line-clamp-2 text-sm text-muted-foreground", children: c.summary }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "rounded-full border-teal/30 bg-teal/10 text-foreground", children: c.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "rounded-full", children: c.difficulty }),
          c.recruiting && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "rounded-full bg-primary text-primary-foreground hover:bg-primary", children: "Recruiting" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
            " ",
            c.deadline
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-3.5 w-3.5 text-orange" }),
            " ",
            c.reward
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5" }),
            " Teams"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2", children: ["👩🏻‍🎨", "👨🏽‍💻", "🧑🏿‍🔬"].map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid h-7 w-7 place-items-center rounded-full border-2 border-card bg-muted text-sm",
              children: a
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/challenges/$id",
              params: { id: c.id },
              className: "inline-flex items-center gap-1 rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold text-background transition-transform group-hover:translate-x-0.5",
              children: [
                "Open ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  ChallengeCard as C
};
