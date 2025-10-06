import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import logoImage from "@assets/ChatGPT Image 27 de set. de 2025, 10_33_08_1759766203800.png";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-chart-2/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        <div className="flex justify-center mb-8">
          <img 
            src={logoImage} 
            alt="NextTrust Logo" 
            className="h-32 w-auto sm:h-40 lg:h-48"
            data-testid="img-logo"
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent">
          Conectando soluções,<br />transformando resultados
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          A NextTrust é especializada em soluções tecnológicas completas, com foco em consultoria estratégica e suporte de alta performance para negócios.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 hover-elevate active-elevate-2"
            onClick={scrollToContact}
            data-testid="button-contact-hero"
          >
            Agende uma Consultoria
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 backdrop-blur-sm bg-background/50 hover-elevate active-elevate-2"
            onClick={() => window.open("tel:+5511983522274")}
            data-testid="button-phone-hero"
          >
            <Phone className="mr-2 h-5 w-5" />
            (11) 98352-2274
          </Button>
        </div>
        
        <div className="mt-16 text-sm text-muted-foreground font-mono">
          "Nós buscamos o novo, nós perseguimos o novo"
        </div>
      </div>
    </section>
  );
}
