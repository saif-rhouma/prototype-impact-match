import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-2xl gradient-warm">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-extrabold">
              Impact<span className="text-coral">Match</span>
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Where companies and young talents turn challenges into opportunities.
          </p>
        </div>
        <FooterCol
          title="Platform"
          links={[
            ["Challenges", "/challenges"],
            ["Talents", "/talents"],
            ["Teams", "/teams"],
            ["Recruitment", "/recruitment"],
          ]}
        />
        <FooterCol
          title="Resources"
          links={[
            ["Success stories", "/success-stories"],
            ["Admin", "/admin"],
            ["Company onboarding", "/company/onboarding"],
            ["Talent onboarding", "/talent/onboarding"],
          ]}
        />
        <FooterCol
          title="Account"
          links={[
            ["Sign in", "/auth"],
            ["Company dashboard", "/company/dashboard"],
            ["Talent dashboard", "/talent/dashboard"],
          ]}
        />
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Impact Match — Built with intention.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="font-display text-sm font-bold">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {links.map(([l, to]) => (
          <li key={to}>
            <Link to={to} className="hover:text-foreground">
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
