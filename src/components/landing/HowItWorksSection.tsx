import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Coffee, Sunrise } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const steps = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Receba 365 Versículos",
    description: "Uma seleção curada de mensagens bíblicas para inspirar cada dia do seu ano.",
    delay: 0,
  },
  {
    icon: <Coffee className="h-10 w-10 text-primary" />,
    title: "Leia em Minutos",
    description: "Aplique a mensagem do dia com uma breve reflexão, perfeito para uma rotina agitada.",
    delay: 200,
  },
  {
    icon: <Sunrise className="h-10 w-10 text-primary" />,
    title: "Renasça na Rotina",
    description: "Encontre paz, clareza e um propósito renovado ao se conectar com sua fé diariamente.",
    delay: 400,
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center text-foreground mb-12">
            Comece sua transformação em 3 passos simples
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimateOnScroll key={index} delay={step.delay}>
              <Card className="text-center h-full border-2 border-transparent hover:border-primary hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300">
                <CardHeader className="items-center">
                  <div className="bg-accent/50 p-4 rounded-full">
                    {step.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="font-headline text-xl mb-2">{step.title}</CardTitle>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
