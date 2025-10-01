import { FooterContact } from "./contact"
import { FooterCults } from "./cults"
import { FooterIdentify } from "./identify"
import { FooterLinks } from "./links"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50 items-center content-center">
      <div className="container py-12 items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterIdentify />
          <FooterLinks />
          <FooterContact />
          <FooterCults />
        </div>

        <div className="mt-8 pt-8 border-t text-center items-center  text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Igreja Viva em Células. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
