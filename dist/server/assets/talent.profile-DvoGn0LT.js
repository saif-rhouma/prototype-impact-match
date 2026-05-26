import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, T as TALENT_NAV } from "./nav-F0L5CvbD.js";
import { S as SectionCard } from "./Dash-DWra08bV.js";
import { T as TALENTS } from "./mock-BcjI2Up7.js";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent } from "./tabs-C8Wm3esH.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { m as motion } from "./proxy-BU9HUXss.js";
import { M as MapPin } from "./map-pin-CgFvdgvi.js";
import { D as Download } from "./download-B0Qa0EDa.js";
import { c as createLucideIcon, S as Sparkles } from "./sparkles-C4svRH2K.js";
import { R as ResponsiveContainer } from "./generateCategoricalChart-BL4l5GLG.js";
import { c as RadarChart, a as PolarGrid, P as PolarAngleAxis, R as Radar } from "./RadarChart-uo5j7FnY.js";
import { S as Star } from "./star-BWze73du.js";
import { F as FileText } from "./file-text-BiInxENP.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BXyXzjDA.js";
import "./building-2-62ZqTlH-.js";
import "./users-C9-52kja.js";
import "./send-BriFhOZj.js";
import "./index-CEDyCZqb.js";
import "./index-DZkrjyUQ.js";
import "./clsx-DgYk2OaC.js";
const __iconNode = [
  ["path", { d: "M13 21h8", key: "1jsn5i" }],
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
];
const PenLine = createLucideIcon("pen-line", __iconNode);
function TalentProfile() {
  const t = TALENTS[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Mon profil", badge: "Espace talent", items: TALENT_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-32 gradient-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-wrap items-end justify-between gap-4 pt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            scale: 0.8,
            opacity: 0
          }, animate: {
            scale: 1,
            opacity: 1
          }, className: "grid h-24 w-24 place-items-center rounded-3xl bg-card shadow-card text-5xl", children: t.avatar }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-extrabold", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.role }),
              " • ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
              " ",
              t.city
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-1", children: t.badges.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-coral/10 px-2 py-0.5 text-[10px] font-bold text-coral", children: [
              "🏅 ",
              b
            ] }, b)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "rounded-full border-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-1 h-4 w-4" }),
            " CV"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "rounded-full bg-foreground text-background", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "mr-1 h-4 w-4" }),
            " Modifier"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-4", children: [{
        l: "Score profil",
        v: "91"
      }, {
        l: "Défis",
        v: "12"
      }, {
        l: "Matchs",
        v: "4"
      }, {
        l: "Followers",
        v: "238"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-muted/40 p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-extrabold", children: s.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: s.l })
      ] }, s.l)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "about", className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "about", className: "rounded-full", children: "À propos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "portfolio", className: "rounded-full", children: "Portfolio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "timeline", className: "rounded-full", children: "Activité" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "certifications", className: "rounded-full", children: "Certifications" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "about", className: "mt-5 grid gap-4 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Compétences", className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RadarChart, { data: t.skills, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PolarGrid, { stroke: "var(--border)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PolarAngleAxis, { dataKey: "name", stroke: "var(--muted-foreground)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Radar, { dataKey: "level", stroke: "var(--coral)", fill: "var(--coral)", fillOpacity: 0.45 })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { title: "Bio", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Designer produit passionnée par la durabilité et le design d'impact. J'aime collaborer avec des équipes pluridisciplinaires sur des défis ambitieux." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Intérêts :" }),
              " ",
              t.interests.join(", ")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Langues :" }),
              " Français, Anglais, Espagnol"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Disponibilité :" }),
              " Immédiate"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "portfolio", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
        y: -4
      }, className: "group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-cool opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center text-5xl opacity-70", children: "🎨" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-bold", children: [
            "Projet #",
            i
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] opacity-80", children: "Design système · 2025" })
        ] })
      ] }, i)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "timeline", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Historique de collaborations", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative ml-3 space-y-4 border-l-2 border-border pl-5", children: [{
        d: "Juin 2025",
        t: "Match avec Verda Foods",
        desc: "Loop Studio · Emballage zéro-déchet"
      }, {
        d: "Mai 2025",
        t: "Soumission notée 96/100",
        desc: "Défi Bloom Bank"
      }, {
        d: "Mars 2025",
        t: "Rejoint l'équipe Northstar AI",
        desc: "Copilot support client"
      }, {
        d: "Janvier 2025",
        t: "Inscription Impact Match",
        desc: "Bienvenue 👋"
      }].map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-7 top-1.5 grid h-4 w-4 place-items-center rounded-full gradient-warm shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-2.5 w-2.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-coral", children: e.d }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: e.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: e.desc })
      ] }, i)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "certifications", className: "mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: [{
        e: "🎓",
        t: "Master Design d'Impact",
        v: "ENSCI · 2024"
      }, {
        e: "🏆",
        t: "Climate Fellow",
        v: "Hearth Foundation · 2025"
      }, {
        e: "📜",
        t: "Certif. Design System",
        v: "Figma · 2024"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: c.e }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display font-extrabold", children: c.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: c.v })
      ] }, c.t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "CV", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-muted/40 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-8 w-8 text-coral" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Amelie_Laurent_CV.pdf" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Mis à jour le 12 juin · 1.2 Mo" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "rounded-full border-2", children: "Aperçu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "rounded-full bg-foreground text-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-1 h-4 w-4" }),
          " Optimiser avec l'IA"
        ] })
      ] })
    ] }) })
  ] });
}
export {
  TalentProfile as component
};
