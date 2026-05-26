import { U as reactExports, L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { L as Link } from "./router-BXyXzjDA.js";
import { S as SiteShell } from "./SiteShell-CvLYnWK4.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { I as Input } from "./input-BnVki95y.js";
import { L as Label } from "./label-BwB9AbVm.js";
import { T as Textarea } from "./textarea-C4-U-xP4.js";
import { C as CATEGORIES } from "./mock-BcjI2Up7.js";
import { C as Check } from "./check-CTW0Ue0k.js";
import { A as AnimatePresence } from "./index-5pShdZER.js";
import { m as motion } from "./proxy-BU9HUXss.js";
import { U as Upload } from "./upload-DH6D9V8c.js";
import { A as ArrowLeft } from "./arrow-left-FALBMqwA.js";
import { A as ArrowRight } from "./arrow-right-79a8uZgf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./sparkles-C4svRH2K.js";
import "./x-Db4UbFx3.js";
import "./clsx-DgYk2OaC.js";
const STEPS = ["You", "Skills", "Interests", "Portfolio"];
const SKILLS = ["Design", "Frontend", "Backend", "ML", "Data", "Product", "Research", "Marketing", "Writing", "Strategy"];
function TalentOnboarding() {
  const [step, setStep] = reactExports.useState(0);
  const [chosen, setChosen] = reactExports.useState([]);
  const [interests, setInterests] = reactExports.useState([]);
  const toggle = (arr, set, v) => set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { hideFooter: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-10 md:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-coral", children: "For talents" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-3xl font-extrabold md:text-4xl", children: "Welcome — let’s craft your profile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "A few quick questions so we can match you with the right challenges." }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Amélie Laurent", className: "rounded-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Role you’re after", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Product Designer", className: "rounded-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "City", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Paris", className: "rounded-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", placeholder: "you@email.com", className: "rounded-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Bio", full: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 4, className: "rounded-2xl", placeholder: "Tell us about your journey…" }) })
        ] }),
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-3 block text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Pick your skills" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: SKILLS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggle(chosen, setChosen, s), className: `rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${chosen.includes(s) ? "border-transparent bg-foreground text-background" : "border-border bg-muted hover:bg-accent"}`, children: s }, s)) })
        ] }),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-3 block text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Pick your interests" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 sm:grid-cols-3", children: CATEGORIES.map((c) => {
            const on = interests.includes(c.name);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggle(interests, setInterests, c.name), className: `group flex items-center gap-2 rounded-2xl border p-3 text-left text-sm transition-all ${on ? "border-transparent gradient-warm shadow-glow" : "border-border bg-muted hover:bg-accent"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: c.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: c.name })
            ] }, c.name);
          }) })
        ] }),
        step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-dashed border-border p-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mx-auto h-10 w-10 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-lg font-extrabold", children: "Upload your CV or portfolio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "PDF, link, or drag a file here" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mt-4 rounded-full bg-foreground text-background", children: "Choose file" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/talent/dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "rounded-full gradient-warm font-display", children: "Finish & enter dashboard" }) }) })
        ] })
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
  TalentOnboarding as component
};
