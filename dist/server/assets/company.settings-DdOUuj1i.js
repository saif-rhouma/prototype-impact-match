import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, C as COMPANY_NAV } from "./nav-F0L5CvbD.js";
import { S as SectionCard } from "./Dash-DWra08bV.js";
import { I as Input } from "./input-BnVki95y.js";
import { T as Textarea } from "./textarea-C4-U-xP4.js";
import { L as Label } from "./label-BwB9AbVm.js";
import { S as Switch } from "./switch-DXGJOL7M.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { t as toast } from "./index-CTsKZJB0.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BXyXzjDA.js";
import "./sparkles-C4svRH2K.js";
import "./building-2-62ZqTlH-.js";
import "./users-C9-52kja.js";
import "./send-BriFhOZj.js";
import "./proxy-BU9HUXss.js";
import "./index-CEDyCZqb.js";
import "./clsx-DgYk2OaC.js";
function CompanySettings() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Paramètres", badge: "Espace entreprise", items: COMPANY_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { title: "Profil entreprise", className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nom", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: "Verda Foods", className: "rounded-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Secteur", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: "Agro-alimentaire", className: "rounded-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Site web", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: "https://verda.co", className: "rounded-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Taille", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: "51-200", className: "rounded-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Description", full: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 4, defaultValue: "Nous réinventons l'alimentation pour un monde sans déchet.", className: "rounded-2xl" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "rounded-full bg-foreground text-background", onClick: () => toast.success("Profil mis à jour"), children: "Enregistrer" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Notifications", children: [["Nouvelles candidatures", true], ["Soumissions de défis", true], ["Messages directs", true], ["Rapport hebdo", false], ["Promotions plateforme", false]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-border py-3 first:border-0 first:pt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { defaultChecked: v })
      ] }, k)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { title: "Équipe & permissions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [{
          n: "Camille D.",
          r: "Admin",
          a: "👩🏼‍💼"
        }, {
          n: "Yann T.",
          r: "Recruteur",
          a: "👨🏻‍💼"
        }, {
          n: "Sophie M.",
          r: "Lecteur",
          a: "👩🏽‍💼"
        }].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 rounded-2xl border border-border p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-full bg-accent text-xl", children: m.a }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: m.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: m.r })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "rounded-full", children: "Modifier" })
        ] }, m.n)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mt-3 w-full rounded-full bg-foreground text-background", children: "Inviter un membre" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Facturation", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl gradient-hero p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-coral", children: "Plan Impact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-extrabold", children: "490 € / mois" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Défis illimités, recrutement avancé, analytics premium." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mt-3 rounded-full bg-foreground text-background", children: "Gérer l'abonnement" })
      ] }) })
    ] })
  ] });
}
function Field({
  label,
  children,
  full
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: full ? "md:col-span-2" : "", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-1 inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground", children: label }),
    children
  ] });
}
export {
  CompanySettings as component
};
