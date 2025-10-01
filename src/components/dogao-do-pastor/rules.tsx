import Link from "next/link";
import { Fragment } from "react";

export async function DogaoRules() {
  return (<Fragment>
    <section className="bg-orange-100 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Regras da Campanha
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
            <li>
              A campanha é válida para todas as compras realizadas através do botão &quot;Participar da Pré-venda&quot; nesta página.
            </li>
            <li>
              Cada dogão comprado até 10.11 gera um número da sorte para o sorteio.
            </li>
            <li>
              O sorteio será realizado ao vivo no dia <strong>22/11/2025</strong>, em nossas redes sociais.
            </li>
            <li>
              O prêmio inclui uma pernoite para duas pessoas em um hotel selecionado em Gramado/RS, mais jantar com Foundee.
            </li>
            <li>
              Em caso de duvidas chame nossa equipe de recepção pelo <Link href={"https://wa.me/5551936183218"}>whatsapp (51) 936.183.218</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Fragment>)
}