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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log("Form submitted:", formData);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Agende uma Consultoria Inicial
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Teremos o prazer de analisar suas necessidades e elaborar um plano de ação personalizado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8">
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

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full hover-elevate active-elevate-2"
                  disabled={isSubmitting}
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contato Direto</h3>
              <div className="space-y-4">
                <a 
                  href="tel:+5511983522274"
                  className="flex items-center gap-3 p-4 rounded-lg hover-elevate active-elevate-2 transition-all"
                  data-testid="link-phone"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Telefone</div>
                    <div className="font-semibold">(11) 98352-2274</div>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/johnnybraga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg hover-elevate active-elevate-2 transition-all"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                    <div className="font-semibold">Johnny Braga</div>
                  </div>
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-chart-2/5">
              <h3 className="text-lg font-semibold mb-2">Horário de Atendimento</h3>
              <p className="text-sm text-muted-foreground">
                Segunda a Sexta: 9h às 18h<br />
                Suporte 24/7 disponível para clientes
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
