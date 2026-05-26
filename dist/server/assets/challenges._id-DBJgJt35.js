import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { u as useParams, L as Link } from "./router-BXyXzjDA.js";
import { S as SiteShell } from "./SiteShell-CvLYnWK4.js";
import { a as CHALLENGES, d as TEAMS } from "./mock-BcjI2Up7.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { B as Badge } from "./badge-BWxUkKm2.js";
import { A as ArrowLeft } from "./arrow-left-FALBMqwA.js";
import { U as Upload } from "./upload-DH6D9V8c.js";
import { M as MessageCircle } from "./message-circle-C9Y4I_dk.js";
import { C as Calendar } from "./calendar-Dg45qUm7.js";
import { T as Trophy } from "./trophy-Bh4dMqlN.js";
import { U as Users } from "./users-C9-52kja.js";
import { S as Sparkles } from "./sparkles-C4svRH2K.js";
import { C as Check } from "./check-CTW0Ue0k.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./x-Db4UbFx3.js";
import "./clsx-DgYk2OaC.js";
function ChallengeDetail() {
  const {
    id
  } = useParams({
    from: "/challenges/$id"
  });
  const c = CHALLENGES.find((x) => x.id === id) ?? CHALLENGES[0];
  const teams = TEAMS.filter((t) => t.challenge === c.title);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 pt-8 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/challenges", className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Back to marketplace"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative mx-auto max-w-6xl px-4 pt-6 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[36px] border border-border bg-card p-8 shadow-card md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 -top-20 h-64 w-64 rounded-full gradient-cool opacity-30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid gap-8 md:grid-cols-[1fr_320px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-14 w-14 place-items-center rounded-2xl bg-accent text-3xl", children: c.companyLogo }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: c.company }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "rounded-full border-teal/30 bg-teal/10", children: c.category })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 font-display text-3xl font-extrabold md:text-4xl", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-2xl text-muted-foreground", children: c.summary }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: c.skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "rounded-full", children: s }, s)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/match/$id", params: {
              id: c.id
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "rounded-full bg-foreground text-background", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mr-2 h-4 w-4" }),
              " Submit a solution"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", className: "rounded-full border-2", children: "Join a team" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", variant: "ghost", className: "rounded-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "mr-2 h-4 w-4" }),
              " Ask the company"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }), label: "Deadline", value: c.deadline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4 text-orange" }), label: "Reward", value: c.reward }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }), label: "Difficulty", value: c.difficulty }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-coral" }), label: "Mode", value: c.recruiting ? "Challenge + Recruiting" : "Challenge" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-6xl px-4 py-10 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 rounded-3xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-extrabold", children: "What we’re looking for" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3 text-sm", children: ["A clear problem framing and target users", "Working prototype or detailed technical spec", "Sustainability or ethical considerations", "Plan for measurable impact in 6 months"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-teal/15 text-teal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }) }),
          l
        ] }, l)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-8 font-display text-xl font-extrabold", children: "Timeline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-4 grid gap-3 sm:grid-cols-4", children: ["Open", "Team forming", "Submissions", "Pitch & match"].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-2xl border border-border p-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: [
            "Phase ",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm font-bold", children: t })
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-extrabold", children: "Teams already on it" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3", children: [
          teams.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Be the first team to claim this challenge." }),
          teams.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/teams/$id", params: {
            id: t.id
          }, className: "block rounded-2xl border border-border p-3 hover:bg-accent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: t.emoji }),
                " ",
                t.name
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "rounded-full bg-teal text-teal-foreground hover:bg-teal", children: [
                t.match,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex -space-x-2", children: t.members.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-7 w-7 place-items-center rounded-full border-2 border-card bg-muted", children: m.avatar }, m.name)) })
          ] }, t.id))
        ] })
      ] })
    ] }) })
  ] });
}
function StatCard({
  icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-2xl border border-border bg-muted/40 p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground inline-flex items-center gap-2", children: [
      icon,
      " ",
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-bold", children: value })
  ] });
}
export {
  ChallengeDetail as component
};
