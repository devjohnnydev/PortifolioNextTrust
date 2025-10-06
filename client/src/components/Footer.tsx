import { Phone, Linkedin } from "lucide-react";
import logoImage from "@assets/ChatGPT Image 27 de set. de 2025, 10_33_08_1759766203800.png";

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img 
              src={logoImage} 
              alt="NextTrust Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Conectando soluções, transformando resultados. Parceiro estratégico para a evolução digital da sua empresa.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => scrollToSection("servicos")} className="hover:text-primary transition-colors">
                  Consultoria em TI
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("servicos")} className="hover:text-primary transition-colors">
                  Cloud Computing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("servicos")} className="hover:text-primary transition-colors">
                  Segurança Digital
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("servicos")} className="hover:text-primary transition-colors">
                  Backup & Recovery
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => scrollToSection("quem-somos")} className="hover:text-primary transition-colors">
                  Quem Somos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("cases")} className="hover:text-primary transition-colors">
                  Cases de Sucesso
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contato")} className="hover:text-primary transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="tel:+5511983522274" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-phone"
                >
                  <Phone className="h-4 w-4" />
                  (11) 98352-2274
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/johnnybraga" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-linkedin"
                >
                  <Linkedin className="h-4 w-4" />
                  Johnny Braga
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 NextTrust Consultoria & Suporte em TI. Todos os direitos reservados.</p>
            <p className="font-mono text-xs">"Nós buscamos o novo, nós perseguimos o novo"</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
