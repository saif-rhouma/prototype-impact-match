import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const Route = createFileRoute("/auth")({ component: AuthPage });

function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  return (
    <SiteShell hideFooter>
      <section className="relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto grid max-w-5xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:px-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-coral">Welcome</div>
            <h1 className="mt-2 font-display text-4xl font-extrabold md:text-5xl">
              Join the <span className="gradient-text">Impact Match</span> community
            </h1>
            <p className="mt-3 text-muted-foreground max-w-md">
              Solve, learn, and get hired through innovation challenges that matter.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>🎯 Personalized challenge recommendations</li>
              <li>🤝 Team up with complementary skills</li>
              <li>🚀 Win prizes, badges, and offers</li>
            </ul>
          </div>
          <div className="rounded-[32px] border border-border bg-card p-8 shadow-card">
            <div className="mb-4 flex gap-1 rounded-full bg-muted p-1 text-sm font-semibold">
              <button
                onClick={() => setMode("signin")}
                className={`flex-1 rounded-full py-1.5 transition-all ${mode === "signin" ? "bg-foreground text-background" : "text-muted-foreground"}`}
              >
                Sign in
              </button>
              <button
                onClick={() => setMode("signup")}
                className={`flex-1 rounded-full py-1.5 transition-all ${mode === "signup" ? "bg-foreground text-background" : "text-muted-foreground"}`}
              >
                Sign up
              </button>
            </div>
            <div className="space-y-3">
              {mode === "signup" && (
                <div>
                  <Label className="text-xs">Name</Label>
                  <Input className="rounded-2xl" placeholder="Your name" />
                </div>
              )}
              <div>
                <Label className="text-xs">Email</Label>
                <Input className="rounded-2xl" type="email" placeholder="you@email.com" />
              </div>
              <div>
                <Label className="text-xs">Password</Label>
                <Input className="rounded-2xl" type="password" placeholder="••••••••" />
              </div>
              <Button className="w-full rounded-full bg-foreground text-background">
                {mode === "signin" ? "Sign in" : "Create account"}
              </Button>
              <div className="text-center text-xs text-muted-foreground">or continue with</div>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="rounded-full border-2">
                  Google
                </Button>
                <Button variant="outline" className="rounded-full border-2">
                  Apple
                </Button>
              </div>
              <div className="text-center text-xs text-muted-foreground">
                New here?{" "}
                <Link to="/talent/onboarding" className="font-semibold text-foreground">
                  Join as talent
                </Link>{" "}
                ·{" "}
                <Link to="/company/onboarding" className="font-semibold text-foreground">
                  Join as company
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
