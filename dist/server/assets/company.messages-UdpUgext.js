import { U as reactExports, L as jsxRuntimeExports } from "./server-6dk3nzZl.js";
import { D as DashboardShell, C as COMPANY_NAV } from "./nav-F0L5CvbD.js";
import { M as MESSAGES, T as TEAM_CHAT } from "./mockFr-DOSkJMeA.js";
import { I as Input } from "./input-BnVki95y.js";
import { B as Button } from "./button-BM5-xbQ5.js";
import { t as toast } from "./index-CTsKZJB0.js";
import { S as Search } from "./search-B9ReI4BR.js";
import { P as Paperclip } from "./paperclip-B6t1W0hx.js";
import { S as Send } from "./send-BriFhOZj.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BXyXzjDA.js";
import "./sparkles-C4svRH2K.js";
import "./building-2-62ZqTlH-.js";
import "./users-C9-52kja.js";
import "./clsx-DgYk2OaC.js";
function CompanyMessages() {
  const [sel, setSel] = reactExports.useState(MESSAGES[0].id);
  const [text, setText] = reactExports.useState("");
  const active = MESSAGES.find((m) => m.id === sel);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardShell, { title: "Messages", badge: "Espace entreprise", items: COMPANY_NAV, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid h-[calc(100vh-180px)] gap-4 md:grid-cols-[320px_1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-3 flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Rechercher…", className: "rounded-full pl-9" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 flex-1 overflow-y-auto space-y-1", children: MESSAGES.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSel(m.id), className: `flex w-full items-center gap-3 rounded-2xl p-2 text-left transition-all ${sel === m.id ? "bg-accent" : "hover:bg-accent/50"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-xl", children: m.avatar }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-semibold", children: m.from }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: m.time })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs text-muted-foreground", children: m.preview })
        ] }),
        m.unread && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 shrink-0 rounded-full bg-coral" })
      ] }) }, m.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col rounded-3xl border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-border p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-full bg-accent text-xl", children: active.avatar }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: active.from }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-teal", children: "En ligne" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "rounded-full border-2", children: "Profil" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 space-y-3 overflow-y-auto p-4", children: TEAM_CHAT.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-end gap-2 ${t.mine ? "justify-end" : ""}`, children: [
        !t.mine && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-full bg-accent text-base", children: t.avatar }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[70%] rounded-3xl px-4 py-2 ${t.mine ? "gradient-warm text-foreground" : "bg-muted"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: t.msg }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[10px] opacity-70", children: t.time })
        ] })
      ] }, t.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        toast.success("Message envoyé");
        setText("");
      }, className: "flex items-center gap-2 border-t border-border p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", size: "icon", variant: "ghost", className: "rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: text, onChange: (e) => setText(e.target.value), placeholder: "Écrire un message…", className: "rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "rounded-full bg-foreground text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }) })
      ] })
    ] })
  ] }) });
}
export {
  CompanyMessages as component
};
