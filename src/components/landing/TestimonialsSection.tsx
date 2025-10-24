import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    name: "Ana P.",
    quote: "Em poucos minutos por dia, encontrei a paz que eu buscava há tanto tempo. Mudou o começo das minhas manhãs.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-ana'),
    delay: 0,
  },
  {
    name: "Carlos M.",
    quote: "Os versículos me deram direção quando eu estava perdido e sem saber que decisão tomar na minha carreira. Simples e poderoso.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-carlos'),
    delay: 200,
  },
  {
    name: "Mariana S.",
    quote: "Nunca consegui ter disciplina para ler a Bíblia. Este material foi a solução perfeita. Curto, direto e impactante.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-maria'),
    delay: 400,
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center text-foreground mb-12">
            Milhares de vidas já foram transformadas
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <AnimateOnScroll key={testimonial.name} delay={testimonial.delay}>
              <Card className="h-full border-transparent shadow-none bg-transparent">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  {testimonial.image && (
                     <Image
                        src={testimonial.image.imageUrl}
                        alt={`Foto de ${testimonial.name}`}
                        width={80}
                        height={80}
                        className="rounded-full mb-4 border-2 border-primary/50"
                        data-ai-hint={testimonial.image.imageHint}
                      />
                  )}
                  <blockquote className="text-muted-foreground italic mb-4">
                    “{testimonial.quote}”
                  </blockquote>
                  <p className="font-bold text-foreground">— {testimonial.name}</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
