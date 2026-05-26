import { U as reactExports, L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { L as Link } from "./router-BXyXzjDA.js";
import { S as SiteShell } from "./SiteShell-CvLYnWK4.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { I as Input } from "./input-BnVki95y.js";
import { L as Label } from "./label-BwB9AbVm.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./sparkles-C4svRH2K.js";
import "./x-Db4UbFx3.js";
import "./clsx-DgYk2OaC.js";
function AuthPage() {
  const [mode, setMode] = reactExports.useState("signin");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteShell, { hideFooter: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[80vh] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-5xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-coral", children: "Welcome" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-2 font-display text-4xl font-extrabold md:text-5xl", children: [
          "Join the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Impact Match" }),
          " community"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-md", children: "Solve, learn, and get hired through innovation challenges that matter." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "🎯 Personalized challenge recommendations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "🤝 Team up with complementary skills" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "🚀 Win prizes, badges, and offers" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[32px] border border-border bg-card p-8 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex gap-1 rounded-full bg-muted p-1 text-sm font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode("signin"), className: `flex-1 rounded-full py-1.5 transition-all ${mode === "signin" ? "bg-foreground text-background" : "text-muted-foreground"}`, children: "Sign in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode("signup"), className: `flex-1 rounded-full py-1.5 transition-all ${mode === "signup" ? "bg-foreground text-background" : "text-muted-foreground"}`, children: "Sign up" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          mode === "signup" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "rounded-2xl", placeholder: "Your name" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "rounded-2xl", type: "email", placeholder: "you@email.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "rounded-2xl", type: "password", placeholder: "••••••••" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full rounded-full bg-foreground text-background", children: mode === "signin" ? "Sign in" : "Create account" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-xs text-muted-foreground", children: "or continue with" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "rounded-full border-2", children: "Google" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "rounded-full border-2", children: "Apple" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-xs text-muted-foreground", children: [
            "New here?",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/talent/onboarding", className: "font-semibold text-foreground", children: "Join as talent" }),
            " ",
            "·",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company/onboarding", className: "font-semibold text-foreground", children: "Join as company" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  AuthPage as component
};
