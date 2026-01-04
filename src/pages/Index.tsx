import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, FileText, Search, TrendingDown, MessageSquare, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "553496348535";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de saber mais sobre a auditoria comercial.");

const handleWhatsAppClick = () => {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
};

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">Auditoria Pro</span>
          </div>
          <Button variant="outline" className="border-border hover:bg-secondary" onClick={handleWhatsAppClick}>
            Fale Conosco
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Análise humana + IA para precisão máxima</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Mostramos exatamente onde sua empresa{" "}
            <span className="text-primary">perde vendas e dinheiro</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Auditoria comercial humana. Analisamos suas conversas de vendas (WhatsApp/CRM) e entregamos um relatório claro com os vazamentos de receita.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg" onClick={handleWhatsAppClick}>
              Solicitar Auditoria
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary px-8 py-6 text-lg" onClick={() => scrollToSection("como-funciona")}>
              Ver Como Funciona
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>Entrega em 72h</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>100% Acionável</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Onde sua empresa está vazando dinheiro?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A maioria das empresas perde vendas todos os dias sem nem perceber. Identificamos esses pontos cegos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <TrendingDown className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Leads não respondidos</h3>
                <p className="text-muted-foreground">Clientes interessados que ficaram sem resposta ou foram respondidos tarde demais.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <MessageSquare className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Objeções mal tratadas</h3>
                <p className="text-muted-foreground">Vendedores que perdem vendas por não saber contornar objeções comuns.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <Search className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Fechamento fraco</h3>
                <p className="text-muted-foreground">Conversas que tinham tudo para fechar, mas morreram sem um próximo passo claro.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como funciona
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Processo simples e direto. Você nos envia as conversas, nós encontramos onde está o problema.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Envie suas conversas</h3>
                  <p className="text-muted-foreground">Exporte conversas do WhatsApp, CRM ou qualquer plataforma que você use. Nós cuidamos do resto.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Análise humana + IA</h3>
                  <p className="text-muted-foreground">Nossa equipe analisa manualmente cada conversa. A IA ajuda a organizar padrões e acelerar a análise.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Relatório em até 72h</h3>
                  <p className="text-muted-foreground">Receba um relatório claro e acionável mostrando exatamente onde estão os vazamentos e como corrigir.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que você recebe
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Análise humana das conversas</h3>
                <p className="text-muted-foreground text-sm">Cada conversa é lida e analisada por um especialista em vendas.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Relatório claro com vazamentos</h3>
                <p className="text-muted-foreground text-sm">Documento objetivo mostrando onde você está perdendo dinheiro.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Pontos de correção imediata</h3>
                <p className="text-muted-foreground text-sm">Ações práticas que você pode implementar no mesmo dia.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Entrega em até 72h</h3>
                <p className="text-muted-foreground text-sm">Rápido o suficiente para você agir enquanto ainda dá tempo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center bg-card border border-border rounded-2xl p-10 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pare de perder vendas hoje
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Descubra exatamente onde sua operação comercial está falhando. Relatório completo em até 72 horas.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg" onClick={handleWhatsAppClick}>
              Solicitar Minha Auditoria
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <FileText className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-foreground font-medium">Auditoria Pro</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2026 Auditoria Pro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
