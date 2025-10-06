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
    <section id="cases" className="py-24 lg:py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Projetos Realizados</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Cases de Sucesso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados comprovados em diversos segmentos do mercado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <Card 
              key={index} 
              className="p-10 hover-elevate transition-all duration-300 border-primary/10 bg-card/50 backdrop-blur-sm group"
              data-testid={`card-case-${index}`}
            >
              <div className="flex items-start gap-5 mb-8">
                <div className="p-4 rounded-xl bg-gradient-to-br from-chart-2/20 to-primary/20 group-hover:from-chart-2/30 group-hover:to-primary/30 transition-all">
                  <caseStudy.icon className="h-7 w-7 text-chart-2" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{caseStudy.title}</h3>
                  <Badge variant="secondary" className="text-xs font-medium">
                    {caseStudy.client}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-5 mb-8">
                <div>
                  <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Desafio</h4>
                  <p className="text-base text-muted-foreground">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Solução</h4>
                  <p className="text-base text-muted-foreground">{caseStudy.solution}</p>
                </div>
              </div>

              <div className="border-t border-primary/20 pt-8">
                <h4 className="text-sm font-bold mb-6 uppercase tracking-wide">Resultados</h4>
                <div className="grid grid-cols-3 gap-6">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl font-bold font-mono bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent mb-2">
                        {result.value}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
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
