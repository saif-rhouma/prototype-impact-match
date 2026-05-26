import { U as reactExports, L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { L as Link } from "./router-BXyXzjDA.js";
import { c as createLucideIcon, u as useRouterState, S as Sparkles } from "./sparkles-C4svRH2K.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { X } from "./x-Db4UbFx3.js";
const __iconNode = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode);
const NAV = [
  { to: "/", label: "Home" },
  { to: "/challenges", label: "Challenges" },
  { to: "/talents", label: "Talents" },
  { to: "/teams", label: "Teams" },
  { to: "/recruitment", label: "Recruitment" },
  { to: "/success-stories", label: "Stories" }
];
function TopNav() {
  const { location } = useRouterState();
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `sticky top-0 z-50 transition-all ${scrolled ? "glass shadow-soft" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-2xl gradient-warm shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-extrabold tracking-tight", children: [
              "Impact",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "Match" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 md:flex", children: NAV.map((item) => {
            const active = location.pathname === item.to || item.to !== "/" && location.pathname.startsWith(item.to);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: item.to,
                className: `rounded-full px-3 py-1.5 text-sm font-medium transition-all hover:bg-accent ${active ? "bg-accent text-foreground" : "text-muted-foreground"}`,
                children: item.label
              },
              item.to
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-2 md:flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", className: "rounded-full", children: "Sign in" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company/onboarding", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "rounded-full bg-foreground text-background hover:bg-foreground/90", children: "Post a challenge" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen((v) => !v),
              className: "md:hidden rounded-full p-2 glass",
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-border glass", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3", children: [
          NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.to,
              onClick: () => setOpen(false),
              className: "rounded-2xl px-3 py-2 text-sm font-medium hover:bg-accent",
              children: item.label
            },
            item.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "w-full rounded-full", children: "Sign in" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company/onboarding", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full rounded-full bg-foreground text-background", children: "Post" }) })
          ] })
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-24 border-t border-border bg-muted/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-2xl gradient-warm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-extrabold", children: [
            "Impact",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-coral", children: "Match" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-xs text-sm text-muted-foreground", children: "Where companies and young talents turn challenges into opportunities." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FooterCol,
        {
          title: "Platform",
          links: [
            ["Challenges", "/challenges"],
            ["Talents", "/talents"],
            ["Teams", "/teams"],
            ["Recruitment", "/recruitment"]
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FooterCol,
        {
          title: "Resources",
          links: [
            ["Success stories", "/success-stories"],
            ["Admin", "/admin"],
            ["Company onboarding", "/company/onboarding"],
            ["Talent onboarding", "/talent/onboarding"]
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FooterCol,
        {
          title: "Account",
          links: [
            ["Sign in", "/auth"],
            ["Company dashboard", "/company/dashboard"],
            ["Talent dashboard", "/talent/dashboard"]
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border py-6 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Impact Match — Built with intention."
    ] })
  ] });
}
function FooterCol({ title, links }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm font-bold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: links.map(([l, to]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "hover:text-foreground", children: l }) }, to)) })
  ] });
}
function SiteShell({ children, hideFooter }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children }),
    !hideFooter && /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  SiteShell as S
};
