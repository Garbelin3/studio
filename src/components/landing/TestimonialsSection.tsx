import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana P.",
    quote: "Me sentia afastada de Deus, nunca conseguia ir aos cultos e me sentia culpada por isso. O potinho foi um meio que encontrei para me reaproximar de cristo em poucos minutos de manhã leio antes de ir para a faculdade",
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
    quote: "Dei de presente para minha filha, ela tem depressão e mora longe de mim. ELa ligou chorando agradecendo pelo presente e dizendo que me ama. Um simples presente como esse pode restaurar nossa fé no pai todo poderoso. Obrigada!",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-mariana-alt'),
    delay: 400,
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center text-foreground mb-12">
            Milhares de vidas já foram transformadas
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <AnimateOnScroll key={testimonial.name} delay={testimonial.delay}>
              <Card className="h-full border border-primary/20 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  {testimonial.image && (
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary/50 shadow">
                      <Image
                        src={testimonial.image.imageUrl}
                        alt={`Foto de ${testimonial.name}`}
                        fill
                        sizes="96px"
                        className="object-cover"
                        data-ai-hint={testimonial.image.imageHint}
                      />
                    </div>
                  )}
                  <blockquote className="text-foreground/80 italic mb-4">
                    “{testimonial.quote}”
                  </blockquote>
                  <div className="flex items-center gap-1 mb-2" aria-label="Avaliação 5 de 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary" fill="currentColor" />
                    ))}
                  </div>
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
