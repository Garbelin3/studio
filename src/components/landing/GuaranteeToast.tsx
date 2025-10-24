"use client";

import { useToast } from "@/hooks/use-toast";
import React, { useEffect, useRef, useState } from "react";

export function GuaranteeToast() {
  const { toast } = useToast();
  const triggerRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          toast({
            title: "Garantia Incondicional de 7 Dias",
            description: "Lembre-se: sua compra é 100% segura e sem riscos.",
            duration: 6000,
          });
          setHasTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = triggerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [toast, hasTriggered]);

  return <div ref={triggerRef} className="absolute h-1 w-1 -mt-48" />;
}
