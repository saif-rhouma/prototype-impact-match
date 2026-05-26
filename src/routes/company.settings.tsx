import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { COMPANY_NAV } from "@/lib/nav";
import { SectionCard } from "@/components/site/Dash";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/company/settings")({ component: CompanySettings });

function CompanySettings() {
  return (
    <DashboardShell title="Paramètres" badge="Espace entreprise" items={COMPANY_NAV}>
      <div className="grid gap-4 lg:grid-cols-3">
        <SectionCard title="Profil entreprise" className="lg:col-span-2">
          <div className="grid gap-3 md:grid-cols-2">
            <Field label="Nom">
              <Input defaultValue="Verda Foods" className="rounded-2xl" />
            </Field>
            <Field label="Secteur">
              <Input defaultValue="Agro-alimentaire" className="rounded-2xl" />
            </Field>
            <Field label="Site web">
              <Input defaultValue="https://verda.co" className="rounded-2xl" />
            </Field>
            <Field label="Taille">
              <Input defaultValue="51-200" className="rounded-2xl" />
            </Field>
            <Field label="Description" full>
              <Textarea
                rows={4}
                defaultValue="Nous réinventons l'alimentation pour un monde sans déchet."
                className="rounded-2xl"
              />
            </Field>
          </div>
          <div className="mt-4 flex justify-end">
            <Button
              className="rounded-full bg-foreground text-background"
              onClick={() => toast.success("Profil mis à jour")}
            >
              Enregistrer
            </Button>
          </div>
        </SectionCard>

        <SectionCard title="Notifications">
          {[
            ["Nouvelles candidatures", true],
            ["Soumissions de défis", true],
            ["Messages directs", true],
            ["Rapport hebdo", false],
            ["Promotions plateforme", false],
          ].map(([k, v]) => (
            <div
              key={k as string}
              className="flex items-center justify-between border-t border-border py-3 first:border-0 first:pt-0"
            >
              <span className="text-sm font-medium">{k}</span>
              <Switch defaultChecked={v as boolean} />
            </div>
          ))}
        </SectionCard>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <SectionCard title="Équipe & permissions">
          <ul className="space-y-2">
            {[
              { n: "Camille D.", r: "Admin", a: "👩🏼‍💼" },
              { n: "Yann T.", r: "Recruteur", a: "👨🏻‍💼" },
              { n: "Sophie M.", r: "Lecteur", a: "👩🏽‍💼" },
            ].map((m) => (
              <li
                key={m.n}
                className="flex items-center gap-3 rounded-2xl border border-border p-3"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-xl">
                  {m.a}
                </span>
                <div className="flex-1">
                  <div className="font-semibold">{m.n}</div>
                  <div className="text-xs text-muted-foreground">{m.r}</div>
                </div>
                <Button size="sm" variant="ghost" className="rounded-full">
                  Modifier
                </Button>
              </li>
            ))}
          </ul>
          <Button className="mt-3 w-full rounded-full bg-foreground text-background">
            Inviter un membre
          </Button>
        </SectionCard>

        <SectionCard title="Facturation">
          <div className="rounded-2xl gradient-hero p-5">
            <div className="text-xs font-bold uppercase tracking-wider text-coral">Plan Impact</div>
            <div className="font-display text-2xl font-extrabold">490 € / mois</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Défis illimités, recrutement avancé, analytics premium.
            </p>
            <Button className="mt-3 rounded-full bg-foreground text-background">
              Gérer l'abonnement
            </Button>
          </div>
        </SectionCard>
      </div>
    </DashboardShell>
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
