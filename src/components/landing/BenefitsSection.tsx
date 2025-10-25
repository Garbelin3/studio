import { CheckCircle2 } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const benefits = [
  { text: "Mais paz interior em dias difíceis", delay: 0 },
  { text: "Direção quando faltarem respostas", delay: 100 },
  { text: "Esperança e ânimo renovados", delay: 200 },
  { text: "Foco espiritual sem complicação", delay: 300 },
  { text: "Disciplina em poucos minutos por dia", delay: 400 },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center text-foreground mb-12">
            O que você vai sentir ao praticar 1 versículo por dia
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll key={index} delay={benefit.delay}>
              <div className="h-full bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 shadow-lg shadow-primary/10 p-5 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="text-base md:text-lg text-foreground/80">{benefit.text}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
