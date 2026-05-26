import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, T as TALENT_NAV } from "./nav-F0L5CvbD.js";
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
function TalentSettings() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Paramètres", badge: "Espace talent", items: TALENT_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { title: "Informations personnelles", className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Prénom", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: "Amélie", className: "rounded-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nom", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: "Laurent", className: "rounded-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: "amelie@example.com", className: "rounded-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Ville", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: "Paris", className: "rounded-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Bio", full: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 4, defaultValue: "Designer produit, passionnée par l'impact.", className: "rounded-2xl" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "rounded-full bg-foreground text-background", onClick: () => toast.success("Profil enregistré"), children: "Enregistrer" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Préférences", children: [["Profil visible par les entreprises", true], ["Recevoir des recommandations IA", true], ["Notifications par email", true], ["Mode disponible", true], ["Newsletter mensuelle", false]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-border py-3 first:border-0 first:pt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { defaultChecked: v })
      ] }, k)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { title: "Sécurité", className: "mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nouveau mot de passe", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", placeholder: "••••••••", className: "rounded-2xl" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Confirmation", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", placeholder: "••••••••", className: "rounded-2xl" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "rounded-full border-2", children: "Mettre à jour" }) })
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
  TalentSettings as component
};
