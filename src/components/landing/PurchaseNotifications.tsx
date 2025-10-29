"use client";

import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const FIRST_NAMES = [
    "Ana", "Carlos", "Mariana", "João", "Paula", "Rafael", "Bruna", "Lucas",
    "Fernanda", "Gustavo", "Camila", "Pedro", "Larissa", "André", "Patrícia",
];

const LAST_NAMES = [
    "Silva", "Souza", "Oliveira", "Santos", "Pereira", "Lima", "Gomes", "Ribeiro",
    "Almeida", "Fernandes", "Carvalho", "Araujo", "Melo", "Barbosa", "Rocha",
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

    useEffect(() => {
        const schedule = () => {
            timerRef.current = setTimeout(() => {
                const name = `${getRandom(FIRST_NAMES)} ${getRandom(LAST_NAMES)}`;
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


