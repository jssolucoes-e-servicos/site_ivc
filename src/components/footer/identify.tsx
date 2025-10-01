import { Church } from "lucide-react";
import { Fragment } from "react";

export async function FooterIdentify() {
  return (
    <Fragment><div className="space-y-4">
      <div className="flex items-center gap-2">
        <Church className="h-6 w-6 text-primary" />
        <span className="font-bold text-lg text-primary">Igreja Viva em Células</span>
      </div>
      <p className="text-sm text-muted-foreground">
        Uma igreja viva, conectada em células, transformando vidas através do amor de Cristo.
      </p>
    </div>
    </Fragment>)
}