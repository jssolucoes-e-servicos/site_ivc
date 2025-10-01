import { Card, CardContent } from "@/components/ui/card"
import { Church, Target, Eye, Heart } from "lucide-react"

export default function AIgrejaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-500 to-cyan-700 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">A Igreja</h1>
            <p className="text-xl text-cyan-50">Conheça nossa história, missão e valores</p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <Church className="h-16 w-16 text-cyan-600 mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold">Nossa História</h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                A Igreja Viva em Células nasceu do desejo de criar uma comunidade cristã autêntica, onde as pessoas
                pudessem experimentar o amor de Deus de forma prática e transformadora. Localizada na Restinga, em Porto
                Alegre, nossa igreja tem sido um farol de esperança e fé para a comunidade local.
              </p>
              <p>
                Desde o início, adotamos o modelo de células como forma de organização, acreditando que é nos pequenos
                grupos que as pessoas realmente se conectam, crescem e se tornam discípulos de Cristo. Cada célula é um
                espaço de acolhimento, estudo bíblico, oração e comunhão.
              </p>
              <p>
                Hoje, somos uma igreja vibrante e em crescimento, com diversas redes de células que atendem diferentes
                faixas etárias e perfis, desde crianças até adultos, todos unidos pelo mesmo propósito: viver e
                compartilhar o evangelho de Jesus Cristo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold">Missão</h3>
                <p className="text-muted-foreground">
                  Fazer discípulos de Jesus Cristo através de células, transformando vidas e impactando comunidades com
                  o amor e a verdade do evangelho.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Eye className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold">Visão</h3>
                <p className="text-muted-foreground">
                  Ser uma igreja viva e multiplicadora, onde cada membro é um discípulo ativo, conectado em células e
                  comprometido com a Grande Comissão.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold">Valores</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Amor a Deus e ao próximo</li>
                  <li>• Comunhão e relacionamentos</li>
                  <li>• Palavra de Deus como fundamento</li>
                  <li>• Oração e dependência do Espírito Santo</li>
                  <li>• Multiplicação e discipulado</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Liderança */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Liderança</h2>
            <p className="text-lg text-muted-foreground">
              Nossa igreja é liderada por pastores e líderes comprometidos com o Reino de Deus e dedicados ao cuidado e
              crescimento espiritual de cada membro.
            </p>
            <Card className="bg-muted/50">
              <CardContent className="pt-6 space-y-4">
                <div className="w-24 h-24 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                  <Church className="h-12 w-12 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold">Pastor Principal</h3>
                <p className="text-muted-foreground">
                  Nosso pastor lidera com sabedoria e amor, guiando a igreja no caminho da verdade e do crescimento
                  espiritual. Conheça mais sobre seu ministério no Dogão do Pastor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
