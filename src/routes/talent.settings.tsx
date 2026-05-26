import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { TALENT_NAV } from "@/lib/nav";
import { SectionCard } from "@/components/site/Dash";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/talent/settings")({ component: TalentSettings });

function TalentSettings() {
  return (
    <DashboardShell title="Paramètres" badge="Espace talent" items={TALENT_NAV}>
      <div className="grid gap-4 lg:grid-cols-3">
        <SectionCard title="Informations personnelles" className="lg:col-span-2">
          <div className="grid gap-3 md:grid-cols-2">
            <Field label="Prénom">
              <Input defaultValue="Amélie" className="rounded-2xl" />
            </Field>
            <Field label="Nom">
              <Input defaultValue="Laurent" className="rounded-2xl" />
            </Field>
            <Field label="Email">
              <Input defaultValue="amelie@example.com" className="rounded-2xl" />
            </Field>
            <Field label="Ville">
              <Input defaultValue="Paris" className="rounded-2xl" />
            </Field>
            <Field label="Bio" full>
              <Textarea
                rows={4}
                defaultValue="Designer produit, passionnée par l'impact."
                className="rounded-2xl"
              />
            </Field>
          </div>
          <div className="mt-4 flex justify-end">
            <Button
              className="rounded-full bg-foreground text-background"
              onClick={() => toast.success("Profil enregistré")}
            >
              Enregistrer
            </Button>
          </div>
        </SectionCard>

        <SectionCard title="Préférences">
          {[
            ["Profil visible par les entreprises", true],
            ["Recevoir des recommandations IA", true],
            ["Notifications par email", true],
            ["Mode disponible", true],
            ["Newsletter mensuelle", false],
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

      <SectionCard title="Sécurité" className="mt-4">
        <div className="grid gap-3 md:grid-cols-2">
          <Field label="Nouveau mot de passe">
            <Input type="password" placeholder="••••••••" className="rounded-2xl" />
          </Field>
          <Field label="Confirmation">
            <Input type="password" placeholder="••••••••" className="rounded-2xl" />
          </Field>
        </div>
        <div className="mt-3 flex justify-end">
          <Button variant="outline" className="rounded-full border-2">
            Mettre à jour
          </Button>
        </div>
      </SectionCard>
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
