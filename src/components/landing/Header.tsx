"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Cross, Feather } from "lucide-react";

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        hasScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 font-headline font-bold text-xl text-foreground">
          <Feather className="text-primary" />
          <span>365 Dias de Fé</span>
        </Link>
        <nav>
          <a href="#oferta">
            <Button className="font-bold hidden sm:inline-flex btn-primary shadow-lg shadow-primary/20 hover:shadow-primary/30">
              Comprar Agora
            </Button>
            <Button size="sm" className="font-bold sm:hidden btn-primary shadow-lg shadow-primary/20 hover:shadow-primary/30">
              Comprar
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
