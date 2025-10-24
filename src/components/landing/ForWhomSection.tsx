import { Check, X } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const forYou = [
  "Busca direção e clareza na sua rotina.",
  "Tem pouco tempo mas deseja se conectar com a fé.",
  "Quer criar o hábito da leitura diária sem pressão.",
  "Precisa de uma fonte de esperança e força para recomeçar.",
];

const notForYou = [
  "Busca um estudo teológico aprofundado e complexo.",
  "Não pretende dedicar de 3 a 5 minutos por dia para sua fé.",
  "Procura respostas instantâneas sem reflexão pessoal.",
];

export function ForWhomSection() {
  return (
    <section id="para-quem-e" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimateOnScroll>
            <div className="bg-secondary/50 p-8 rounded-2xl h-full">
              <h3 className="font-headline text-2xl font-bold text-foreground mb-6">
                É para você se...
              </h3>
              <ul className="space-y-4">
                {forYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="bg-secondary/50 p-8 rounded-2xl h-full">
              <h3 className="font-headline text-2xl font-bold text-foreground mb-6">
                Não é para você se...
              </h3>
              <ul className="space-y-4">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
