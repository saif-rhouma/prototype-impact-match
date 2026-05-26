import { U as reactExports, L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, A as ADMIN_NAV, c as Shield } from "./nav-F0L5CvbD.js";
import { K as KPI, S as SectionCard, a as StatusPill } from "./Dash-DWra08bV.js";
import { h as MODERATION } from "./mockFr-DOSkJMeA.js";
import { c as cn, d as cva, B as Button } from "./button-BM5-xbQ5.js";
import { R as Root, b as Trigger, P as Portal, a as Content, C as Close, T as Title, O as Overlay, D as Description } from "./index-BwzEyEmW.js";
import { X } from "./x-Db4UbFx3.js";
import { T as Textarea } from "./textarea-C4-U-xP4.js";
import { t as toast } from "./index-CTsKZJB0.js";
import { T as TriangleAlert } from "./triangle-alert-B4ixyh1w.js";
import { C as Check } from "./check-CTW0Ue0k.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BXyXzjDA.js";
import "./sparkles-C4svRH2K.js";
import "./building-2-62ZqTlH-.js";
import "./users-C9-52kja.js";
import "./send-BriFhOZj.js";
import "./proxy-BU9HUXss.js";
import "./clsx-DgYk2OaC.js";
import "./index-CEDyCZqb.js";
import "./index-DZkrjyUQ.js";
const Sheet = Root;
const SheetTrigger = Trigger;
const SheetPortal = Portal;
const SheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = Content.displayName;
const SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
SheetHeader.displayName = "SheetHeader";
const SheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = Title.displayName;
const SheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = Description.displayName;
function AdminModeration() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardShell, { title: "Modération", badge: "Espace admin", items: ADMIN_NAV, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Ouverts", value: String(MODERATION.filter((m) => m.status === "Ouvert").length), tint: "coral", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "En cours", value: String(MODERATION.filter((m) => m.status === "En cours").length), tint: "orange" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Résolus (30j)", value: "42", tint: "teal", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { label: "Niveau élevé", value: String(MODERATION.filter((m) => m.level === "Élevé").length), tint: "coral", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "File de modération", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3", children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Cible" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Raison" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Niveau" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Statut" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", {})
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: MODERATION.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0 hover:bg-accent/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 font-semibold", children: m.type }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: m.target }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground max-w-[280px] truncate", children: m.reason }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: m.level }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: m.status }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: m.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "rounded-full border-2", children: "Inspecter" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { className: "w-[420px] sm:max-w-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { children: [
              m.type,
              " — ",
              m.target
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-muted/40 p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "Raison" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: m.reason })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: m.level }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { status: m.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1", children: "Notes admin" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 5, placeholder: "Décision, contexte, actions menées…", className: "rounded-2xl" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "flex-1 rounded-full bg-teal text-teal-foreground hover:bg-teal/90", onClick: () => toast.success("Cas résolu"), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mr-1 h-4 w-4" }),
                  "Résoudre"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "flex-1 rounded-full bg-coral text-coral-foreground hover:bg-coral/90", onClick: () => toast.success("Sanction appliquée"), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "mr-1 h-4 w-4" }),
                  "Sanctionner"
                ] })
              ] })
            ] })
          ] })
        ] }) })
      ] }, m.id)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Historique des actions", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [{
      who: "Admin Léa",
      act: "a résolu",
      t: "Signalement Bloom Bank",
      time: "il y a 1h"
    }, {
      who: "Admin Karim",
      act: "a suspendu",
      t: "Profil anonyme_42",
      time: "il y a 4h"
    }, {
      who: "Admin Léa",
      act: "a validé",
      t: "Entreprise SolaraCo",
      time: "hier"
    }].map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 rounded-2xl border border-border p-3 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-full bg-accent", children: "🛡️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: a.who }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: a.act }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: a.t })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: a.time })
    ] }, i)) }) })
  ] });
}
export {
  AdminModeration as component
};
