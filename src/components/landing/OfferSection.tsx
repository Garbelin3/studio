import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, PlayCircle, Star } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const includedItems = [
  "Material completo com 365 versículos (PDF + acesso online)",
  "Plano de leitura diário (checklist)",
  "Guia de aplicação prática (3–5 min/dia)",
];

const bonusItems = [
  "Bônus 1: 31 declarações de fé (PDF)",
  "Bônus 2: Wallpapers devocionais (pack)",
];

export function OfferSection() {
  return (
    <section id="oferta" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <Card className="max-w-3xl mx-auto rounded-2xl shadow-2xl shadow-primary/10 border-2 border-primary/50 bg-background/80 backdrop-blur-sm transform hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden">
            <Badge className="absolute top-0 right-0 -mr-4 mt-6 transform rotate-45 bg-primary text-primary-foreground font-bold px-6 py-1">Oferta Especial</Badge>
            <CardHeader className="text-center pt-12 pb-8">
              <CardTitle className="font-headline text-3xl md:text-4xl font-extrabold text-foreground">
                Acesso Imediato — 365 Dias de Fé
              </CardTitle>
              <div className="mt-4 flex justify-center items-baseline gap-2">
                <span className="text-muted-foreground text-xl line-through">de R$197</span>
                <span className="font-headline text-5xl font-bold text-foreground">R$97</span>
              </div>
              <p className="text-muted-foreground">ou 12x de R$9,74</p>
            </CardHeader>
            <CardContent className="px-6 md:px-10 pb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-4 text-foreground">O que você recebe:</h4>
                  <ul className="space-y-3">
                    {includedItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <h4 className="font-bold text-lg mt-6 mb-4 text-foreground">Bônus Exclusivos:</h4>
                  <ul className="space-y-3">
                    {bonusItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-between items-center bg-secondary/50 rounded-xl p-6">
                  <div className="text-center">
                    <h4 className="font-bold text-lg text-foreground">Garantia Incondicional</h4>
                     <p className="text-sm text-muted-foreground mt-2">Se não for para você, devolvemos 100% do seu dinheiro em até 7 dias.</p>
                  </div>
                  <svg className="w-24 h-24 text-primary my-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.5 15.5L16.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 12.5L10.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                   <p className="text-xs text-muted-foreground text-center">Acesso imediato após confirmação de pagamento.</p>
                </div>
              </div>
              <div className="mt-10 flex flex-col items-center gap-4">
                 
                <a href="#" className="w-full">
                  <Button size="lg" className="w-full font-bold text-lg h-14 btn-primary shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transform hover:-translate-y-1 transition-all duration-300">
                    Quero Meu Acesso Agora
                  </Button>
                </a>
                <Button variant="ghost" className="text-muted-foreground">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Assistir à VSL antes de decidir
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
