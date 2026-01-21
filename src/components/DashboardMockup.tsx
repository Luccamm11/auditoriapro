import { TrendingUp, TrendingDown, Users, Eye, MousePointer, DollarSign } from "lucide-react";

export const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main Dashboard Card */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Diagnóstico do Funil</h3>
            <p className="text-sm text-muted-foreground">Últimos 30 dias</p>
          </div>
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-secondary/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Visitas</span>
            </div>
            <p className="text-2xl font-bold text-foreground">12.4K</p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-primary" />
              <span className="text-xs text-primary">+18%</span>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <MousePointer className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Cliques</span>
            </div>
            <p className="text-2xl font-bold text-foreground">3.2K</p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingDown className="w-3 h-3 text-destructive" />
              <span className="text-xs text-destructive">-5%</span>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Leads</span>
            </div>
            <p className="text-2xl font-bold text-foreground">847</p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-primary" />
              <span className="text-xs text-primary">+12%</span>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Vendas</span>
            </div>
            <p className="text-2xl font-bold text-foreground">23</p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingDown className="w-3 h-3 text-destructive" />
              <span className="text-xs text-destructive">-8%</span>
            </div>
          </div>
        </div>

        {/* Funnel Visualization */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Taxa de conversão</span>
            <span className="font-medium text-foreground">2.7%</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full w-[27%] bg-gradient-to-r from-primary to-primary/60 rounded-full" />
          </div>
          <p className="text-xs text-muted-foreground">Potencial identificado: até 5.2%</p>
        </div>
      </div>

      {/* Floating Alert Card */}
      <div className="absolute -bottom-4 -left-4 bg-destructive/10 border border-destructive/20 rounded-xl p-4 max-w-[200px] shadow-lg">
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 bg-destructive/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <TrendingDown className="w-4 h-4 text-destructive" />
          </div>
          <div>
            <p className="text-xs font-medium text-foreground">Vazamento detectado</p>
            <p className="text-xs text-muted-foreground">73% dos leads não recebem follow-up</p>
          </div>
        </div>
      </div>

      {/* Floating Success Card */}
      <div className="absolute -top-4 -right-4 bg-primary/10 border border-primary/20 rounded-xl p-3 max-w-[180px] shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
            <TrendingUp className="w-3 h-3 text-primary" />
          </div>
          <p className="text-xs font-medium text-foreground">Quick win: +R$12K/mês</p>
        </div>
      </div>
    </div>
  );
};
