import { ReactNode } from "react";
import { TopNav } from "./TopNav";
import { Footer } from "./Footer";

export function SiteShell({ children, hideFooter }: { children: ReactNode; hideFooter?: boolean }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <main>{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
