import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Entrega sem Preocupações",
    description: "Coordenamos cada implantação com o máximo de cuidado, assegurando conformidade aos requisitos e respeito aos prazos prometidos. Nossa abordagem orientada aos detalhes permite que você confie no resultado final.",
  },
  {
    icon: Clock,
    title: "Compromisso com a Pontualidade",
    description: "Valorizamos o seu tempo. Por isso, cumprimos rigorosamente todos os prazos de entrega, garantindo que a sua experiência conosco seja impecável do começo ao fim.",
  },
  {
    icon: CheckCircle,
    title: "Portal do Cliente NextTrust",
    description: "Gerencie suas demandas de TI de forma simples. Abra chamados, acompanhe progresso em tempo real, emita relatórios e acesse autoatendimento — tudo em um só lugar.",
  },
];

export function Differentials() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Experiência do Cliente
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Temos compromisso com você, por isso, valorizamos o seu tempo desde o planejamento inicial até o suporte pós-implantação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate transition-all duration-300 text-center"
              data-testid={`card-differential-${index}`}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-lg bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-8 rounded-lg bg-gradient-to-r from-primary/10 to-chart-2/10 border">
            <p className="text-xl font-semibold mb-2">Chega de atrasos e burocracias</p>
            <p className="text-muted-foreground">Diga adeus à espera e olá à eficiência!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
