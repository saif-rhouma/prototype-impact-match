import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { u as useParams, L as Link } from "./router-BXyXzjDA.js";
import { D as DashboardShell, C as COMPANY_NAV } from "./nav-F0L5CvbD.js";
import { a as StatusPill, K as KPI, S as SectionCard } from "./Dash-DWra08bV.js";
import { e as COMPANY_CHALLENGES, C as CANDIDATES, S as SUBMISSIONS } from "./mockFr-DOSkJMeA.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent } from "./tabs-C8Wm3esH.js";
import { t as toast } from "./index-CTsKZJB0.js";
import { c as createLucideIcon, S as Sparkles } from "./sparkles-C4svRH2K.js";
import { T as Trophy } from "./trophy-Bh4dMqlN.js";
import { S as Send } from "./send-BriFhOZj.js";
import { U as Users } from "./users-C9-52kja.js";
import { S as Star } from "./star-BWze73du.js";
import { m as motion } from "./proxy-BU9HUXss.js";
import { C as CircleCheck } from "./circle-check-x97T7GMH.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./building-2-62ZqTlH-.js";
import "./clsx-DgYk2OaC.js";
import "./index-CEDyCZqb.js";
import "./index-DZkrjyUQ.js";
const __iconNode = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode);
function CompanyChallengeDetail() {
  const {
    id
  } = useParams({
    from: "/company/challenges/$id"
  });
  const c = COMPANY_CHALLENGES.find((x) => x.id === id) ?? COMPANY_CHALLENGES[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: c.title, badge: "Défi entreprise", items: COMPANY_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company/challenges", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", className: "rounded-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "mr-1 h-4 w-4" }),
      " Retour aux défis"
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 -top-20 h-64 w-64 rounded-full gradient-warm opacity-30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-wrap items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: c.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              c.category,
              " • Échéance ",
              c.deadline
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-2xl font-extrabold", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Pilotez les soumissions, comparez les équipes et sélectionnez votre match idéal." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "rounded-full border-2", children: "Modifier" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "rounded-full gradient-warm font-bold text-foreground shadow-glow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "mr-1 h-4 w-4" }),
            " Annoncer le match"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Soumissions", value: c.submissions, tint: "coral", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Équipes participantes", value: c.teams, tint: "primary", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Score moyen", value: "84", tint: "teal", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Recommandations IA", value: "3", tint: "orange", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "overview", className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "overview", className: "rounded-full", children: "Aperçu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "participants", className: "rounded-full", children: "Participants" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "solutions", className: "rounded-full", children: "Solutions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "ranking", className: "rounded-full", children: "Classement" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "ai", className: "rounded-full", children: "Recommandations IA" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "overview", className: "mt-5 grid gap-4 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { title: "Brief du défi", className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Aidez-nous à imaginer une nouvelle génération d'emballages circulaires et zéro-déchet, à déployer sur toute la chaîne logistique européenne d'ici fin 2026." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { k: "Récompense", v: "5 000 € + stage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { k: "Format", v: "Équipes 3-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { k: "Livrables", v: "Concept, prototype, deck" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { k: "Critères", v: "Impact, faisabilité, créativité" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Panel d'évaluation", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm", children: ["Impact environnemental", "Faisabilité technique", "Créativité", "Business model", "Présentation"].map((k, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: k }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              [92, 84, 88, 76, 90][i],
              "/100"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-2 overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            width: 0
          }, animate: {
            width: `${[92, 84, 88, 76, 90][i]}%`
          }, transition: {
            duration: 0.8,
            delay: i * 0.08
          }, className: "h-full", style: {
            background: `var(--${["teal", "primary", "coral", "orange", "teal"][i]})`
          } }) })
        ] }, k)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "participants", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: `${CANDIDATES.length} participants`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2 lg:grid-cols-3", children: CANDIDATES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-4 hover:shadow-soft transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-full bg-accent text-2xl", children: p.avatar }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              p.role,
              " • ",
              p.city
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1", children: p.skills.slice(0, 3).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold", children: s }, s)) })
      ] }, p.id)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "solutions", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Soumissions reçues", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: SUBMISSIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-2xl border border-border p-3 hover:bg-accent/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-2xl bg-accent text-xl", children: s.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: s.team }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              "Soumis le ",
              s.date
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full gradient-warm px-3 py-1 text-xs font-extrabold", children: s.score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: s.status }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "rounded-full", children: "Voir" })
        ] })
      ] }, s.id)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "ranking", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Classement des équipes", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-2", children: SUBMISSIONS.slice().sort((a, b) => b.score - a.score).map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-2xl border border-border p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid h-9 w-9 place-items-center rounded-full font-display text-sm font-extrabold ${i === 0 ? "gradient-warm shadow-glow" : "bg-muted"}`, children: [
            "#",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: s.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: s.team })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-extrabold text-teal", children: s.score })
      ] }, s.id)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "ai", className: "mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3", children: SUBMISSIONS.slice(0, 3).map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-28 w-28 rounded-full gradient-cool opacity-30 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-coral" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-coral", children: "Recommandation IA" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-lg font-extrabold", children: s.team }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Forte cohérence avec vos critères RSE et un prototype mature. Compatibilité culturelle élevée." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-full gradient-warm px-3 py-1 text-xs font-extrabold", children: [
              s.score,
              "% match"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "rounded-full bg-foreground text-background", onClick: () => toast.success(`Match annoncé avec ${s.team} 🎉`), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mr-1 h-4 w-4" }),
              " Sélectionner"
            ] })
          ] })
        ] })
      ] }, s.id)) })
    ] })
  ] });
}
function Item({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-muted/40 p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: v })
  ] });
}
export {
  CompanyChallengeDetail as component
};
