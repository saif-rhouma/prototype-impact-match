import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { TALENT_NAV } from "@/lib/nav";
import { SectionCard, StatusPill, KPI } from "@/components/site/Dash";
import { SUBMISSIONS } from "@/lib/mockFr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Plus,
  Send,
  Upload,
  Check,
  ArrowLeft,
  ArrowRight,
  FileVideo,
  FileText,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export const Route = createFileRoute("/talent/submissions")({ component: TalentSubmissions });

const STEPS = ["Informations", "Description", "Fichiers", "Vidéo", "Vérification", "Confirmation"];

function TalentSubmissions() {
  return (
    <DashboardShell title="Mes soumissions" badge="Espace talent" items={TALENT_NAV}>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPI label="Soumises" value="4" tint="primary" icon={<Send className="h-4 w-4" />} />
        <KPI label="Acceptées" value="2" tint="teal" icon={<Check className="h-4 w-4" />} />
        <KPI label="Score moyen" value="89" tint="coral" icon={<Sparkles className="h-4 w-4" />} />
        <KPI label="En cours de revue" value="1" tint="orange" />
      </div>

      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Suivez et partagez vos solutions auprès des entreprises.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-full gradient-warm font-bold text-foreground shadow-glow">
              <Plus className="mr-1 h-4 w-4" /> Nouvelle soumission
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Soumettre une solution</DialogTitle>
            </DialogHeader>
            <Wizard />
          </DialogContent>
        </Dialog>
      </div>

      <SectionCard title="Historique">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="py-3">Équipe</th>
                <th>Défi</th>
                <th>Date</th>
                <th className="text-right">Score</th>
                <th>Statut</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {SUBMISSIONS.map((s) => (
                <tr key={s.id} className="border-b border-border last:border-0 hover:bg-accent/40">
                  <td className="py-3">
                    <span className="mr-2">{s.emoji}</span>
                    <span className="font-semibold">{s.team}</span>
                  </td>
                  <td className="text-muted-foreground">{s.challenge}</td>
                  <td className="text-muted-foreground">{s.date}</td>
                  <td className="text-right font-display font-extrabold text-teal">{s.score}</td>
                  <td>
                    <StatusPill status={s.status} />
                  </td>
                  <td className="text-right">
                    <Button size="sm" variant="ghost" className="rounded-full">
                      Voir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </DashboardShell>
  );
}

function Wizard() {
  const [step, setStep] = useState(0);
  const [drag, setDrag] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-1">
        {STEPS.map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-1">
            <div
              className={`grid h-7 w-7 place-items-center rounded-full text-[11px] font-extrabold ${i <= step ? "gradient-warm shadow-glow" : "bg-muted text-muted-foreground"}`}
            >
              {i < step ? <Check className="h-3 w-3" /> : i + 1}
            </div>
            {i < STEPS.length - 1 && (
              <div className={`h-1 flex-1 rounded-full ${i < step ? "bg-primary" : "bg-border"}`} />
            )}
          </div>
        ))}
      </div>
      <div className="mt-1 text-xs font-semibold text-muted-foreground">{STEPS[step]}</div>

      <div className="mt-5 min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
          >
            {step === 0 && (
              <div className="grid gap-3">
                <Field label="Nom de la solution">
                  <Input placeholder="Pouch circulaire v2" className="rounded-2xl" />
                </Field>
                <Field label="Défi associé">
                  <Input placeholder="Emballage zéro-déchet" className="rounded-2xl" />
                </Field>
                <Field label="Équipe">
                  <Input placeholder="Loop Studio" className="rounded-2xl" />
                </Field>
              </div>
            )}
            {step === 1 && (
              <Textarea
                rows={8}
                placeholder="Décrivez votre solution, son impact et sa faisabilité…"
                className="rounded-2xl"
              />
            )}
            {step === 2 && (
              <div
                onDragEnter={(e) => {
                  e.preventDefault();
                  setDrag(true);
                }}
                onDragOver={(e) => e.preventDefault()}
                onDragLeave={() => setDrag(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDrag(false);
                  toast.success("Fichiers ajoutés");
                }}
                className={`grid place-items-center rounded-3xl border-2 border-dashed p-10 text-center transition-all ${drag ? "border-coral bg-coral/10" : "border-border bg-muted/30"}`}
              >
                <Upload className="h-8 w-8 text-coral" />
                <div className="mt-2 font-semibold">Déposez vos fichiers ici</div>
                <div className="text-xs text-muted-foreground">PDF, ZIP, images jusqu'à 50 Mo</div>
                <Button className="mt-3 rounded-full bg-foreground text-background">
                  Parcourir
                </Button>
              </div>
            )}
            {step === 3 && (
              <div className="grid gap-3">
                <Field label="Lien vidéo de présentation">
                  <Input placeholder="https://youtu.be/…" className="rounded-2xl" />
                </Field>
                <div className="grid place-items-center rounded-3xl border-2 border-dashed border-border bg-muted/30 p-8 text-center">
                  <FileVideo className="h-8 w-8 text-coral" />
                  <div className="mt-2 text-sm">…ou téléversez un fichier .mp4 (max 200 Mo)</div>
                </div>
              </div>
            )}
            {step === 4 && (
              <ul className="space-y-2">
                {[
                  ["Nom", "Pouch circulaire v2"],
                  ["Défi", "Emballage zéro-déchet"],
                  ["Fichiers", "3 fichiers (12 Mo)"],
                  ["Vidéo", "Lien YouTube"],
                ].map(([k, v]) => (
                  <li
                    key={k}
                    className="flex items-center justify-between rounded-2xl border border-border p-3 text-sm"
                  >
                    <span className="text-muted-foreground">{k}</span>
                    <span className="font-semibold">{v}</span>
                  </li>
                ))}
              </ul>
            )}
            {step === 5 && (
              <div className="grid place-items-center rounded-3xl bg-muted/30 p-10 text-center">
                <motion.div
                  initial={{ scale: 0.6, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring" }}
                  className="grid h-20 w-20 place-items-center rounded-full gradient-warm shadow-glow"
                >
                  <Check className="h-10 w-10" />
                </motion.div>
                <h3 className="mt-3 font-display text-2xl font-extrabold">Soumission envoyée !</h3>
                <p className="text-sm text-muted-foreground">
                  Votre équipe sera notifiée des retours.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <Button
          variant="ghost"
          disabled={step === 0}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Précédent
        </Button>
        {step < STEPS.length - 1 ? (
          <Button
            className="rounded-full bg-foreground text-background"
            onClick={() => setStep((s) => s + 1)}
          >
            Suivant <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        ) : (
          <Button
            className="rounded-full gradient-warm font-bold text-foreground"
            onClick={() => toast.success("Terminé !")}
          >
            Terminer
          </Button>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="mb-1 inline-block text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}
