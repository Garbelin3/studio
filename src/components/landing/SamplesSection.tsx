"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "./AnimateOnScroll";

const samples = [
  {
    day: 1,
    verse: "“Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho.”",
    reference: "Salmos 119:105",
    reflection: "Que cada passo hoje seja guiado pela sabedoria divina, iluminando as incertezas e trazendo clareza para suas decisões."
  },
  {
    day: 45,
    verse: "“Tudo posso naquele que me fortalece.”",
    reference: "Filipenses 4:13",
    reflection: "Lembre-se de que sua força não vem de si mesmo, mas de uma fonte inesgotável. Enfrente seus desafios com a confiança de que você não está sozinho."
  },
  {
    day: 98,
    verse: "“O Senhor é o meu pastor; nada me faltará.”",
    reference: "Salmos 23:1",
    reflection: "Descanse na certeza de que você está sob cuidado constante. Entregue suas ansiedades e confie na provisão para cada uma de suas necessidades."
  },
  {
    day: 153,
    verse: "“Porque para Deus nada é impossível.”",
    reference: "Lucas 1:37",
    reflection: "Diante de obstáculos que parecem intransponíveis, medite nesta verdade. Onde a sua força termina, o poder de Deus começa a agir."
  },
  {
    day: 210,
    verse: "“O coração alegre aformoseia o rosto.”",
    reference: "Provérbios 15:13",
    reflection: "A verdadeira beleza nasce de um espírito grato e contente. Hoje, escolha cultivar a alegria interior e veja como ela transparece."
  },
];

export function SamplesSection() {
  return (
    <section id="amostras" className="py-16 sm:py-24 bg-background">
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
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {samples.map((sample, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between border-2 border-accent/50 shadow-lg shadow-primary/5">
                      <CardContent className="flex flex-col gap-4 p-6">
                        <p className="text-sm font-bold text-primary">DIA {sample.day}</p>
                        <blockquote className="italic text-foreground">
                          {sample.verse}
                        </blockquote>
                        <p className="text-sm font-medium text-muted-foreground text-right">
                          — {sample.reference}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {sample.reflection}
                        </p>
                      </CardContent>
                    </Card>
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
