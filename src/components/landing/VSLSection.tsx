"use client";

import { AnimateOnScroll } from "./AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { fbqViewContent } from "@/lib/fpixel";

export function VSLSection() {
    return (
        <section id="vsl" className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <AnimateOnScroll>
                    <div className="mx-auto w-[90%] sm:w-full max-w-2xl lg:max-w-3xl">
                        <div className="relative w-full h-[62vh] sm:h-[68vh] lg:h-[72vh] rounded-none sm:rounded-2xl overflow-hidden border-0 sm:border sm:border-primary/20 bg-transparent shadow-xl sm:shadow-2xl sm:shadow-primary/20">
                            <video
                                src="/01.mp4"
                                controls
                                playsInline
                                className="w-full h-full object-contain bg-transparent"
                                aria-label="Vídeo de apresentação"
                            />
                        </div>
                        <div className="mt-6 flex justify-center">
                            <a href="#beneficios" className="w-full sm:w-auto" onClick={() => fbqViewContent('VSL - Saiba Mais')}>
                                <Button size="lg" className="w-full sm:w-auto font-bold text-lg h-14 btn-primary animate-cta-pulse">
                                    Saiba mais!
                                </Button>
                            </a>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}


