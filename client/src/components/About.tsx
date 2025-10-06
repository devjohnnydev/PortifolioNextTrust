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
    <section id="quem-somos" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Quem Somos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Somos movidos pela inovação e pela busca constante de novas tecnologias, reforçando diariamente nosso compromisso de desbravar novas possibilidades. Acreditamos que o ambiente de negócios em evolução exige parceiros confiáveis, capazes de oferecer agilidade e segurança no cenário digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate transition-all duration-300"
              data-testid={`card-value-${index}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-lg bg-primary/10">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
