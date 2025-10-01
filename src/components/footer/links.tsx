import Link from "next/link";
import { Fragment } from "react";

export async function FooterLinks() {
  return (<Fragment>
    <div className="space-y-4">
      <h3 className="font-semibold">Navegação</h3>
      <nav className="flex flex-col gap-2 text-sm">
        <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="/a-igreja" className="text-muted-foreground hover:text-primary transition-colors">
          A Igreja
        </Link>
        <Link href="/cultos" className="text-muted-foreground hover:text-primary transition-colors">
          Cultos
        </Link>
        <Link href="/celulas" className="text-muted-foreground hover:text-primary transition-colors">
          Células
        </Link>
      </nav>
    </div>
  </Fragment>)
}