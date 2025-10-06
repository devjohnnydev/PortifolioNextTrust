import { Card } from "@/components/ui/card";
import { 
  Cloud, 
  Shield, 
  Database, 
  FileKey, 
  MessageSquare, 
  Smartphone, 
  Workflow, 
  Phone,
  Lightbulb 
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Consultoria e Soluções em TI",
    description: "Identificação de necessidades tecnológicas, planejamento e execução de projetos, implementação de metodologias de governança e boas práticas.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Consultoria completa em migração e gerenciamento de infraestrutura na nuvem, escalabilidade de recursos e otimização de custos.",
  },
  {
    icon: Shield,
    title: "Firewall, Proxy & VPN",
    description: "Configuração, gerenciamento e monitoramento de soluções de segurança digital, protegendo o ambiente corporativo contra ataques.",
  },
  {
    icon: Database,
    title: "Backup e Recovery",
    description: "Planejamento e implementação de rotinas de backup automatizadas e eficientes, com estratégias de recuperação em cenários de desastre.",
  },
  {
    icon: FileKey,
    title: "Licenciamento Windows, Office 365 e Antivírus",
    description: "Orientamos e gerenciamos a aquisição de licenças de software e soluções de segurança, assegurando conformidade legal.",
  },
  {
    icon: MessageSquare,
    title: "Omnichannel com CRM Integrado",
    description: "Gerencie todas as conversas em um só lugar — WhatsApp, Instagram, Chat, E-mail integrados ao seu CRM.",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento de Aplicativos Mobile",
    description: "Criamos apps sob medida — com inteligência, segurança e escalabilidade. Performance, usabilidade e integração total.",
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    description: "Criamos fluxos automáticos que conectam ferramentas, realizam ações em tempo real e garantem agilidade nas operações.",
  },
  {
    icon: Phone,
    title: "Telefonia IP (VoIP)",
    description: "Reduza custos e ganhe flexibilidade com comunicação digital de alta qualidade via internet com controle total.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-card/30 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1),transparent_70%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Sua TI mais inteligente<br />começa com a NextTrust
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas e personalizadas para a transformação digital do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate transition-all duration-300 group border-primary/10 bg-background/50 backdrop-blur-sm"
              data-testid={`card-service-${index}`}
            >
              <div className="mb-5 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-chart-2/10 inline-block group-hover:from-primary/20 group-hover:to-chart-2/20 transition-all">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
