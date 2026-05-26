import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CATEGORIES } from "@/lib/mock";
import { useState } from "react";
import { Check, ArrowRight, ArrowLeft, Upload } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/talent/onboarding")({ component: TalentOnboarding });

const STEPS = ["You", "Skills", "Interests", "Portfolio"];
const SKILLS = [
  "Design",
  "Frontend",
  "Backend",
  "ML",
  "Data",
  "Product",
  "Research",
  "Marketing",
  "Writing",
  "Strategy",
];

function TalentOnboarding() {
  const [step, setStep] = useState(0);
  const [chosen, setChosen] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);

  const toggle = (arr: string[], set: (v: string[]) => void, v: string) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  return (
    <SiteShell hideFooter>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto max-w-4xl px-4 py-10 md:px-6">
          <div className="text-xs font-bold uppercase tracking-widest text-coral">For talents</div>
          <h1 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">
            Welcome — let’s craft your profile
          </h1>
          <p className="mt-2 text-muted-foreground">
            A few quick questions so we can match you with the right challenges.
          </p>

          <div className="mt-8 flex items-center gap-2">
            {STEPS.map((s, i) => (
              <div key={s} className="flex flex-1 items-center gap-2">
                <div
                  className={`grid h-9 w-9 place-items-center rounded-full font-display text-sm font-extrabold transition-all ${i <= step ? "gradient-warm shadow-glow" : "bg-muted text-muted-foreground"}`}
                >
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <div
                  className={`hidden sm:block text-sm font-semibold ${i === step ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {s}
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={`h-1 flex-1 rounded-full ${i < step ? "bg-primary" : "bg-border"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 md:px-6">
        <div className="rounded-[32px] border border-border bg-card p-8 shadow-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
              className="grid gap-4 md:grid-cols-2"
            >
              {step === 0 && (
                <>
                  <Field label="Full name">
                    <Input placeholder="Amélie Laurent" className="rounded-2xl" />
                  </Field>
                  <Field label="Role you’re after">
                    <Input placeholder="Product Designer" className="rounded-2xl" />
                  </Field>
                  <Field label="City">
                    <Input placeholder="Paris" className="rounded-2xl" />
                  </Field>
                  <Field label="Email">
                    <Input type="email" placeholder="you@email.com" className="rounded-2xl" />
                  </Field>
                  <Field label="Bio" full>
                    <Textarea
                      rows={4}
                      className="rounded-2xl"
                      placeholder="Tell us about your journey…"
                    />
                  </Field>
                </>
              )}
              {step === 1 && (
                <div className="md:col-span-2">
                  <Label className="mb-3 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Pick your skills
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.map((s) => (
                      <button
                        key={s}
                        onClick={() => toggle(chosen, setChosen, s)}
                        className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                          chosen.includes(s)
                            ? "border-transparent bg-foreground text-background"
                            : "border-border bg-muted hover:bg-accent"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="md:col-span-2">
                  <Label className="mb-3 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Pick your interests
                  </Label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {CATEGORIES.map((c) => {
                      const on = interests.includes(c.name);
                      return (
                        <button
                          key={c.name}
                          onClick={() => toggle(interests, setInterests, c.name)}
                          className={`group flex items-center gap-2 rounded-2xl border p-3 text-left text-sm transition-all ${
                            on
                              ? "border-transparent gradient-warm shadow-glow"
                              : "border-border bg-muted hover:bg-accent"
                          }`}
                        >
                          <span className="text-xl">{c.emoji}</span>
                          <span className="font-semibold">{c.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="md:col-span-2 text-center">
                  <div className="rounded-2xl border-2 border-dashed border-border p-10">
                    <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
                    <div className="mt-3 font-display text-lg font-extrabold">
                      Upload your CV or portfolio
                    </div>
                    <div className="text-sm text-muted-foreground">
                      PDF, link, or drag a file here
                    </div>
                    <Button className="mt-4 rounded-full bg-foreground text-background">
                      Choose file
                    </Button>
                  </div>
                  <div className="mt-6">
                    <Link to="/talent/dashboard">
                      <Button className="rounded-full gradient-warm font-display">
                        Finish & enter dashboard
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {step < 3 && (
            <div className="mt-6 flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
              >
                <ArrowLeft className="mr-1 h-4 w-4" /> Back
              </Button>
              <Button
                className="rounded-full bg-foreground text-background"
                onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
              >
                Continue <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <Label className="mb-1 inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}
