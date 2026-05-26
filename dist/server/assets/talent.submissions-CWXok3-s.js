import { L as jsxRuntimeExports, U as reactExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, T as TALENT_NAV } from "./nav-F0L5CvbD.js";
import { K as KPI, S as SectionCard, a as StatusPill } from "./Dash-DWra08bV.js";
import { S as SUBMISSIONS } from "./mockFr-DOSkJMeA.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { I as Input } from "./input-BnVki95y.js";
import { T as Textarea } from "./textarea-C4-U-xP4.js";
import { L as Label } from "./label-BwB9AbVm.js";
import { D as Dialog, d as DialogTrigger, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-BIszW6LM.js";
import { t as toast } from "./index-CTsKZJB0.js";
import { S as Send } from "./send-BriFhOZj.js";
import { C as Check } from "./check-CTW0Ue0k.js";
import { c as createLucideIcon, S as Sparkles } from "./sparkles-C4svRH2K.js";
import { P as Plus } from "./plus--Q_8G3ny.js";
import { A as AnimatePresence } from "./index-5pShdZER.js";
import { m as motion } from "./proxy-BU9HUXss.js";
import { U as Upload } from "./upload-DH6D9V8c.js";
import { A as ArrowLeft } from "./arrow-left-FALBMqwA.js";
import { A as ArrowRight } from "./arrow-right-79a8uZgf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BXyXzjDA.js";
import "./building-2-62ZqTlH-.js";
import "./users-C9-52kja.js";
import "./clsx-DgYk2OaC.js";
import "./index-BwzEyEmW.js";
import "./index-CEDyCZqb.js";
import "./index-DZkrjyUQ.js";
import "./x-Db4UbFx3.js";
const __iconNode = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  [
    "path",
    {
      d: "M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z",
      key: "1tzo1f"
    }
  ]
];
const FilePlay = createLucideIcon("file-play", __iconNode);
const STEPS = ["Informations", "Description", "Fichiers", "Vidéo", "Vérification", "Confirmation"];
function TalentSubmissions() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Mes soumissions", badge: "Espace talent", items: TALENT_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Soumises", value: "4", tint: "primary", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Acceptées", value: "2", tint: "teal", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Score moyen", value: "89", tint: "coral", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "En cours de revue", value: "1", tint: "orange" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Suivez et partagez vos solutions auprès des entreprises." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "rounded-full gradient-warm font-bold text-foreground shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
          " Nouvelle soumission"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Soumettre une solution" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wizard, {})
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Historique", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3", children: "Équipe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Défi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Score" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Statut" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: SUBMISSIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0 hover:bg-accent/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2", children: s.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: s.team })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: s.challenge }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: s.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-display font-extrabold text-teal", children: s.score }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: s.status }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "rounded-full", children: "Voir" }) })
      ] }, s.id)) })
    ] }) }) })
  ] });
}
function Wizard() {
  const [step, setStep] = reactExports.useState(0);
  const [drag, setDrag] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-7 w-7 place-items-center rounded-full text-[11px] font-extrabold ${i <= step ? "gradient-warm shadow-glow" : "bg-muted text-muted-foreground"}`, children: i < step ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }) : i + 1 }),
      i < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-1 flex-1 rounded-full ${i < step ? "bg-primary" : "bg-border"}` })
    ] }, s)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs font-semibold text-muted-foreground", children: STEPS[step] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 min-h-[260px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      x: 10
    }, animate: {
      opacity: 1,
      x: 0
    }, exit: {
      opacity: 0,
      x: -10
    }, children: [
      step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nom de la solution", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Pouch circulaire v2", className: "rounded-2xl" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Défi associé", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Emballage zéro-déchet", className: "rounded-2xl" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Équipe", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Loop Studio", className: "rounded-2xl" }) })
      ] }),
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 8, placeholder: "Décrivez votre solution, son impact et sa faisabilité…", className: "rounded-2xl" }),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onDragEnter: (e) => {
        e.preventDefault();
        setDrag(true);
      }, onDragOver: (e) => e.preventDefault(), onDragLeave: () => setDrag(false), onDrop: (e) => {
        e.preventDefault();
        setDrag(false);
        toast.success("Fichiers ajoutés");
      }, className: `grid place-items-center rounded-3xl border-2 border-dashed p-10 text-center transition-all ${drag ? "border-coral bg-coral/10" : "border-border bg-muted/30"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-8 w-8 text-coral" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-semibold", children: "Déposez vos fichiers ici" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "PDF, ZIP, images jusqu'à 50 Mo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mt-3 rounded-full bg-foreground text-background", children: "Parcourir" })
      ] }),
      step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lien vidéo de présentation", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "https://youtu.be/…", className: "rounded-2xl" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid place-items-center rounded-3xl border-2 border-dashed border-border bg-muted/30 p-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilePlay, { className: "h-8 w-8 text-coral" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm", children: "…ou téléversez un fichier .mp4 (max 200 Mo)" })
        ] })
      ] }),
      step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [["Nom", "Pouch circulaire v2"], ["Défi", "Emballage zéro-déchet"], ["Fichiers", "3 fichiers (12 Mo)"], ["Vidéo", "Lien YouTube"]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-2xl border border-border p-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: v })
      ] }, k)) }),
      step === 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid place-items-center rounded-3xl bg-muted/30 p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          scale: 0.6,
          rotate: -10
        }, animate: {
          scale: 1,
          rotate: 0
        }, transition: {
          type: "spring"
        }, className: "grid h-20 w-20 place-items-center rounded-full gradient-warm shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-10 w-10" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl font-extrabold", children: "Soumission envoyée !" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Votre équipe sera notifiée des retours." })
      ] })
    ] }, step) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", disabled: step === 0, onClick: () => setStep((s) => Math.max(0, s - 1)), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-1 h-4 w-4" }),
        " Précédent"
      ] }),
      step < STEPS.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "rounded-full bg-foreground text-background", onClick: () => setStep((s) => s + 1), children: [
        "Suivant ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "rounded-full gradient-warm font-bold text-foreground", onClick: () => toast.success("Terminé !"), children: "Terminer" })
    ] })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-1 inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground", children: label }),
    children
  ] });
}
export {
  TalentSubmissions as component
};
