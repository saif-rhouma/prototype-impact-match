import { U as reactExports, L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, C as COMPANY_NAV, B as Briefcase } from "./nav-F0L5CvbD.js";
import { K as KPI, a as StatusPill, S as SectionCard } from "./Dash-DWra08bV.js";
import { P as PIPELINE_STAGES, C as CANDIDATES, f as COMPANY_POSITIONS } from "./mockFr-DOSkJMeA.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent } from "./tabs-C8Wm3esH.js";
import { D as Dialog, d as DialogTrigger, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-BIszW6LM.js";
import { T as Textarea } from "./textarea-C4-U-xP4.js";
import { t as toast } from "./index-CTsKZJB0.js";
import { U as Users } from "./users-C9-52kja.js";
import { T as Trophy } from "./trophy-Bh4dMqlN.js";
import { C as Clock } from "./clock-DUK_DKs1.js";
import { m as motion } from "./proxy-BU9HUXss.js";
import { c as createLucideIcon } from "./sparkles-C4svRH2K.js";
import { P as Plus } from "./plus--Q_8G3ny.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BXyXzjDA.js";
import "./building-2-62ZqTlH-.js";
import "./send-BriFhOZj.js";
import "./clsx-DgYk2OaC.js";
import "./index-CEDyCZqb.js";
import "./index-DZkrjyUQ.js";
import "./index-BwzEyEmW.js";
import "./x-Db4UbFx3.js";
const __iconNode = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
];
const GripVertical = createLucideIcon("grip-vertical", __iconNode);
function CompanyRecruitment() {
  const [board, setBoard] = reactExports.useState(() => Object.fromEntries(PIPELINE_STAGES.map((s) => [s, CANDIDATES.filter((c) => c.stage === s)])));
  const [drag, setDrag] = reactExports.useState(null);
  const move = (id, to) => {
    setBoard((b) => {
      const next = {
        ...b
      };
      let item = null;
      for (const s of PIPELINE_STAGES) {
        const f = next[s].find((c) => c.id === id);
        if (f) {
          item = f;
          next[s] = next[s].filter((c) => c.id !== id);
        }
      }
      if (item) next[to] = [{
        ...item,
        stage: to
      }, ...next[to]];
      return next;
    });
    toast.success(`Candidat déplacé vers ${to}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Recrutement", badge: "Espace entreprise", items: COMPANY_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Postes ouverts", value: "4", tint: "primary", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Candidats en pipeline", value: "46", tint: "coral", delta: "+8", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Recrutements", value: "3", tint: "teal", delta: "+1", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Délai moyen", value: "14j", tint: "orange", delta: "-3j", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "pipeline", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "pipeline", className: "rounded-full", children: "Pipeline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "positions", className: "rounded-full", children: "Postes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "interviews", className: "rounded-full", children: "Entretiens" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "pipeline", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 overflow-x-auto pb-2", style: {
        gridTemplateColumns: `repeat(${PIPELINE_STAGES.length}, minmax(260px, 1fr))`
      }, children: PIPELINE_STAGES.map((stage) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onDragOver: (e) => e.preventDefault(), onDrop: () => drag && move(drag, stage), className: "rounded-3xl border border-border bg-muted/30 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between px-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: stage }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: board[stage]?.length ?? 0 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: board[stage]?.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { draggable: true, onDragStart: () => setDrag(c.id), onDragEnd: () => setDrag(null), initial: {
          opacity: 0,
          y: 6
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: i * 0.04
        }, className: "group cursor-grab rounded-2xl border border-border bg-card p-3 shadow-card hover:shadow-soft transition-all active:cursor-grabbing", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { className: "mt-1 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-full bg-accent text-xl", children: c.avatar }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate font-semibold", children: c.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs text-muted-foreground", children: c.role })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-full gradient-warm px-2 py-0.5 text-[10px] font-extrabold", children: [
              c.score,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "h-7 rounded-full text-[10px]", children: "Notes" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
                  "Notes — ",
                  c.name
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 5, placeholder: "Ajoutez vos impressions sur ce candidat…", className: "rounded-2xl" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "rounded-full bg-foreground text-background", onClick: () => toast.success("Note enregistrée"), children: "Enregistrer" })
              ] })
            ] })
          ] })
        ] }, c.id)) })
      ] }, stage)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "positions", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Postes ouverts", action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "rounded-full gradient-warm font-bold text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
        " Nouveau poste"
      ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3", children: "Titre" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Ville" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Candidats" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Statut" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Ouvert le" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: COMPANY_POSITIONS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0 hover:bg-accent/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 font-semibold", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold", children: p.type }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-muted-foreground", children: [
            p.city,
            p.remote && " · Remote"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-bold", children: p.candidates }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: p.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: p.openedAt })
        ] }, p.id)) })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "interviews", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Entretiens planifiés", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2", children: CANDIDATES.filter((c) => c.stage === "Entretien").map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-full bg-accent text-2xl", children: c.avatar }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            c.role,
            " • Visio • Demain 14:00"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "rounded-full border-2", children: "Rejoindre" })
      ] }, c.id)) }) }) })
    ] })
  ] });
}
export {
  CompanyRecruitment as component
};
