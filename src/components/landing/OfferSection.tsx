import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { fbqInitPurchase, fbqViewContent } from "@/lib/fpixel";

const includedItems = [
  "365 versículos bíblicos",
];
export function OfferSection() {
  return (
    <section id="oferta" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <Card className="max-w-md mx-auto rounded-3xl shadow-xl shadow-primary/10 border border-foreground/10 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pt-8 pb-4">
              <CardTitle className="font-headline text-2xl md:text-3xl font-extrabold text-foreground">Versão Básica</CardTitle>
              <p className="text-muted-foreground text-sm mt-1">O essencial para começar a jornada.</p>
              <div className="mt-5 flex flex-col items-center gap-1">
                <span className="text-muted-foreground line-through">de R$ 97,00</span>
                <div className="flex items-end gap-1">
                  <span className="text-sm font-bold">R$</span>
                  <span className="font-headline text-5xl font-extrabold leading-none">16,00</span>
                </div>
                <div className="mt-2 inline-flex items-center rounded-full bg-primary text-primary-foreground font-bold px-4 py-1">
                  Economize R$ 81,00
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-8">
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="https://pay.cakto.com.br/xtrcq5s_620791" className="block" onClick={() => fbqInitPurchase(16.0, 'Offer Básica')}>
                  <Button size="lg" className="w-full font-bold h-12 btn-primary animate-cta-pulse">
                    Comprar Agora
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <Card className="mt-10 max-w-md mx-auto rounded-3xl shadow-xl shadow-primary/10 border border-foreground/10 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pt-8 pb-4">
              <CardTitle className="font-headline text-2xl md:text-3xl font-extrabold text-foreground">Pacote Premium</CardTitle>
              <p className="text-muted-foreground text-sm mt-1">365 versículos + Manhãs com Deus + 355 músicas Gospel sem propagandas</p>
              <div className="mt-5 flex flex-col items-center gap-1">
                <span className="text-muted-foreground line-through">de R$ 37,00</span>
                <div className="flex items-end gap-1">
                  <span className="text-sm font-bold">R$</span>
                  <span className="font-headline text-5xl font-extrabold leading-none">24,99</span>
                </div>
                <div className="mt-2 inline-flex items-center rounded-full bg-primary text-primary-foreground font-bold px-4 py-1">
                  Economize R$ 12,01
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" /><span className="text-foreground/80">365 versículos</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" /><span className="text-foreground/80">Manhãs com Deus</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" /><span className="text-foreground/80">355 músicas Gospel sem propagandas</span></li>
              </ul>
              <div className="mt-8">
                <a href="https://pay.cakto.com.br/osdcuq6_622211" className="block" onClick={() => fbqInitPurchase(24.99, 'Offer Premium')}>
                  <Button size="lg" className="w-full font-bold h-12 btn-primary animate-cta-pulse">
                    Comprar Agora
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
