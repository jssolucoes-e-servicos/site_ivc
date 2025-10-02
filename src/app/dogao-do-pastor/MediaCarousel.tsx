"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext, // Importar o hook para controlar o carrossel
  CarouselPrevious
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";

// Sua definição de tipo (MediaItem) continua a mesma

/**
 * Componente que exibe um carrossel de vídeos ou imagens, ou apenas um item.
 * @param {MediaItem[]} mediaItems - Array de objetos de mídia.
 * @param {string} mediaType - "video" ou "image".
 */
export function MediaCarousel({ mediaItems, mediaType }) {
  // Se houver apenas 1 item, a lógica é a mesma, sem carrossel.
  if (mediaItems.length === 1) {
    const item = mediaItems[0];
    return (
      <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 h-full flex flex-col">
        {mediaType === "video" ? (
          // Adicionado autoplay e muted para o caso de 1 vídeo também
          <video src={item.url} controls className="w-full h-96" muted autoPlay loop></video>
        ) : (
          <img
            src={item.url}
            alt={item.description}
            className="w-full h-96 object-cover"
          />
        )}
        <p className="p-4 text-center font-semibold flex-grow">
          {item.description}
        </p>
      </div>
    );
  }

  // --- Lógica do Carrossel para múltiplos itens ---
  
  // O hook useCarousel retorna a instância do Embla e o índice atual
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  
  // Referência para armazenar as tags de vídeo
  const videoRefs = useRef([]);
  // Flag para parar a troca automática
  const autoAdvanceRef = useRef(true);

  // Lógica para carrossel de vídeos (troca ao fim do vídeo)
  useEffect(() => {
    if (mediaType !== "video" || !api) return;

    // Função para mover para o próximo slide
    const slideNext = () => {
      if (api && autoAdvanceRef.current) {
        api.slideNext();
      }
    };
    
    // Adiciona o listener para o Embla Carousel para atualizar o índice
    api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
    });

    // 1. Iniciar o primeiro vídeo e adicionar listeners de "ended"
    const setupVideos = () => {
        videoRefs.current.forEach((video, index) => {
            // Garante que apenas o vídeo ativo está em autoplay
            if (index === current) {
                video.muted = true; // Sempre silencioso na troca automática
                video.play().catch(error => console.log("Autoplay blocked:", error));
                
                // 2. Listener que dispara a transição ao final do vídeo
                video.onended = slideNext;
                
                // 3. Listener para interrupção manual pelo usuário
                video.onplay = () => {
                    // Se o usuário der play manualmente (ex: tira do mudo ou clica)
                    if (!video.muted) {
                        autoAdvanceRef.current = false; // Desativa a troca automática
                        video.onended = null; // Remove o listener de troca
                    }
                };
            } else {
                // Pausa os vídeos não ativos para economizar recursos
                video.pause();
                video.currentTime = 0;
            }
        });
    };
    
    // Configura os vídeos inicialmente e a cada mudança de slide
    setupVideos();

    // Limpeza de efeitos
    return () => {
      videoRefs.current.forEach(video => {
        if (video) {
          video.onended = null;
          video.onplay = null;
        }
      });
      api.off("select");
    };

  }, [api, current, mediaType]);


  // Lógica de carrossel para Imagens (simples Autoplay com delay)
  // Se for imagem, você pode querer voltar ao Autoplay com tempo fixo
  const imagePlugin = useRef(null);
  if (mediaType === "image") {
    // Você pode reintroduzir um Autoplay simples com tempo fixo aqui se quiser
    // imagePlugin.current = Autoplay({ delay: 5000, stopOnInteraction: true });
  }

  return (
    <Carousel
      // Se for vídeo, remove plugins e usa a API manual. Se for imagem, pode adicionar o plugin.
      // plugins={mediaType === "image" && imagePlugin.current ? [imagePlugin.current] : []}
      setApi={setApi} // Define a API do Embla
      opts={{ loop: true, align: "start" }}
      className="w-full"
    >
      <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
        <CarouselContent>
          {mediaItems.map((item, index) => (
            <CarouselItem key={index} className="p-0">
              <div className="w-full h-full flex flex-col">
                {mediaType === "video" ? (
                  // Adiciona a ref para podermos acessar e controlar o elemento de vídeo
                  <video 
                    ref={el => videoRefs.current[index] = el}
                    src={item.url} 
                    controls 
                    className="w-full h-96"
                    // Remove o `autoPlay` direto na tag, pois controlaremos via JS
                    // O `muted` é inicializado como true via JS
                    // O `loop` não é necessário, pois a troca manual já reinicia
                  />
                ) : (
                  <img
                    src={item.url}
                    alt={item.description}
                    className="w-full h-96 object-cover"
                  />
                )}
                <p className="p-4 text-center font-semibold">
                  {item.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
      
      {/* Botões de navegação */}
      <CarouselPrevious className="absolute left-4 top-[calc(50% - 2rem)]" />
      <CarouselNext className="absolute right-4 top-[calc(50% - 2rem)]" />
    </Carousel>
  );
}