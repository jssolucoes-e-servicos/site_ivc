import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Calendar, Church, Heart, MapPin, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-500 to-cyan-700 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">Bem-vindo à Igreja Viva em Células</h1>
            <p className="text-xl md:text-2xl text-cyan-50 text-pretty">
              Uma comunidade viva, conectada em células, transformando vidas através do amor de Cristo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-cyan-50">
                <Link href="/celulas">Encontre uma Célula</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/cultos">Conheça Nossos Cultos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que fazer parte?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra como você pode crescer espiritualmente e fazer parte de uma comunidade acolhedora
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-cyan-500 transition-colors">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold">Comunidade</h3>
                <p className="text-muted-foreground">
                  Conecte-se com pessoas que compartilham a mesma fé e valores em nossas células
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-500 transition-colors">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold">Crescimento</h3>
                <p className="text-muted-foreground">
                  Cresça espiritualmente através de estudos bíblicos e momentos de adoração
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-500 transition-colors">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                  <Church className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold">Propósito</h3>
                <p className="text-muted-foreground">
                  Descubra seu propósito e use seus dons para servir ao Reino de Deus
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cultos Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Cultos</h2>
            <p className="text-lg text-muted-foreground">Venha adorar conosco e experimentar a presença de Deus</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-cyan-600" />
                  <h3 className="text-2xl font-semibold">Culto de Adoração</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">Quinta-feira</span>
                    às 20h
                  </p>
                  <p className="text-sm">
                    Um momento especial de louvor e adoração, onde buscamos a presença de Deus através da música e da
                    palavra.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-cyan-600" />
                  <h3 className="text-2xl font-semibold">Culto da Família</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">Domingo</span>
                    às 19h
                  </p>
                  <p className="text-sm">
                    Culto especial para toda a família, com ministração da palavra e atividades para todas as idades.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Venha nos visitar</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-muted-foreground">
                      Av. Dr. João Dentice, 241
                      <br />
                      Restinga, Porto Alegre - RS
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Estacionamento</p>
                    <p className="text-muted-foreground">Estacionamento gratuito disponível no local</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                <Link href="/celulas/localizar">Encontre uma Célula Perto de Você</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg h-[400px] flex items-center justify-center">
              <MapPin className="h-16 w-16 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-cyan-600 text-white">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Faça parte da nossa família</h2>
          <p className="text-xl text-cyan-50 max-w-2xl mx-auto">
            Junte-se a nós e descubra o que significa viver em comunidade, crescer na fé e servir com amor
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-cyan-50">
            <Link href="/celulas">Encontre sua Célula</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
