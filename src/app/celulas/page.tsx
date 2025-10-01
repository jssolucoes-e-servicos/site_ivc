import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, BookOpen, Home, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { redes } from "@/lib/celulas-data"

export default function CelulasPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-500 to-cyan-700 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Células</h1>
            <p className="text-xl text-cyan-50">Pequenos grupos, grandes transformações</p>
          </div>
        </div>
      </section>

      {/* O que são Células */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <Users className="h-16 w-16 text-cyan-600 mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold">O que são Células?</h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Células são pequenos grupos de pessoas que se reúnem regularmente em casas para estudar a Bíblia, orar,
                compartilhar a vida e crescer juntos na fé. É onde a igreja acontece de forma mais íntima e pessoal.
              </p>
              <p>
                Nas células, você não é apenas mais um número. Você é conhecido, amado e cuidado. É um espaço seguro
                para fazer perguntas, compartilhar lutas, celebrar vitórias e desenvolver relacionamentos verdadeiros.
              </p>
              <p>
                Acreditamos que é nos pequenos grupos que as pessoas realmente se conectam com Deus e umas com as
                outras, experimentando a verdadeira comunhão cristã descrita no livro de Atos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios das Células */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que participar de uma Célula?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold">Relacionamentos</h3>
                <p className="text-sm text-muted-foreground">
                  Desenvolva amizades verdadeiras e duradouras com pessoas que compartilham a mesma fé
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold">Crescimento</h3>
                <p className="text-sm text-muted-foreground">
                  Aprofunde seu conhecimento bíblico e cresça espiritualmente através do estudo e discussão
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold">Cuidado</h3>
                <p className="text-sm text-muted-foreground">
                  Receba apoio, oração e cuidado em momentos de dificuldade e celebre as vitórias juntos
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                  <Home className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold">Pertencimento</h3>
                <p className="text-sm text-muted-foreground">
                  Sinta-se parte de uma família espiritual onde você é conhecido e valorizado
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossas Redes */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Nossas Redes de Células</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Temos células para todas as idades e perfis. Encontre a rede que mais se identifica com você!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {redes.map((rede) => (
              <Card key={rede.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <div className={`w-12 h-12 ${rede.cor} rounded-lg flex items-center justify-center`}>
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{rede.nome}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{rede.descricao}</p>
                    <div className="space-y-1 text-sm">
                      <p>
                        <strong>Público:</strong> {rede.publico}
                      </p>
                      <p>
                        <strong>Supervisor:</strong> {rede.supervisor}
                      </p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href={`/celulas/redes/${rede.id}`}>
                      Ver Detalhes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-cyan-600 text-white">
        <div className="container text-center space-y-6">
          <MapPin className="h-16 w-16 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold">Encontre uma Célula Perto de Você</h2>
          <p className="text-xl text-cyan-50 max-w-2xl mx-auto">
            Use nosso localizador para encontrar a célula mais próxima da sua casa
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-cyan-50">
            <Link href="/celulas/localizar">Localizar Célula</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
