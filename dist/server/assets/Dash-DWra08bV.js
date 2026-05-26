import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { S as STATUS_TINT } from "./nav-F0L5CvbD.js";
import { m as motion } from "./proxy-BU9HUXss.js";
import { c as createLucideIcon } from "./sparkles-C4svRH2K.js";
const __iconNode$1 = [
  ["path", { d: "m7 7 10 10", key: "1fmybs" }],
  ["path", { d: "M17 7v10H7", key: "6fjiku" }]
];
const ArrowDownRight = createLucideIcon("arrow-down-right", __iconNode$1);
const __iconNode = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode);
function KPI({
  label,
  value,
  tint = "primary",
  delta,
  icon,
  spark
}) {
  const color = `var(--${tint === "primary" ? "primary" : tint})`;
  const isUp = delta?.startsWith("+");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      className: "relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-25 blur-2xl",
            style: { background: color }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: label }),
          icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-2xl bg-accent", style: { color }, children: icon })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-3xl font-extrabold", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center justify-between", children: [
          delta ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `flex items-center gap-1 text-xs font-semibold ${isUp ? "text-teal" : "text-coral"}`,
              children: [
                isUp ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownRight, { className: "h-3 w-3" }),
                delta
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
          spark && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-20", children: spark })
        ] })
      ]
    }
  );
}
function SectionCard({
  title,
  action,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl border border-border bg-card p-5 shadow-card ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-extrabold", children: title }),
      action
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children })
  ] });
}
function StatusPill({ status }) {
  const tint = STATUS_TINT[status] ?? "muted";
  const bg = tint === "teal" ? "bg-teal text-teal-foreground" : tint === "coral" ? "bg-coral text-coral-foreground" : tint === "orange" ? "bg-orange text-foreground" : tint === "primary" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${bg}`,
      children: status
    }
  );
}
export {
  KPI as K,
  SectionCard as S,
  StatusPill as a
};
