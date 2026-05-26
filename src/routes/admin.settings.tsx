import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/DashboardShell";
import { ADMIN_NAV } from "@/lib/nav";
import { SectionCard } from "@/components/site/Dash";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/settings")({ component: AdminSettings });

function AdminSettings() {
  return (
    <DashboardShell title="Paramètres" badge="Espace admin" items={ADMIN_NAV}>
      <div className="grid gap-4 lg:grid-cols-2">
        <SectionCard title="Association">
          <div className="grid gap-3">
            <Field label="Nom">
              <Input defaultValue="Impact Match Association" className="rounded-2xl" />
            </Field>
            <Field label="Email contact">
              <Input defaultValue="hello@impactmatch.org" className="rounded-2xl" />
            </Field>
            <Field label="Site web">
              <Input defaultValue="https://impactmatch.org" className="rounded-2xl" />
            </Field>
          </div>
          <div className="mt-3 flex justify-end">
            <Button
              className="rounded-full bg-foreground text-background"
              onClick={() => toast.success("Enregistré")}
            >
              Enregistrer
            </Button>
          </div>
        </SectionCard>

        <SectionCard title="Règles de modération">
          {[
            ["Validation manuelle des entreprises", true],
            ["Détection automatique de plagiat", true],
            ["Modération IA des messages", true],
            ["Notifications signalements critiques", true],
            ["Mode maintenance", false],
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
    </DashboardShell>
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
