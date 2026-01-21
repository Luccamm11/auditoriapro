import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Loader2 } from "lucide-react";

const WHATSAPP_NUMBER = "553496348535";

interface FormData {
  name: string;
  company: string;
  whatsapp: string;
  email: string;
  website: string;
  investment: string;
  problem: string;
  description: string;
  consent: boolean;
}

export const AuditRequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    whatsapp: "",
    email: "",
    website: "",
    investment: "",
    problem: "",
    description: "",
    consent: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `🔍 *Solicitação de Auditoria - Audiencify*

📋 *Dados do Contato:*
• Nome: ${formData.name}
• Empresa: ${formData.company}
• WhatsApp: ${formData.whatsapp}
${formData.email ? `• Email: ${formData.email}` : ""}
${formData.website ? `• Site/Instagram: ${formData.website}` : ""}

💰 *Investimento em Tráfego:*
${formData.investment || "Não informado"}

⚠️ *Principal Problema:*
${formData.problem || "Não informado"}

📝 *Descrição:*
${formData.description || "Não informado"}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
    
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const isFormValid = formData.name && formData.company && formData.whatsapp && formData.consent;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Empresa *</Label>
          <Input
            id="company"
            name="company"
            placeholder="Nome da sua empresa"
            value={formData.company}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="whatsapp">WhatsApp *</Label>
          <Input
            id="whatsapp"
            name="whatsapp"
            placeholder="(00) 00000-0000"
            value={formData.whatsapp}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email (opcional)</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Site ou Instagram (opcional)</Label>
        <Input
          id="website"
          name="website"
          placeholder="https://seusite.com ou @seuinstagram"
          value={formData.website}
          onChange={handleInputChange}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Investimento mensal em tráfego</Label>
          <Select onValueChange={(value) => handleSelectChange("investment", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma opção" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="menos-5k">Menos de R$ 5.000</SelectItem>
              <SelectItem value="5k-15k">R$ 5.000 a R$ 15.000</SelectItem>
              <SelectItem value="15k-50k">R$ 15.000 a R$ 50.000</SelectItem>
              <SelectItem value="50k-100k">R$ 50.000 a R$ 100.000</SelectItem>
              <SelectItem value="mais-100k">Mais de R$ 100.000</SelectItem>
              <SelectItem value="nao-invisto">Não invisto em tráfego</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Principal problema hoje</Label>
          <Select onValueChange={(value) => handleSelectChange("problem", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma opção" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="leads-nao-fecham">Leads chegam mas não fecham</SelectItem>
              <SelectItem value="poucos-leads">Poucos leads qualificados</SelectItem>
              <SelectItem value="alto-custo">Custo por lead muito alto</SelectItem>
              <SelectItem value="time-ineficiente">Time comercial ineficiente</SelectItem>
              <SelectItem value="falta-processo">Falta de processo de vendas</SelectItem>
              <SelectItem value="outro">Outro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descreva brevemente seu problema (opcional)</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Conte-nos mais sobre os desafios que sua empresa enfrenta..."
          rows={4}
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="consent"
          checked={formData.consent}
          onCheckedChange={(checked) =>
            setFormData((prev) => ({ ...prev, consent: checked as boolean }))
          }
        />
        <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
          Concordo em compartilhar esses dados para receber o diagnóstico. Suas informações são confidenciais e não serão compartilhadas com terceiros.
        </Label>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
        disabled={!isFormValid || isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Solicitar Auditoria Gratuita
            <ArrowRight className="ml-2 w-5 h-5" />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Ao clicar, você será direcionado para o WhatsApp com os dados preenchidos.
      </p>
    </form>
  );
};
