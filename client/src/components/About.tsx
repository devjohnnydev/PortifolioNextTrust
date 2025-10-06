import { Card } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missão",
    description: "Fornecer soluções de tecnologia eficazes, seguras e personalizadas, garantindo o suporte necessário para que nossos clientes se concentrem em seu core business.",
  },
  {
    icon: Eye,
    title: "Visão",
    description: "Consolidar-nos como referência nacional em consultoria e serviços de TI, sendo reconhecidos pela excelência, inovação e capacidade de antecipar tendências tecnológicas.",
  },
  {
    icon: Heart,
    title: "Valores",
    description: "Inovação Contínua • Compromisso com a Qualidade • Ética e Transparência • Foco no Cliente • Colaboração e Crescimento",
  },
];

export function About() {
  return (
    <section id="quem-somos" className="py-24 lg:py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Quem Somos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Parceiro Estratégico em TI
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Somos movidos pela inovação e pela busca constante de novas tecnologias, reforçando diariamente nosso compromisso de desbravar novas possibilidades. Acreditamos que o ambiente de negócios em evolução exige parceiros confiáveis, capazes de oferecer agilidade e segurança no cenário digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="p-10 hover-elevate transition-all duration-300 border-primary/10 bg-card/50 backdrop-blur-sm group"
              data-testid={`card-value-${index}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 group-hover:from-primary/30 group-hover:to-chart-2/30 transition-all">
                  <value.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-5">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
