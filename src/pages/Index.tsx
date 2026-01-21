import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  Clock,
  FileText,
  Search,
  TrendingDown,
  MessageSquare,
  ArrowRight,
  Target,
  BarChart3,
  Megaphone,
  FileSpreadsheet,
  Users,
  MousePointer,
  Zap,
  Shield,
  Database,
  Rocket,
  X,
  Menu,
  ChevronRight,
  Eye,
  Palette,
  MessageCircle,
  PieChart,
  Activity,
} from "lucide-react";
import { DashboardMockup } from "@/components/DashboardMockup";
import { ReportMockup } from "@/components/ReportMockup";
import { AuditRequestForm } from "@/components/AuditRequestForm";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const WHATSAPP_NUMBER = "553496348535";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de saber mais sobre a auditoria comercial da Audiencify.");

const handleWhatsAppClick = () => {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
};

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const navLinks = [
  { label: "Como funciona", id: "como-funciona" },
  { label: "O que analisamos", id: "o-que-analisamos" },
  { label: "Entregáveis", id: "entregaveis" },
  { label: "Para quem é", id: "para-quem" },
  { label: "FAQ", id: "faq" },
];

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Target className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">Audiencify</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden sm:flex border-border hover:bg-secondary"
              onClick={handleWhatsAppClick}
            >
              Fale Conosco
            </Button>
            <Button
              className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection("solicitar")}
            >
              Solicitar Auditoria
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background px-6 py-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-3 border-t border-border">
                <Button variant="outline" onClick={handleWhatsAppClick}>
                  Fale Conosco
                </Button>
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => {
                    scrollToSection("solicitar");
                    setMobileMenuOpen(false);
                  }}
                >
                  Solicitar Auditoria
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">
                    Diagnóstico profissional para empresas que querem crescer
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Descubra onde sua empresa está{" "}
                  <span className="text-primary">perdendo vendas</span> sem perceber
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                  Seu funil pode estar vazando em vários pontos: anúncios, páginas, conversas ou processos. 
                  Fazemos o raio-X completo e entregamos um plano de ação prático e priorizado.
                </p>

                {/* Feature Badges */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                  {[
                    { icon: Search, label: "Raio-X do funil" },
                    { icon: FileText, label: "Plano prático" },
                    { icon: Target, label: "Ajustes focados" },
                    { icon: Shield, label: "Confidencialidade" },
                    { icon: Database, label: "Orientado por dados" },
                    { icon: Zap, label: "Ações rápidas" },
                  ].map((badge, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1.5 rounded-full text-sm text-muted-foreground"
                    >
                      <badge.icon className="w-3.5 h-3.5" />
                      <span>{badge.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                    onClick={() => scrollToSection("solicitar")}
                  >
                    Solicitar Diagnóstico
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-secondary px-8 py-6 text-lg"
                    onClick={() => scrollToSection("como-funciona")}
                  >
                    Ver Como Funciona
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  Sem compromisso • Confidencial • Diagnóstico claro e plano prático
                </p>
              </div>

              {/* Right Content - Dashboard Mockup */}
              <div className="hidden lg:block">
                <DashboardMockup />
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Entrega em até 72h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>100% Acionável</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Dados Confidenciais</span>
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
                  <h3 className="text-xl font-semibold text-foreground mb-3">Leads chegam e somem</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>WhatsApp sem roteiro ou script de qualificação</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Follow-up irregular ou inexistente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>CRM bagunçado ou subutilizado</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <MessageSquare className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Anúncio roda mas não vira caixa</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Segmentação ou rastreamento errado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Criativos atraem curiosos, não compradores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Promessa desalinhada com a entrega</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <Search className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Time ocupado e pouco efetivo</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Retrabalho constante em tarefas simples</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Falta de prioridade clara no dia a dia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Muita tarefa, pouco resultado mensurável</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <blockquote className="text-xl md:text-2xl font-medium text-foreground italic max-w-3xl mx-auto">
                "Você não precisa trabalhar mais. Precisa corrigir o ponto certo."
              </blockquote>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section id="como-funciona" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Como funciona</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Processo simples e direto. Você nos dá acesso, nós encontramos onde está o problema.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Entendimento e Coleta</h3>
                    <p className="text-muted-foreground">
                      Você preenche um formulário rápido sobre seu negócio e compartilha os acessos necessários 
                      (anúncios, analytics, CRM, conversas). Tudo confidencial e com termo de sigilo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Raio-X do Funil</h3>
                    <p className="text-muted-foreground">
                      Nossa equipe analisa cada etapa: tráfego, criativos, páginas, conversas e processos. 
                      Usamos checklist proprietário e olhar humano para encontrar vazamentos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Plano de Ação por Prioridade</h3>
                    <p className="text-muted-foreground">
                      Você recebe um diagnóstico completo com mapa de vazamentos, quick wins (ações imediatas) 
                      e plano de correção priorizado por impacto. Tudo em até 72h.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Analyze */}
        <section id="o-que-analisamos" className="py-20 bg-secondary/30 scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O que analisamos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                7 áreas críticas que determinam se você está ganhando ou perdendo dinheiro
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[
                {
                  icon: Megaphone,
                  title: "Tráfego e Campanhas",
                  items: ["Estrutura de campanhas", "Segmentação", "Orçamento e lances", "Rastreamento"],
                },
                {
                  icon: Palette,
                  title: "Criativos e Oferta",
                  items: ["Headlines e copies", "Elementos visuais", "Proposta de valor", "Gatilhos mentais"],
                },
                {
                  icon: Eye,
                  title: "Postagens e Conteúdo",
                  items: ["Frequência de posts", "Engajamento", "Conteúdo de valor", "Stories e reels"],
                },
                {
                  icon: MousePointer,
                  title: "Landing Pages",
                  items: ["Velocidade de carga", "Copy e CTA", "Formulários", "Mobile experience"],
                },
                {
                  icon: MessageCircle,
                  title: "Conversas de Fechamento",
                  items: ["Tempo de resposta", "Qualificação", "Tratamento de objeções", "Follow-up"],
                },
                {
                  icon: PieChart,
                  title: "CRM e Funil",
                  items: ["Etapas do funil", "Automações", "Lead scoring", "Pipeline de vendas"],
                },
                {
                  icon: Activity,
                  title: "Métricas e Rastreamento",
                  items: ["Pixels e tags", "UTMs", "Atribuição", "Dashboards"],
                },
              ].map((area, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-5">
                    <area.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{area.title}</h3>
                    <ul className="space-y-1">
                      {area.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section id="entregaveis" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O que você recebe</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Entregáveis práticos e acionáveis para corrigir seus vazamentos
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              {/* Deliverables List */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: FileSpreadsheet,
                    title: "Mapa dos vazamentos",
                    description: "Diagnóstico visual de onde você está perdendo leads e vendas",
                  },
                  {
                    icon: Target,
                    title: "Plano de ação por prioridade",
                    description: "Lista ordenada do que corrigir primeiro para maior impacto",
                  },
                  {
                    icon: CheckCircle,
                    title: "Checklist de rastreamento",
                    description: "Verificação completa de pixels, tags e atribuição",
                  },
                  {
                    icon: FileText,
                    title: "Ajustes de copy e fricção",
                    description: "Sugestões específicas para melhorar conversão em páginas",
                  },
                  {
                    icon: MessageSquare,
                    title: "Diagnóstico das conversas",
                    description: "Análise do atendimento com pontos de melhoria",
                  },
                  {
                    icon: Megaphone,
                    title: "Direção de criativos",
                    description: "Recomendações para anúncios e conteúdo mais efetivos",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Report Mockup */}
              <div className="hidden lg:block">
                <ReportMockup />
              </div>
            </div>
          </div>
        </section>

        {/* For Who Section */}
        <section id="para-quem" className="py-20 bg-secondary/30 scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Para quem é (e para quem não é)</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* For You */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">É para você se...</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Sua empresa já fatura e você quer escalar com mais previsibilidade",
                      "Você tem um negócio B2B ou B2C com funil de vendas estruturado",
                      "Investe em tráfego pago mas sente que está perdendo leads no caminho",
                      "Quer dados claros e direcionamento prático, não mais achismos",
                      "Precisa priorizar o que corrigir primeiro para ter resultados rápidos",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Not For You */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Não é para você se...</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Seu negócio está muito no início e ainda não tem vendas recorrentes",
                      "Você busca promessas milagrosas ou resultados sem esforço",
                      "Não tem disposição para implementar mudanças na operação",
                      "Espera que a auditoria execute as correções (nós diagnosticamos e direcionamos)",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Perguntas frequentes</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Quanto tempo demora para receber o diagnóstico?",
                    answer:
                      "O diagnóstico completo é entregue em até 72 horas úteis após recebermos todos os acessos necessários. Em casos mais complexos, pode levar até 5 dias úteis.",
                  },
                  {
                    question: "Preciso dar acesso ao gerenciador de anúncios?",
                    answer:
                      "Sim, para uma análise completa precisamos de acesso de visualização às suas contas de anúncios (Meta, Google, etc.), Google Analytics e, idealmente, conversas de vendas. Todos os acessos são tratados com sigilo total.",
                  },
                  {
                    question: "Vocês mexem nas configurações ou só recomendam?",
                    answer:
                      "A auditoria é focada em diagnóstico e recomendações. Não fazemos alterações nas suas contas ou ferramentas. Você recebe um plano de ação detalhado para implementar com sua equipe ou parceiros.",
                  },
                  {
                    question: "Serve para negócio local e e-commerce?",
                    answer:
                      "Sim! A metodologia se aplica a qualquer negócio que tenha um funil de vendas: serviços B2B, e-commerce, negócios locais, infoprodutos, SaaS, entre outros.",
                  },
                  {
                    question: "O que eu recebo no final?",
                    answer:
                      "Você recebe um documento completo com: mapa visual dos vazamentos, lista de quick wins (ações imediatas), plano de correção priorizado por impacto, checklist de rastreamento, análise das conversas e direcionamento para criativos e conteúdo.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Request Form Section */}
        <section id="solicitar" className="py-20 bg-secondary/30 scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Solicite sua auditoria
                </h2>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato para iniciar o diagnóstico do seu negócio.
                </p>
              </div>

              <Card className="bg-card border-border">
                <CardContent className="p-6 md:p-8">
                  <AuditRequestForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center bg-card border border-border rounded-2xl p-10 md:p-16">
              <Rocket className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pare de perder vendas hoje
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Descubra exatamente onde sua operação comercial está falhando. Diagnóstico completo em até 72 horas.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg"
                onClick={() => scrollToSection("solicitar")}
              >
                Solicitar Minha Auditoria
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Target className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-foreground font-medium">Audiencify</span>
            </div>
            <p className="text-muted-foreground text-sm">© 2026 Audiencify. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
