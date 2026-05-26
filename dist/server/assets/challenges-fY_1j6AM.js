import { U as reactExports, L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { L as Link } from "./router-BXyXzjDA.js";
import { S as SiteShell } from "./SiteShell-CvLYnWK4.js";
import { a as CHALLENGES, C as CATEGORIES } from "./mock-BcjI2Up7.js";
import { C as ChallengeCard } from "./ChallengeCard-DOslt-b2.js";
import { I as Input } from "./input-BnVki95y.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { B as Badge } from "./badge-BWxUkKm2.js";
import { S as Search } from "./search-B9ReI4BR.js";
import { c as createLucideIcon } from "./sparkles-C4svRH2K.js";
import { F as Flame } from "./flame-l5GDaLP2.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./x-Db4UbFx3.js";
import "./proxy-BU9HUXss.js";
import "./calendar-Dg45qUm7.js";
import "./trophy-Bh4dMqlN.js";
import "./users-C9-52kja.js";
import "./clsx-DgYk2OaC.js";
const __iconNode = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
function ChallengesPage() {
  const [q, setQ] = reactExports.useState("");
  const [cat, setCat] = reactExports.useState("All");
  const [diff, setDiff] = reactExports.useState("All");
  const filtered = reactExports.useMemo(() => {
    return CHALLENGES.filter((c) => {
      if (cat !== "All" && c.category !== cat) return false;
      if (diff !== "All" && c.difficulty !== diff) return false;
      if (q && !`${c.title} ${c.company} ${c.summary}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [q, cat, diff]);
  const trending = CHALLENGES.filter((c) => c.trending);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 pt-12 pb-8 md:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-extrabold md:text-5xl", children: "Challenge Marketplace" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-xl text-muted-foreground", children: "Discover real-world briefs from companies looking for fresh ideas — and fresh hires." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col gap-3 md:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search challenges, companies, themes…", className: "h-12 rounded-2xl border-2 pl-10 bg-white/80 backdrop-blur" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "h-12 rounded-2xl border-2 bg-white/80 backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "mr-2 h-4 w-4" }),
            " Advanced filters"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { active: cat === "All", onClick: () => setCat("All"), children: "✨ All" }),
          CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Pill, { active: cat === c.name, onClick: () => setCat(c.name), children: [
            c.emoji,
            " ",
            c.name
          ] }, c.name))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-2 text-xs", children: ["All", "Beginner", "Intermediate", "Advanced"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDiff(d), className: `rounded-full px-3 py-1 transition-all ${diff === d ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:bg-accent"}`, children: d }, d)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-4 w-4 text-coral" }),
        " Trending now"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-mx-4 mt-3 flex gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0", children: trending.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/challenges/$id", params: {
        id: c.id
      }, className: "min-w-[280px] shrink-0 rounded-3xl border border-border bg-card p-4 shadow-card hover:shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-2xl bg-accent text-xl", children: c.companyLogo }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: c.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm font-bold leading-tight", children: c.title })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.reward }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Ends ",
            c.deadline
          ] })
        ] })
      ] }, c.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-10 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
          filtered.length,
          " challenges"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "rounded-full", children: "Sorted: Most relevant" })
      ] }),
      filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: filtered.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChallengeCard, { c }, c.id)) })
    ] })
  ] });
}
function Pill({
  active,
  onClick,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick, className: `rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${active ? "border-transparent bg-foreground text-background" : "border-border bg-white/70 backdrop-blur hover:bg-white"}`, children });
}
function EmptyState() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-dashed border-border bg-card p-12 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl", children: "🔎" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-xl font-bold", children: "No challenges match those filters" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Try widening your search or browsing a different theme." })
  ] });
}
export {
  ChallengesPage as component
};
