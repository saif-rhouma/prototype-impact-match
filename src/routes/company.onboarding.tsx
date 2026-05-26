import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/company/onboarding")({ component: CompanyOnboarding });

const STEPS = ["Company", "Mission", "Innovation", "Review"];

function CompanyOnboarding() {
  const [step, setStep] = useState(0);

  return (
    <SiteShell hideFooter>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto max-w-4xl px-4 py-10 md:px-6">
          <div className="text-xs font-bold uppercase tracking-widest text-coral">
            For companies
          </div>
          <h1 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">
            Set up your company profile
          </h1>
          <p className="mt-2 text-muted-foreground">
            Takes 3 minutes. You can come back and edit anytime.
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
                  <Field label="Company name">
                    <Input placeholder="Verda Foods" className="rounded-2xl" />
                  </Field>
                  <Field label="Industry">
                    <Input placeholder="Food & Beverage" className="rounded-2xl" />
                  </Field>
                  <Field label="Company size">
                    <Input placeholder="51-200" className="rounded-2xl" />
                  </Field>
                  <Field label="Website">
                    <Input placeholder="https://" className="rounded-2xl" />
                  </Field>
                  <Field label="Description" full>
                    <Textarea
                      placeholder="Tell us about your company…"
                      className="rounded-2xl"
                      rows={4}
                    />
                  </Field>
                </>
              )}
              {step === 1 && (
                <>
                  <Field label="CSR / RSE objectives" full>
                    <Textarea
                      placeholder="Your sustainability and social commitments…"
                      className="rounded-2xl"
                      rows={4}
                    />
                  </Field>
                  <Field label="Primary contact name">
                    <Input placeholder="Camille Dubois" className="rounded-2xl" />
                  </Field>
                  <Field label="Contact email">
                    <Input type="email" placeholder="camille@verda.co" className="rounded-2xl" />
                  </Field>
                </>
              )}
              {step === 2 && (
                <>
                  <Field label="Innovation themes" full>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Sustainability",
                        "AI",
                        "Health",
                        "Education",
                        "Smart Cities",
                        "Green Energy",
                        "Social Innovation",
                      ].map((t) => (
                        <button
                          key={t}
                          className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-semibold hover:bg-accent"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </Field>
                  <Field label="Recruitment interests" full>
                    <div className="flex flex-wrap gap-2">
                      {["Internships", "Apprenticeships", "Full-time", "Freelance"].map((t) => (
                        <button
                          key={t}
                          className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-semibold hover:bg-accent"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </Field>
                </>
              )}
              {step === 3 && (
                <div className="md:col-span-2">
                  <div className="rounded-2xl bg-muted p-6 text-center">
                    <div className="text-4xl">🎉</div>
                    <h3 className="mt-3 font-display text-2xl font-extrabold">You’re all set</h3>
                    <p className="text-muted-foreground">
                      Your profile is ready. Now post your first challenge or browse talents.
                    </p>
                    <div className="mt-5 flex flex-wrap justify-center gap-2">
                      <Link to="/company/dashboard">
                        <Button className="rounded-full bg-foreground text-background">
                          Go to dashboard
                        </Button>
                      </Link>
                      <Link to="/talents">
                        <Button variant="outline" className="rounded-full border-2">
                          Browse talents
                        </Button>
                      </Link>
                    </div>
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
