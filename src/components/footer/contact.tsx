import { Mail, MapPin, Phone } from "lucide-react";
import { Fragment } from "react";

export async function FooterContact() {
  return (<Fragment>
    <div className="space-y-4">
      <h3 className="font-semibold">Contato</h3>
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-muted-foreground">
            Av. Dr. João Dentice, 241
            <br />
            Restinga, Porto Alegre - RS
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-primary flex-shrink-0" />
          <span className="text-muted-foreground">(51) 936.183.218</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary flex-shrink-0" />
          <span className="text-muted-foreground">contato@igrejavivaemcelulas.com.br</span>
        </div>
      </div>
    </div>
  </Fragment>)
}