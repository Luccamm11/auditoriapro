import { FileText, AlertTriangle, Zap, CheckCircle } from "lucide-react";

export const ReportMockup = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Main Report Card */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-secondary/50 px-6 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Relatório de Auditoria</h3>
              <p className="text-xs text-muted-foreground">CONFIDENCIAL • Empresa XYZ</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Vazamentos Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <h4 className="text-sm font-semibold text-foreground">Vazamentos Identificados</h4>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Tempo de resposta médio: 4h (ideal: 5min)</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">42% dos leads sem follow-up</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Landing page com 68% de bounce rate</span>
              </div>
            </div>
          </div>

          {/* Quick Wins Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-primary" />
              <h4 className="text-sm font-semibold text-foreground">Quick Wins (Implementar Hoje)</h4>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Ativar notificações de lead em tempo real</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Criar template de resposta rápida</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Simplificar formulário de contato</span>
              </div>
            </div>
          </div>

          {/* Impact Projection */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Impacto estimado com correções:</p>
            <p className="text-2xl font-bold text-primary">+R$ 47.000/mês</p>
            <p className="text-xs text-muted-foreground mt-1">Baseado em taxa de conversão de 4.8%</p>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg">
        Exemplo de Entrega
      </div>
    </div>
  );
};
