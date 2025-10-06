import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp, Shield, Activity } from "lucide-react";

const cases = [
  {
    icon: TrendingDown,
    title: "Migração de Infraestrutura para a Nuvem",
    client: "Empresa de Varejo",
    challenge: "Reduzir custos e melhorar a disponibilidade de aplicações internas.",
    solution: "Migração completa para Cloud Computing com escalabilidade automática e políticas de segurança personalizadas.",
    results: [
      { label: "Redução de custos", value: "30%" },
      { label: "Interrupções", value: "Zero" },
      { label: "Flexibilidade", value: "Alta" },
    ],
  },
  {
    icon: Shield,
    title: "Implantação de Firewall e VPN",
    client: "Instituição de Ensino",
    challenge: "Problemas de acesso não autorizado e instabilidade na rede.",
    solution: "Firewall de última geração, VPN para acesso remoto e monitoramento em tempo real.",
    results: [
      { label: "Controle de acesso", value: "Total" },
      { label: "Estabilidade", value: "100%" },
      { label: "Experiência", value: "Melhorada" },
    ],
  },
  {
    icon: TrendingUp,
    title: "Adoção de Omnichannel e VoIP",
    client: "Rede de Call Centers",
    challenge: "Unificar canais de contato e otimizar custos de telefonia.",
    solution: "Plataforma Omnichannel e VoIP com gerenciamento centralizado.",
    results: [
      { label: "Redução de custos", value: "25%" },
      { label: "Satisfação", value: "+Alta" },
      { label: "Produtividade", value: "+15%" },
    ],
  },
  {
    icon: Activity,
    title: "Consultoria em Backup e Recovery",
    client: "Clínica Médica",
    challenge: "Garantir segurança das informações dos pacientes.",
    solution: "Plano de backup customizado com criptografia e testes periódicos de restauração.",
    results: [
      { label: "Confiabilidade", value: "Máxima" },
      { label: "Disponibilidade", value: "Alta" },
      { label: "Conformidade", value: "Total" },
    ],
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Cases de Sucesso
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Resultados comprovados em diversos segmentos do mercado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate transition-all duration-300"
              data-testid={`card-case-${index}`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-chart-2/10">
                  <caseStudy.icon className="h-6 w-6 text-chart-2" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {caseStudy.client}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-1">Desafio</h4>
                  <p className="text-sm">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-1">Solução</h4>
                  <p className="text-sm">{caseStudy.solution}</p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-sm font-semibold mb-4">Resultados</h4>
                <div className="grid grid-cols-3 gap-4">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold font-mono text-primary mb-1">
                        {result.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
