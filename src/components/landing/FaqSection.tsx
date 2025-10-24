import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from "./AnimateOnScroll";

const faqs = [
  {
    question: "Por quanto tempo terei acesso?",
    answer: "O acesso é vitalício! Você pode revisitar os versículos e reflexões sempre que quiser, para o resto da sua vida.",
  },
  {
    question: "Posso ler pelo celular?",
    answer: "Sim! O material é entregue em formato PDF e também em uma área de membros online, ambos totalmente compatíveis e otimizados para celulares, tablets e computadores.",
  },
  {
    question: "E se eu não gostar?",
    answer: "Se por qualquer motivo você não sentir que este material é para você, oferecemos uma garantia incondicional de 7 dias. Basta nos enviar um e-mail e devolveremos 100% do seu investimento, sem perguntas.",
  },
  {
    question: "É para iniciantes?",
    answer: "Com certeza. O '365 Dias de Fé' foi criado tanto para quem está começando sua jornada espiritual quanto para quem já tem o hábito da leitura bíblica. A linguagem é simples e as reflexões são práticas e diretas.",
  },
  {
    question: "Recebo atualizações?",
    answer: "Sim, ao adquirir o acesso, você terá direito a todas as futuras atualizações e melhorias do material sem custo adicional.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center text-foreground mb-12">
            Perguntas Frequentes
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
