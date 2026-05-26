import { U as reactExports, L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { L as Link } from "./router-BXyXzjDA.js";
import { S as SiteShell } from "./SiteShell-CvLYnWK4.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { I as Input } from "./input-BnVki95y.js";
import { T as Textarea } from "./textarea-C4-U-xP4.js";
import { L as Label } from "./label-BwB9AbVm.js";
import { C as Check } from "./check-CTW0Ue0k.js";
import { A as AnimatePresence } from "./index-5pShdZER.js";
import { m as motion } from "./proxy-BU9HUXss.js";
import { A as ArrowLeft } from "./arrow-left-FALBMqwA.js";
import { A as ArrowRight } from "./arrow-right-79a8uZgf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./sparkles-C4svRH2K.js";
import "./x-Db4UbFx3.js";
import "./clsx-DgYk2OaC.js";
const STEPS = ["Company", "Mission", "Innovation", "Review"];
function CompanyOnboarding() {
  const [step, setStep] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { hideFooter: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-10 md:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-coral", children: "For companies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-3xl font-extrabold md:text-4xl", children: "Set up your company profile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Takes 3 minutes. You can come back and edit anytime." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex items-center gap-2", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-9 w-9 place-items-center rounded-full font-display text-sm font-extrabold transition-all ${i <= step ? "gradient-warm shadow-glow" : "bg-muted text-muted-foreground"}`, children: i < step ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) : i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `hidden sm:block text-sm font-semibold ${i === step ? "text-foreground" : "text-muted-foreground"}`, children: s }),
          i < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-1 flex-1 rounded-full ${i < step ? "bg-primary" : "bg-border"}` })
        ] }, s)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-4xl px-4 pb-16 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[32px] border border-border bg-card p-8 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: 16
      }, animate: {
        opacity: 1,
        x: 0
      }, exit: {
        opacity: 0,
        x: -16
      }, transition: {
        duration: 0.25
      }, className: "grid gap-4 md:grid-cols-2", children: [
        step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Verda Foods", className: "rounded-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Industry", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Food & Beverage", className: "rounded-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company size", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "51-200", className: "rounded-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Website", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "https://", className: "rounded-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Description", full: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: "Tell us about your company…", className: "rounded-2xl", rows: 4 }) })
        ] }),
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "CSR / RSE objectives", full: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: "Your sustainability and social commitments…", className: "rounded-2xl", rows: 4 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Primary contact name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Camille Dubois", className: "rounded-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Contact email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", placeholder: "camille@verda.co", className: "rounded-2xl" }) })
        ] }),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Innovation themes", full: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["Sustainability", "AI", "Health", "Education", "Smart Cities", "Green Energy", "Social Innovation"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-semibold hover:bg-accent", children: t }, t)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Recruitment interests", full: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["Internships", "Apprenticeships", "Full-time", "Freelance"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-semibold hover:bg-accent", children: t }, t)) }) })
        ] }),
        step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-muted p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: "🎉" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl font-extrabold", children: "You’re all set" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Your profile is ready. Now post your first challenge or browse talents." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company/dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "rounded-full bg-foreground text-background", children: "Go to dashboard" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/talents", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "rounded-full border-2", children: "Browse talents" }) })
          ] })
        ] }) })
      ] }, step) }),
      step < 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", onClick: () => setStep((s) => Math.max(0, s - 1)), disabled: step === 0, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-1 h-4 w-4" }),
          " Back"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "rounded-full bg-foreground text-background", onClick: () => setStep((s) => Math.min(STEPS.length - 1, s + 1)), children: [
          "Continue ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
        ] })
      ] })
    ] }) })
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
  CompanyOnboarding as component
};
