"use client";

import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const FIRST_NAMES = [
  "Ana", "Beatriz", "Bruna", "Camila", "Carolina", "Clara", "Daniela", "Elisa", "Fernanda", "Gabriela",
  "Helena", "Isabela", "Julia", "Larissa", "Letícia", "Luana", "Mariana", "Nathalia", "Patrícia", "Paula",
  "Priscila", "Rafaela", "Renata", "Sofia", "Tatiane", "Vitória", "Yasmin",
  "Alex", "André", "Bruno", "Carlos", "Daniel", "Diego", "Eduardo", "Felipe", "Fernando", "Gabriel",
  "Guilherme", "Gustavo", "Henrique", "João", "José", "Leonardo", "Lucas", "Marcelo", "Mateus", "Miguel",
  "Pedro", "Rafael", "Ricardo", "Rodrigo", "Thiago", "Vitor"
];

const LAST_NAMES = [
  "Silva", "Santos", "Oliveira", "Souza", "Pereira", "Lima", "Gomes", "Ribeiro", "Almeida", "Fernandes",
  "Carvalho", "Araujo", "Melo", "Barbosa", "Rocha", "Dias", "Teixeira", "Moreira", "Correia", "Cardoso",
  "Pinto", "Castro", "Nunes", "Freitas", "Cavalcante", "Campos", "Monteiro", "Moura", "Machado", "Gonçalves",
  "Vieira", "Sousa", "Batista", "Andrade", "Sales", "Farias", "Barros", "Cunha", "Xavier", "Romero"
];

const PHRASES = [
    (name: string, plan: string) => `${name} comprou e se aproximou ainda mais de Deus.`,
    (name: string, plan: string) => `${name} adquiriu o ${plan} e deu um passo de fé.`,
    (name: string, plan: string) => `${name} garantiu o ${plan} para fortalecer sua rotina espiritual.`,
    (name: string, plan: string) => `${name} escolheu o ${plan} e inspirou a própria jornada.`,
    (name: string, plan: string) => `${name} investiu na fé com o ${plan}.`,
];

function getRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getDelayMs() {
    // intervalo aleatório entre 12s e 20s
    return 12000 + Math.floor(Math.random() * 8000);
}

export function PurchaseNotifications() {
    const { toast } = useToast();
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Gera combinações únicas de Nome + Sobrenome e embaralha
  const combosRef = useRef<string[] | null>(null);
  const indexRef = useRef<number>(0);

  function shuffle<T>(arr: T[]): T[] {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function ensureCombos() {
    if (!combosRef.current) {
      const combos: string[] = [];
      for (const fn of FIRST_NAMES) {
        for (const ln of LAST_NAMES) {
          combos.push(`${fn} ${ln}`);
        }
      }
      combosRef.current = shuffle(combos);
      indexRef.current = 0;
    }
  }

    useEffect(() => {
    ensureCombos();
        const schedule = () => {
            timerRef.current = setTimeout(() => {
        ensureCombos();
        const list = combosRef.current as string[];
        const name = list[indexRef.current % list.length];
        indexRef.current += 1;
        if (indexRef.current % list.length === 0) {
          // reinicia com nova ordem quando esgotar a lista
          combosRef.current = shuffle(list);
          indexRef.current = 0;
        }
                const isPremium = Math.random() > 0.5;
                const plan = isPremium ? "Pacote Premium" : "Versão Básica";
                const message = `🕊️ ${getRandom(PHRASES)(name, plan)}`;
                toast({
                    description: message,
                    duration: 5000,
                    className: "rounded-2xl border-primary/20 bg-white/90 backdrop-blur-sm shadow-xl",
                });
                schedule();
            }, getDelayMs());
        };
        schedule();
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [toast]);

    return null;
}


