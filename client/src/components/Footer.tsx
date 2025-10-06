import { Phone, Linkedin } from "lucide-react";
import logoImage from "@assets/ChatGPT_Image_27_de_set._de_2025__10_33_08-removebg-preview_1759767157879.png";

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img 
              src={logoImage} 
              alt="NextTrust Logo" 
              className="h-20 w-auto mb-6"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Conectando soluções, transformando resultados. Parceiro estratégico para a evolução digital da sua empresa.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg">Serviços</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
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
            <h3 className="font-semibold mb-6 text-lg">Empresa</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
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
            <h3 className="font-semibold mb-6 text-lg">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a 
                  href="tel:+5511983522274" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  data-testid="link-footer-phone"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span>(11) 98352-2274</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/johnnybraga" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  data-testid="link-footer-linkedin"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-4 w-4 text-primary" />
                  </div>
                  <span>Johnny Braga</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 NextTrust Consultoria & Suporte em TI. Todos os direitos reservados.</p>
            <div className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <p className="font-mono text-xs text-primary">"Nós buscamos o novo, nós perseguimos o novo"</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
