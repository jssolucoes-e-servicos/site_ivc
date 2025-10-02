import { CelulaMap } from "@/components/celula-map"
import { MapPin } from "lucide-react"
import Script from "next/script"

export default function LocalizarCelulaPage() {
  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="beforeInteractive"
      />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-500 to-cyan-700 text-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <MapPin className="h-16 w-16 mx-auto" />
              <h1 className="text-4xl md:text-5xl font-bold">Localizar Célula</h1>
              <p className="text-xl text-cyan-50">Encontre a célula mais próxima de você</p>
            </div>
          </div>
        </section>

        {/* Mapa e Busca */}
        <section className="py-16 md:py-24">
          <div className="container">
            <CelulaMap />
          </div>
        </section>

        {/* Informações Adicionais */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Não encontrou uma célula próxima?</h2>
              <p className="text-lg text-muted-foreground">
                Entre em contato conosco! Estamos sempre abrindo novas células e podemos ajudá-lo a encontrar a melhor
                opção para você ou até mesmo iniciar uma nova célula na sua região.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <div className="text-center">
                  <p className="font-semibold">Telefone</p>
                  <p className="text-muted-foreground">(51) 99999-9999</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">contato@igrejaviva.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
