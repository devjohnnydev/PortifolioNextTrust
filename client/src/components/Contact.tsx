import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Contato NextTrust - ${formData.service || 'Consulta Geral'}`;
    const body = `
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone || 'Não informado'}
Empresa: ${formData.company || 'Não informado'}
Serviço: ${formData.service || 'Não especificado'}

Mensagem:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:contato@nexttrust.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Abrindo cliente de email...",
      description: "Enviando sua mensagem para contato@nexttrust.com.br",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const handleWhatsAppClick = () => {
    const message = formData.name 
      ? `Olá! Meu nome é ${formData.name} e gostaria de saber mais sobre ${formData.service || 'os serviços da NextTrust'}.`
      : "Olá! Gostaria de saber mais sobre os serviços da NextTrust.";
    
    window.open(`https://wa.me/5511983522274?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Entre em Contato</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Agende uma Consultoria Inicial
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Teremos o prazer de analisar suas necessidades e elaborar um plano de ação personalizado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-10 border-primary/10 bg-card/50 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      placeholder="(11) 98765-4321"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      data-testid="input-phone"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      placeholder="Nome da sua empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      data-testid="input-company"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Serviço de Interesse</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger data-testid="select-service">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultoria">Consultoria em TI</SelectItem>
                      <SelectItem value="cloud">Cloud Computing</SelectItem>
                      <SelectItem value="security">Firewall & Segurança</SelectItem>
                      <SelectItem value="backup">Backup & Recovery</SelectItem>
                      <SelectItem value="omnichannel">Omnichannel & CRM</SelectItem>
                      <SelectItem value="mobile">Desenvolvimento Mobile</SelectItem>
                      <SelectItem value="automation">Automação de Processos</SelectItem>
                      <SelectItem value="voip">Telefonia IP (VoIP)</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos sobre suas necessidades..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-32"
                    data-testid="input-message"
                  />
                </div>

                <div className="flex gap-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="flex-1 hover-elevate active-elevate-2"
                    data-testid="button-submit-contact"
                  >
                    Enviar por Email
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <Button 
                    type="button"
                    size="lg" 
                    variant="outline"
                    className="flex-1 hover-elevate active-elevate-2 border-primary/20"
                    onClick={handleWhatsAppClick}
                    data-testid="button-whatsapp"
                  >
                    WhatsApp
                    <Phone className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-8 border-primary/10 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Contato Direto</h3>
              <div className="space-y-5">
                <a 
                  href="tel:+5511983522274"
                  className="flex items-center gap-4 p-5 rounded-xl hover-elevate active-elevate-2 transition-all border border-primary/10"
                  data-testid="link-phone"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">Telefone</div>
                    <div className="font-bold text-lg">(11) 98352-2274</div>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/johnnybraga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl hover-elevate active-elevate-2 transition-all border border-primary/10"
                  data-testid="link-linkedin"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">LinkedIn</div>
                    <div className="font-bold text-lg">Johnny Braga</div>
                  </div>
                </a>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-chart-2/10 border-primary/20">
              <h3 className="text-xl font-bold mb-3">Horário de Atendimento</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Segunda a Sexta:</strong> 9h às 18h<br />
                <strong>Suporte 24/7</strong> disponível para clientes
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
