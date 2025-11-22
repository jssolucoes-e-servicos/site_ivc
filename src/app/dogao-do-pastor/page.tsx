import { DogaoMediaCarousel } from "@/components/dogao-do-pastor/media-carousel";
import { DogaoRules } from "@/components/dogao-do-pastor/rules";
import { LANDING_PAGE_MEDIA } from "@/constants";
import { Metadata } from "next";

interface PreVendaProps {
  searchParams: Promise<{ v?: string }>;
}

export const metadata: Metadata = {
  title: "Igreja Viva em Células - Dogão do Pastor",
  description: "Uma igreja viva, conectada em células, transformando vidas através do amor de Cristo.",
  generator: 'jssolucoeseservicos.com.br'
}

export default async function DogaoDoPastorPage({ searchParams }: PreVendaProps) {

  const params = await searchParams;
  const sellerSlug = params.v || 'dogao';


  return (
    <div className="flex flex-col">
      <section className="relative bg-orange-600 text-white py-24 md:py-36 text-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 items-center">
          <h1 className="text-2xl md:text-5xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            {/* Adquira seu dogão online! E nos ajude a comprarmos nossa sede. */}
            Vendas encerradas, até a próxima edição!
          </h1>





          {/* <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in-up">
            Participe da nossa pré-venda e concorra a uma pernoite incrível Gramado/RS!
          </p> */}
          {/* <PreSaleButton tag={sellerSlug} /> */}
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </section>
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Momentos Inesquecíveis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="h-full">
              <DogaoMediaCarousel
                mediaItems={LANDING_PAGE_MEDIA.videos}
                mediaType="video"
              />
            </div>

            <div className="h-full">
              <DogaoMediaCarousel
                mediaItems={LANDING_PAGE_MEDIA.images}
                mediaType="image"
              />
            </div>

            <div className="h-full">
              <DogaoMediaCarousel
                mediaItems={LANDING_PAGE_MEDIA.patrocinios}
                mediaType="image"
              />
            </div>
          </div>
        </div>
      </section>

      <DogaoRules />
    </div>
  )
}
