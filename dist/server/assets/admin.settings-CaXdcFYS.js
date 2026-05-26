import { L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, A as ADMIN_NAV } from "./nav-F0L5CvbD.js";
import { S as SectionCard } from "./Dash-DWra08bV.js";
import { I as Input } from "./input-BnVki95y.js";
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
function AdminSettings() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardShell, { title: "Paramètres", badge: "Espace admin", items: ADMIN_NAV, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { title: "Association", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nom", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: "Impact Match Association", className: "rounded-2xl" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: "hello@impactmatch.org", className: "rounded-2xl" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Site web", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: "https://impactmatch.org", className: "rounded-2xl" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "rounded-full bg-foreground text-background", onClick: () => toast.success("Enregistré"), children: "Enregistrer" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Règles de modération", children: [["Validation manuelle des entreprises", true], ["Détection automatique de plagiat", true], ["Modération IA des messages", true], ["Notifications signalements critiques", true], ["Mode maintenance", false]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-border py-3 first:border-0 first:pt-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { defaultChecked: v })
    ] }, k)) })
  ] }) });
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
  AdminSettings as component
};
