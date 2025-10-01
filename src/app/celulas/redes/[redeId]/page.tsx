import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, ArrowLeft, MapPin, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { redes, celulas } from "@/lib/celulas-data"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return redes.map((rede) => ({
    redeId: rede.id,
  }))
}

export default function RedeDetailPage({ params }: { params: { redeId: string } }) {
  const rede = redes.find((r) => r.id === params.redeId)

  if (!rede) {
    notFound()
  }

  const celulasRede = celulas.filter((c) => c.rede === rede.id)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className={`${rede.cor} text-white py-16 md:py-24`}>
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-6">
            <Button asChild variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <Link href="/celulas">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para Células
              </Link>
            </Button>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{rede.nome}</h1>
            </div>
            <p className="text-xl text-white/90">{rede.descricao}</p>
          </div>
        </div>
      </section>

      {/* Informações da Rede */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-2xl font-bold">Informações da Rede</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Público-alvo</p>
                    <p className="font-semibold">{rede.publico}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Supervisor</p>
                    <p className="font-semibold">{rede.supervisor}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lista de Células */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Células desta Rede</h2>
              {celulasRede.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {celulasRede.map((celula) => (
                    <Card key={celula.id}>
                      <CardContent className="pt-6 space-y-4">
                        <h3 className="text-xl font-bold">{celula.nome}</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-start gap-2">
                            <Users className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-foreground">Líder</p>
                              <p>{celula.lider}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-foreground">Endereço</p>
                              <p>
                                {celula.endereco}, {celula.bairro}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Calendar className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-foreground">Dia</p>
                              <p>{celula.dia}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Clock className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-foreground">Horário</p>
                              <p>{celula.horario}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="pt-6 text-center text-muted-foreground">
                    <p>Novas células em breve! Entre em contato para mais informações.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-bold">Quer participar?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco ou use nosso localizador para encontrar a célula mais próxima de você
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
              <Link href="/celulas/localizar">Localizar Célula</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/celulas">Ver Todas as Redes</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
