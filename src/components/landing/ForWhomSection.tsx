import { Check, X } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const forYou = [
  "Busca direção e clareza na sua rotina.",
  "Tem pouco tempo mas deseja se conectar com a fé.",
  "Quer criar o hábito da leitura diária sem pressão.",
  "Precisa de uma fonte de esperança e força para recomeçar.",
];

export function ForWhomSection() {
  return (
    <section id="para-quem-e" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimateOnScroll>
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl h-full border border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-headline text-2xl font-bold text-foreground mb-6">
                É para você se...
              </h3>
              <ul className="space-y-4">
                {forYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
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
