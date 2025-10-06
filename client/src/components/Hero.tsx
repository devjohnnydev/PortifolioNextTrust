import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import logoImage from "@assets/ChatGPT_Image_27_de_set._de_2025__10_33_08-removebg-preview_1759767157879.png";
import { NetworkAnimation } from "./NetworkAnimation";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card">
      <NetworkAnimation />
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.15),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="flex flex-col items-center text-center">
          <div className="mb-12 transform transition-all duration-500 hover:scale-105">
            <img 
              src={logoImage} 
              alt="NextTrust Logo" 
              className="h-40 w-auto sm:h-48 lg:h-64 drop-shadow-2xl"
              data-testid="img-logo"
            />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-8 max-w-5xl">
            <span className="bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent">
              Conectando soluções,
            </span>
            <br />
            <span className="bg-gradient-to-r from-chart-2 via-primary to-foreground bg-clip-text text-transparent">
              transformando resultados
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed font-light">
            Especialistas em soluções tecnológicas completas para a transformação digital do seu negócio
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 hover-elevate active-elevate-2 shadow-xl shadow-primary/20"
              onClick={scrollToContact}
              data-testid="button-contact-hero"
            >
              Agende uma Consultoria
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 backdrop-blur-xl bg-background/30 border-primary/20 hover-elevate active-elevate-2 shadow-xl"
              onClick={() => window.open("tel:+5511983522274")}
              data-testid="button-phone-hero"
            >
              <Phone className="mr-2 h-5 w-5" />
              (11) 98352-2274
            </Button>
          </div>
          
          <div className="mt-20 inline-block px-6 py-3 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <p className="text-sm text-primary font-mono font-semibold">
              "Nós buscamos o novo, nós perseguimos o novo"
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
