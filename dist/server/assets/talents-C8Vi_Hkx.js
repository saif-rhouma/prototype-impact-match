import { U as reactExports, L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { L as Link } from "./router-BXyXzjDA.js";
import { S as SiteShell } from "./SiteShell-CvLYnWK4.js";
import { T as TALENTS } from "./mock-BcjI2Up7.js";
import { B as Badge } from "./badge-BWxUkKm2.js";
import { I as Input } from "./input-BnVki95y.js";
import { S as Search } from "./search-B9ReI4BR.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./sparkles-C4svRH2K.js";
import "./button-BM5-xbQ5.js";
import "./clsx-DgYk2OaC.js";
import "./x-Db4UbFx3.js";
function TalentsPage() {
  const [q, setQ] = reactExports.useState("");
  const filtered = TALENTS.filter((t) => !q || `${t.name} ${t.role} ${t.city}`.toLowerCase().includes(q.toLowerCase()));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 pt-12 pb-8 md:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-extrabold md:text-5xl", children: "Young Talents" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-xl text-muted-foreground", children: "Curious, ambitious, ready to ship. Meet the next generation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-6 max-w-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search by name, skill, city…", className: "h-12 rounded-2xl border-2 pl-10 bg-white/80 backdrop-blur" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 py-10 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: filtered.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/talents/$id", params: {
      id: t.id
    }, className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-12 -top-12 h-32 w-32 rounded-full gradient-warm opacity-20 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-14 w-14 place-items-center rounded-2xl bg-accent text-3xl", children: t.avatar }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-extrabold", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
            t.role,
            " • ",
            t.city
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto rounded-full gradient-warm px-3 py-1 text-xs font-extrabold", children: [
          t.match,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: t.skills.slice(0, 4).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "rounded-full", children: s.name }, s.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: t.badges.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "rounded-full bg-coral text-coral-foreground hover:bg-coral", children: [
        "🏅 ",
        b
      ] }, b)) })
    ] }, t.id)) }) })
  ] });
}
export {
  TalentsPage as component
};
