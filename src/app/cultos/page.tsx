import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Music, BookOpen, Users, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CultosPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-500 to-cyan-700 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Nossos Cultos</h1>
            <p className="text-xl text-cyan-50">Momentos especiais de adoração, comunhão e edificação espiritual</p>
          </div>
        </div>
      </section>

      {/* Cultos Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Culto de Adoração */}
            <Card className="border-2 border-cyan-200">
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Music className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h2 className="text-3xl font-bold">Culto de Adoração</h2>
                  <div className="flex items-center gap-2 text-lg">
                    <Calendar className="h-5 w-5 text-cyan-600" />
                    <span className="font-semibold">Quinta-feira às 20h</span>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    O Culto de Adoração é um momento especial dedicado à busca da presença de Deus através do louvor e
                    da adoração. É uma noite onde nos reunimos para exaltar o nome do Senhor e experimentar Sua glória.
                  </p>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-cyan-600" />O que esperar:
                    </h3>
                    <ul className="space-y-2 ml-7">
                      <li>• Louvor e adoração intensos</li>
                      <li>• Ministração da Palavra de Deus</li>
                      <li>• Momento de oração e intercessão</li>
                      <li>• Ambiente de intimidade com Deus</li>
                      <li>• Comunhão entre os irmãos</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm">
                      <strong className="text-foreground">Duração:</strong> Aproximadamente 2 horas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Culto da Família */}
            <Card className="border-2 border-cyan-200">
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h2 className="text-3xl font-bold">Culto da Família</h2>
                  <div className="flex items-center gap-2 text-lg">
                    <Calendar className="h-5 w-5 text-cyan-600" />
                    <span className="font-semibold">Domingo às 19h</span>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    O Culto da Família é o momento onde toda a igreja se reúne para celebrar e adorar juntos. É um culto
                    especial pensado para todas as idades, com atividades para crianças e mensagens que edificam toda a
                    família.
                  </p>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-cyan-600" />O que esperar:
                    </h3>
                    <ul className="space-y-2 ml-7">
                      <li>• Louvor para toda a família</li>
                      <li>• Mensagem bíblica aplicada à vida</li>
                      <li>• Ministério infantil simultâneo</li>
                      <li>• Testemunhos e celebrações</li>
                      <li>• Momento de comunhão após o culto</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm">
                      <strong className="text-foreground">Duração:</strong> Aproximadamente 2 horas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Informações Práticas */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Informações Práticas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-cyan-600" />
                    <h3 className="text-xl font-semibold">Localização</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Av. Dr. João Dentice, 241
                    <br />
                    Restinga, Porto Alegre - RS
                  </p>
                  <p className="text-sm text-muted-foreground">Estacionamento gratuito disponível</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-cyan-600" />
                    <h3 className="text-xl font-semibold">Chegue Cedo</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Recomendamos chegar 15 minutos antes do início do culto para encontrar um bom lugar e se preparar
                    para o momento de adoração.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-cyan-600" />
                    <h3 className="text-xl font-semibold">Primeira Visita?</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Se é sua primeira vez, fique tranquilo! Nossa equipe de recepção estará pronta para recebê-lo e
                    ajudá-lo com qualquer dúvida.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-cyan-600" />
                    <h3 className="text-xl font-semibold">Traga sua Bíblia</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Incentivamos todos a trazerem suas Bíblias para acompanhar a leitura e ministração da Palavra.
                    Também temos Bíblias disponíveis no local.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Venha nos visitar!</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Será um prazer recebê-lo em nossos cultos. Venha experimentar a presença de Deus e fazer parte da nossa
            família.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
              <Link href="/celulas">Encontre uma Célula</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/a-igreja">Conheça a Igreja</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
