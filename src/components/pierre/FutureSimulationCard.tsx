import { FutureSimulation, InstallmentSummary } from '@/types/pierre';
import { formatCurrency, formatMonthYear } from '@/data/pierreBillData';
import { FastForward, CalendarCheck, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface FutureSimulationCardProps {
  simulation: FutureSimulation;
  installments: InstallmentSummary;
}

const FutureSimulationCard = ({ simulation, installments }: FutureSimulationCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="opacity-0 animate-fade-up delay-2">
      <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
        <div className="flex items-start gap-3 mb-6">
          <div className="p-2 rounded-xl bg-primary/10">
            <FastForward className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="font-serif text-xl">Se você não fizesse nada no próximo mês</h2>
            <p className="text-sm text-muted-foreground mt-1">Uma visão do seu futuro comprometido</p>
          </div>
        </div>

        <div className="bg-background/60 rounded-xl p-6 mb-6">
          <p className="text-sm text-muted-foreground mb-2">Sua fatura mínima inevitável</p>
          <p className="font-serif text-4xl font-medium text-foreground">
            {formatCurrency(simulation.minimumNextMonth)}
          </p>
        </div>

        <p className="text-foreground/80 leading-relaxed mb-6">
          {simulation.insight}
        </p>

        {/* Debt free date highlight */}
        <div className="bg-primary/10 rounded-xl p-4 mb-6 flex items-center gap-3">
          <CalendarCheck className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm font-medium text-foreground">
              Livre de parcelas em {formatMonthYear(installments.debtFreeDate)}
            </p>
            <p className="text-xs text-muted-foreground">
              {installments.remainingMonths} meses restantes
            </p>
          </div>
        </div>

        {/* Expandable installments */}
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="w-full flex items-center justify-between py-3 border-t border-border/50 hover:bg-muted/30 transition-colors rounded-lg px-2 -mx-2">
            <span className="text-sm font-medium">Ver parcelas em aberto ({installments.items.length})</span>
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>

          <CollapsibleContent>
            <div className="mt-4 space-y-4">
              {installments.items.map((item, i) => {
                const remainingInstallments = item.totalInstallments - item.currentInstallment;
                const remainingAmount = remainingInstallments * item.monthlyAmount;
                
                return (
                  <div key={i} className="bg-background/60 rounded-xl p-4">
                    <div className="flex items-start justify-between mb-3">
                      <p className="font-medium">{item.merchant}</p>
                      <p className="font-medium text-primary">{formatCurrency(item.monthlyAmount)}/mês</p>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Parcelas</span>
                        <span className="font-medium">
                          {item.currentInstallment} de {item.totalInstallments}
                          <span className="text-muted-foreground ml-1">
                            ({remainingInstallments} restantes)
                          </span>
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Falta pagar</span>
                        <span className="font-medium">{formatCurrency(remainingAmount)}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Termina em</span>
                        <span className="font-medium">{formatMonthYear(item.endDate)}</span>
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="mt-3 pt-3 border-t border-border/30">
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div 
                          className="bg-primary h-1.5 rounded-full transition-all"
                          style={{ width: `${(item.currentInstallment / item.totalInstallments) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1.5 text-right">
                        {Math.round((item.currentInstallment / item.totalInstallments) * 100)}% pago
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="pt-3 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total restante em parcelas</span>
                  <span className="font-medium text-lg">{formatCurrency(installments.totalRemaining)}</span>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

export default FutureSimulationCard;