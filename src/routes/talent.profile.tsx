import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { TALENT_NAV } from "@/lib/nav";
import { SectionCard } from "@/components/site/Dash";
import { TALENTS } from "@/lib/mock";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Edit3, MapPin, Star, FileText, Sparkles, Download } from "lucide-react";
import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis } from "recharts";
import { motion } from "framer-motion";

export const Route = createFileRoute("/talent/profile")({ component: TalentProfile });

function TalentProfile() {
  const t = TALENTS[0];
  return (
    <DashboardShell title="Mon profil" badge="Espace talent" items={TALENT_NAV}>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card">
        <div className="absolute inset-x-0 top-0 h-32 gradient-hero" />
        <div className="relative flex flex-wrap items-end justify-between gap-4 pt-16">
          <div className="flex items-end gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="grid h-24 w-24 place-items-center rounded-3xl bg-card shadow-card text-5xl"
            >
              {t.avatar}
            </motion.div>
            <div>
              <h2 className="font-display text-3xl font-extrabold">{t.name}</h2>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <span>{t.role}</span> • <MapPin className="h-3 w-3" /> {t.city}
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {t.badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full bg-coral/10 px-2 py-0.5 text-[10px] font-bold text-coral"
                  >
                    🏅 {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-full border-2">
              <Download className="mr-1 h-4 w-4" /> CV
            </Button>
            <Button className="rounded-full bg-foreground text-background">
              <Edit3 className="mr-1 h-4 w-4" /> Modifier
            </Button>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          {[
            { l: "Score profil", v: "91" },
            { l: "Défis", v: "12" },
            { l: "Matchs", v: "4" },
            { l: "Followers", v: "238" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-muted/40 p-3 text-center">
              <div className="font-display text-2xl font-extrabold">{s.v}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Tabs defaultValue="about" className="mt-6">
        <TabsList className="rounded-full">
          <TabsTrigger value="about" className="rounded-full">
            À propos
          </TabsTrigger>
          <TabsTrigger value="portfolio" className="rounded-full">
            Portfolio
          </TabsTrigger>
          <TabsTrigger value="timeline" className="rounded-full">
            Activité
          </TabsTrigger>
          <TabsTrigger value="certifications" className="rounded-full">
            Certifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="mt-5 grid gap-4 lg:grid-cols-3">
          <SectionCard title="Compétences" className="lg:col-span-2">
            <div className="h-72">
              <ResponsiveContainer>
                <RadarChart data={t.skills}>
                  <PolarGrid stroke="var(--border)" />
                  <PolarAngleAxis dataKey="name" stroke="var(--muted-foreground)" />
                  <Radar
                    dataKey="level"
                    stroke="var(--coral)"
                    fill="var(--coral)"
                    fillOpacity={0.45}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>
          <SectionCard title="Bio">
            <p className="text-sm text-muted-foreground">
              Designer produit passionnée par la durabilité et le design d'impact. J'aime collaborer
              avec des équipes pluridisciplinaires sur des défis ambitieux.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <div>
                <span className="font-bold">Intérêts :</span> {t.interests.join(", ")}
              </div>
              <div>
                <span className="font-bold">Langues :</span> Français, Anglais, Espagnol
              </div>
              <div>
                <span className="font-bold">Disponibilité :</span> Immédiate
              </div>
            </div>
          </SectionCard>
        </TabsContent>

        <TabsContent value="portfolio" className="mt-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card shadow-card"
              >
                <div className="absolute inset-0 gradient-cool opacity-60" />
                <div className="absolute inset-0 grid place-items-center text-5xl opacity-70">
                  🎨
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white">
                  <div className="text-sm font-bold">Projet #{i}</div>
                  <div className="text-[10px] opacity-80">Design système · 2025</div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="timeline" className="mt-5">
          <SectionCard title="Historique de collaborations">
            <ol className="relative ml-3 space-y-4 border-l-2 border-border pl-5">
              {[
                {
                  d: "Juin 2025",
                  t: "Match avec Verda Foods",
                  desc: "Loop Studio · Emballage zéro-déchet",
                },
                { d: "Mai 2025", t: "Soumission notée 96/100", desc: "Défi Bloom Bank" },
                {
                  d: "Mars 2025",
                  t: "Rejoint l'équipe Northstar AI",
                  desc: "Copilot support client",
                },
                { d: "Janvier 2025", t: "Inscription Impact Match", desc: "Bienvenue 👋" },
              ].map((e, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-7 top-1.5 grid h-4 w-4 place-items-center rounded-full gradient-warm shadow-glow">
                    <Star className="h-2.5 w-2.5" />
                  </span>
                  <div className="text-xs font-bold uppercase tracking-wider text-coral">{e.d}</div>
                  <div className="font-semibold">{e.t}</div>
                  <div className="text-xs text-muted-foreground">{e.desc}</div>
                </li>
              ))}
            </ol>
          </SectionCard>
        </TabsContent>

        <TabsContent
          value="certifications"
          className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            { e: "🎓", t: "Master Design d'Impact", v: "ENSCI · 2024" },
            { e: "🏆", t: "Climate Fellow", v: "Hearth Foundation · 2025" },
            { e: "📜", t: "Certif. Design System", v: "Figma · 2024" },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl border border-border bg-card p-5 shadow-card">
              <div className="text-3xl">{c.e}</div>
              <div className="mt-2 font-display font-extrabold">{c.t}</div>
              <div className="text-xs text-muted-foreground">{c.v}</div>
            </div>
          ))}
        </TabsContent>
      </Tabs>

      <SectionCard title="CV" className="mt-6">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-muted/40 p-4">
          <div className="flex items-center gap-3">
            <FileText className="h-8 w-8 text-coral" />
            <div>
              <div className="font-semibold">Amelie_Laurent_CV.pdf</div>
              <div className="text-xs text-muted-foreground">Mis à jour le 12 juin · 1.2 Mo</div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-full border-2">
              Aperçu
            </Button>
            <Button className="rounded-full bg-foreground text-background">
              <Sparkles className="mr-1 h-4 w-4" /> Optimiser avec l'IA
            </Button>
          </div>
        </div>
      </SectionCard>
    </DashboardShell>
  );
}
