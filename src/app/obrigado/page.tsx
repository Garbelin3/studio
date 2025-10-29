"use client";

import { Suspense, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { fbqTrack } from "@/lib/fpixel";

export const dynamic = 'force-dynamic';

function ObrigadoContent() {
    const searchParams = useSearchParams();

    const { value, currency, plan } = useMemo(() => {
        const v = parseFloat(searchParams.get("v") || "");
        const value = Number.isFinite(v) ? v : undefined;
        const currency = (searchParams.get("c") || "BRL").toUpperCase();
        const plan = searchParams.get("plan") || "Compra";
        return { value, currency, plan };
    }, [searchParams]);

    useEffect(() => {
        // Dispara o evento de conversão
        fbqTrack("Purchase", {
            value: value ?? undefined,
            currency,
            content_name: plan,
        });
    }, [value, currency, plan]);

    return (
        <section className="py-20 sm:py-28">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center rounded-full bg-green-100 text-green-700 px-4 py-2 font-semibold">
                        <CheckCircle2 className="mr-2 h-5 w-5" /> Pagamento confirmado
                    </div>
                    <h1 className="mt-6 text-3xl md:text-4xl font-headline font-extrabold text-foreground">
                        Obrigado pela sua compra!
                    </h1>
                    <p className="mt-4 text-muted-foreground">
                        Você receberá o acesso imediatamente no e-mail informado. Guarde este link caso precise voltar.
                    </p>

                    <div className="mt-10 flex justify-center">
                        <a
                            href="https://wa.me/+5567996691616?text=Ol%C3%A1%2C%20acabei%20de%20comprar%20o%20365%20Dias%20de%20F%C3%A9%20e%20tenho%20uma%20d%C3%BAvida."
                            className="w-full sm:w-auto"
                        >
                            <Button size="lg" className="w-full sm:w-auto font-bold h-12 btn-primary animate-cta-pulse">
                                Tirar dúvidas no WhatsApp
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function ObrigadoPage() {
    return (
        <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Carregando...</div>}>
            <ObrigadoContent />
        </Suspense>
    );
}


