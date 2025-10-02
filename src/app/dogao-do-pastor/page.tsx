import { DogaoRules } from "@/components/dogao-do-pastor/rules";
import { Button } from "@/components/ui/button";
import { LANDING_PAGE_MEDIA } from "@/constants";
import Link from "next/link";

export default function DogaoDoPastorPage() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-orange-600 text-white py-24 md:py-36 text-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Promoção de Pré-venda: Concorra a uma Noite Especial no Natal Luz de Gramado + Jantar com Foundee, com acompanhante!
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in-up">
            Participe da nossa pré-venda e concorra a uma pernoite incrível Gramado/RS!
          </p>
          <Link href="https://dogao.igrejavivaemcelulas.com.br/pre-venda?v=dogao">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Participar da Pré-venda
            </Button>
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </section>

      {/* Media Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Momentos Inesquecíveis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LANDING_PAGE_MEDIA.videos.map((video, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
                <video src={video.url} controls className="w-full h-auto"></video>
                <p className="p-4 text-center font-semibold">{video.description}</p>
              </div>
            ))}
            {LANDING_PAGE_MEDIA.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
                <img src={image.url} alt={image.description} className="w-full h-auto object-cover" />
                <p className="p-4 text-center font-semibold">{image.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DogaoRules />
    </div>
  )
}
