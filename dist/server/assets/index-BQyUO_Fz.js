import { U as reactExports, L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { L as Link } from "./router-BXyXzjDA.js";
import { S as SiteShell } from "./SiteShell-CvLYnWK4.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { B as Badge } from "./badge-BWxUkKm2.js";
import { C as ChallengeCard } from "./ChallengeCard-DOslt-b2.js";
import { m as motion } from "./proxy-BU9HUXss.js";
import { S as STATS, P as PARTNERS, C as CATEGORIES, a as CHALLENGES, e as TESTIMONIALS } from "./mock-BcjI2Up7.js";
import { c as createLucideIcon, S as Sparkles } from "./sparkles-C4svRH2K.js";
import { A as ArrowRight } from "./arrow-right-79a8uZgf.js";
import { U as Users } from "./users-C9-52kja.js";
import { T as Trophy } from "./trophy-Bh4dMqlN.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./x-Db4UbFx3.js";
import "./clsx-DgYk2OaC.js";
import "./calendar-Dg45qUm7.js";
const __iconNode = [
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
      key: "u4xsad"
    }
  ],
  [
    "path",
    {
      d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
      key: "676m9"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }]
];
const Rocket = createLucideIcon("rocket", __iconNode);
function CountUp({
  to,
  duration = 1.4,
  suffix = ""
}) {
  const [v, setV] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / (duration * 1e3));
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, children: [
    v.toLocaleString(),
    suffix
  ] });
}
const heroImg = "/assets/hero-collab-VS5ze0dk.png";
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl items-center gap-10 px-4 pt-12 pb-20 md:grid-cols-2 md:px-6 md:pt-20 md:pb-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0,
            y: 10
          }, animate: {
            opacity: 1,
            y: 0
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "rounded-full bg-white/70 backdrop-blur text-foreground hover:bg-white/70 border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-1 h-3.5 w-3.5 text-coral" }),
            "Innovation × Recruitment"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
            opacity: 0,
            y: 16
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.05
          }, className: "mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl", children: [
            "Transform ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Challenges" }),
            " Into",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Opportunities" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
            opacity: 0,
            y: 16
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.1
          }, className: "mt-5 max-w-xl text-lg text-muted-foreground", children: "Companies post real-world challenges. Young talents bring fresh solutions — and sometimes land their first role. One platform for innovation and recruitment." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 16
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.15
          }, className: "mt-7 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company/onboarding", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-glow", children: [
              "Post a Challenge ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/talent/onboarding", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", className: "rounded-full border-2 bg-white/70 backdrop-blur", children: "Join as Talent" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass p-4 shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-extrabold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: s.value, suffix: s.suffix }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.label })
          ] }, s.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          scale: 0.95
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          duration: 0.6
        }, className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 rounded-[40px] gradient-cool opacity-30 blur-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-[36px] glass p-3 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Diverse team collaborating on innovation challenges", width: 1280, height: 1024, className: "w-full rounded-[28px]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingBadge, { className: "left-[-12px] top-10 animate-float", emoji: "🌱", text: "80% less plastic" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingBadge, { className: "right-[-12px] top-1/3 animate-float", emoji: "🤖", text: "AI copilot live" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingBadge, { className: "left-1/4 -bottom-4 animate-float", emoji: "🎯", text: "96% match" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-muted/30 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-4 md:grid-cols-8", children: PARTNERS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center font-display text-sm font-extrabold tracking-widest text-muted-foreground", children: p }, p)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Explore", title: "Pick a theme that moves you", subtitle: "From climate to civic tech, browse challenges across the topics shaping tomorrow." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/challenges", className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-5 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: c.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-sm font-bold", children: c.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-1 opacity-70", style: {
          background: c.tint === "teal" ? "var(--teal)" : c.tint === "coral" ? "var(--coral)" : c.tint === "pink-soft" ? "var(--pink-soft)" : c.tint === "orange" ? "var(--orange)" : "var(--primary)"
        } })
      ] }, c.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 pb-20 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Featured", title: "Live challenges you can join today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/challenges", className: "hidden text-sm font-semibold text-foreground hover:underline md:inline", children: "View all →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: CHALLENGES.filter((c) => c.featured).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChallengeCard, { c }, c.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mx-auto max-w-7xl px-4 pb-20 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "How it works", title: "From spark to shipped — in three steps", centered: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-3", children: [{
        icon: Rocket,
        title: "Companies post a challenge",
        desc: "Briefs are co-designed with our team to attract the right talent.",
        color: "primary"
      }, {
        icon: Users,
        title: "Talents team up & submit",
        desc: "Form complementary teams with AI matching, then iterate openly.",
        color: "coral"
      }, {
        icon: Trophy,
        title: "Solutions win & hire",
        desc: "Winners get funded, hired, or both — with our celebration ritual.",
        color: "teal"
      }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl", style: {
          background: s.color === "primary" ? "var(--primary)" : s.color === "coral" ? "var(--coral)" : "var(--teal)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-2xl gradient-warm shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-display text-xl font-extrabold", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-xs font-bold text-muted-foreground", children: [
          "STEP 0",
          i + 1
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-warm opacity-90" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 py-20 md:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Voices", title: "A new generation of collaboration", dark: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-3", children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass p-6 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-lg font-semibold leading-snug", children: [
            "“",
            t.quote,
            "”"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: t.role })
          ] })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 py-20 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[36px] border border-border bg-card p-10 shadow-card md:p-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-24 -top-24 h-72 w-72 rounded-full gradient-cool opacity-30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-24 -bottom-24 h-72 w-72 rounded-full gradient-warm opacity-30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl font-extrabold md:text-5xl", children: [
          "Ready to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "make it real" }),
          "?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Whether you’re scoping a strategic challenge or looking for your first role, Impact Match is your launchpad." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company/onboarding", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", className: "rounded-full bg-foreground text-background", children: "Post a Challenge" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/talent/onboarding", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", className: "rounded-full border-2", children: "Join as Talent" }) })
        ] })
      ] })
    ] }) })
  ] });
}
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered,
  dark
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs font-bold uppercase tracking-widest ${dark ? "text-foreground/70" : "text-coral"}`, children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-3xl font-extrabold md:text-4xl", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: subtitle })
  ] });
}
function FloatingBadge({
  className,
  emoji,
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute rounded-2xl glass px-3 py-2 shadow-soft ${className ?? ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: emoji }),
    " ",
    text
  ] }) });
}
export {
  Landing as component
};
