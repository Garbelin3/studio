"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { useEffect, useState } from "react";

const gallery = Array.from({ length: 20 }, (_, i) => `/${String(i + 1).padStart(2, "0")}.jpg`);

export function SamplesSection() {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined)

  useEffect(() => {
    if (!api) return
    const id = setInterval(() => {
      if (!api) return
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 2000)
    return () => clearInterval(id)
  }, [api])

  return (
    <section id="amostras" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center text-foreground mb-12">
            Uma prévia da sua jornada diária
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
            setApi={setApi}
          >
            <CarouselContent>
              {gallery.map((src, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl border border-primary/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                      <Image
                        src={src}
                        alt={`Amostra ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                        priority={index < 2}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </AnimateOnScroll>
        <div className="text-center mt-8">
          <p className="text-muted-foreground">Arraste para ver mais exemplos</p>
        </div>
      </div>
    </section>
  );
}
