import Link from "next/link";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Footer() {
  return (
    <footer id="footer" className="bg-secondary border-t">
      <AnimateOnScroll>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © 2025 365 Dias de Fé. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Suporte</Link>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </footer>
  );
}
