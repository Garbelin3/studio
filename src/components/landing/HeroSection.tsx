"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, ShieldCheck, Star } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import ParticleBackground from "./ParticleBackground";
import { VSLModal } from "./VSLModal";
import { fbqViewContent } from "@/lib/fpixel";

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="hero" className="relative bg-background pt-36 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      <ParticleBackground />
      <div className="glow-effect"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-foreground leading-tight">
              Encontre Direção, Força e Propósito — <span className="text-primary">Um Versículo Por Dia</span> Pode Mudar Tudo
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Um Produto com 365 mensagens bíblicas para guiar seu coração todos os dias do ano. Experimente o poder da Palavra aplicada à sua rotina.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400} className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#oferta" onClick={() => fbqViewContent('Hero Go To Offers')}>
              <Button size="lg" className="w-full sm:w-auto font-bold text-lg px-10 py-7 btn-primary shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transform hover:-translate-y-1 transition-all duration-300 animate-cta-pulse" style={{ animationDuration: '3s' }}>
                Comprar agora!
              </Button>
            </a>
          </AnimateOnScroll>
          <AnimateOnScroll delay={600} className="mt-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            <Badge variant="secondary" className="bg-accent/50 border-transparent">
              <Star className="mr-1.5 h-4 w-4 text-primary" /> Acesso imediato
            </Badge>
            <Badge variant="secondary" className="bg-accent/50 border-transparent">
              <ShieldCheck className="mr-1.5 h-4 w-4 text-primary" /> Garantia de 7 dias
            </Badge>
          </AnimateOnScroll>
        </div>
      </div>
      <VSLModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </section>
  );
}
