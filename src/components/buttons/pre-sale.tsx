import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export async function PreSaleButton({tag}:{tag:string}){

  const ImageHotdog = () => {
    return(<Fragment>
      <Image 
        className="w-8 h-8 lg:w-16 lg:h-16"
        src="/assets/images/hot-dog.svg" 
        alt="Hot Dog" 
        width={64} 
        height={64} 
      />
    </Fragment>)
  }

  return(<Fragment>
<Link href={`https://dogao.igrejavivaemcelulas.com.br/pre-venda?v=${tag}`}>
  {/* <Button
    className="
       w-full md:w-fit lg:w-xl h-16 lg:h-24 py-3 px-4 lg:px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 gap-4 lg:gap-8 flex  items-center"
  > */}
  <Button className="bg-white hover:bg-gray-100 w-full md:w-fit xl:w-xl lg:h-22 h-16 py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ">
    <ImageHotdog />
    <Label className="text-xl lg:text-2xl text-orange-600 font-bold ml-3 mr-3">
      Participar da Pré-venda
    </Label>
    <ImageHotdog/>
  </Button>
</Link>
  </Fragment>)
}