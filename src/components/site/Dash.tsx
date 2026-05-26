import { ReactNode } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { STATUS_TINT } from "@/lib/nav";

export function KPI({
  label,
  value,
  tint = "primary",
  delta,
  icon,
  spark,
}: {
  label: string;
  value: string | number;
  tint?: string;
  delta?: string;
  icon?: ReactNode;
  spark?: ReactNode;
}) {
  const color = `var(--${tint === "primary" ? "primary" : tint})`;
  const isUp = delta?.startsWith("+");
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-card"
    >
      <div
        className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-25 blur-2xl"
        style={{ background: color }}
      />
      <div className="relative flex items-center justify-between">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        {icon && (
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-accent" style={{ color }}>
            {icon}
          </span>
        )}
      </div>
      <div className="mt-2 font-display text-3xl font-extrabold">{value}</div>
      <div className="mt-1 flex items-center justify-between">
        {delta ? (
          <div
            className={`flex items-center gap-1 text-xs font-semibold ${isUp ? "text-teal" : "text-coral"}`}
          >
            {isUp ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
            {delta}
          </div>
        ) : (
          <span />
        )}
        {spark && <div className="h-8 w-20">{spark}</div>}
      </div>
    </motion.div>
  );
}

export function SectionCard({
  title,
  action,
  children,
  className = "",
}: {
  title: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-3xl border border-border bg-card p-5 shadow-card ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="font-display text-base font-extrabold">{title}</div>
        {action}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function StatusPill({ status }: { status: string }) {
  const tint = STATUS_TINT[status] ?? "muted";
  const bg =
    tint === "teal"
      ? "bg-teal text-teal-foreground"
      : tint === "coral"
        ? "bg-coral text-coral-foreground"
        : tint === "orange"
          ? "bg-orange text-foreground"
          : tint === "primary"
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${bg}`}
    >
      {status}
    </span>
  );
}

export function EmptyState({
  title,
  desc,
  action,
}: {
  title: string;
  desc: string;
  action?: ReactNode;
}) {
  return (
    <div className="grid place-items-center rounded-3xl border border-dashed border-border bg-muted/30 p-10 text-center">
      <div className="text-5xl">✨</div>
      <h3 className="mt-3 font-display text-lg font-extrabold">{title}</h3>
      <p className="mt-1 max-w-md text-sm text-muted-foreground">{desc}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
