import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/challenges", label: "Challenges" },
  { to: "/talents", label: "Talents" },
  { to: "/teams", label: "Teams" },
  { to: "/recruitment", label: "Recruitment" },
  { to: "/success-stories", label: "Stories" },
];

export function TopNav() {
  const { location } = useRouterState();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-2xl gradient-warm shadow-glow">
            <Sparkles className="h-5 w-5 text-foreground" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">
            Impact<span className="text-coral">Match</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active =
              location.pathname === item.to ||
              (item.to !== "/" && location.pathname.startsWith(item.to));
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all hover:bg-accent ${
                  active ? "bg-accent text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link to="/auth">
            <Button variant="ghost" className="rounded-full">
              Sign in
            </Button>
          </Link>
          <Link to="/company/onboarding">
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
              Post a challenge
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-full p-2 glass"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border glass">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2 text-sm font-medium hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Link to="/auth" className="flex-1">
                <Button variant="outline" className="w-full rounded-full">
                  Sign in
                </Button>
              </Link>
              <Link to="/company/onboarding" className="flex-1">
                <Button className="w-full rounded-full bg-foreground text-background">Post</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
