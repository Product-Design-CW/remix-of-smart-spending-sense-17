import { FutureSimulation, InstallmentSummary } from '@/types/pierre';
import { formatCurrency, formatMonthYear } from '@/data/pierreBillData';

interface FutureSimulationCardProps {
  simulation: FutureSimulation;
  installments: InstallmentSummary;
  creditLimit?: number;
}

const FutureSimulationCard = ({ simulation, installments, creditLimit = 0 }: FutureSimulationCardProps) => {

  return (
    <section className="opacity-0 animate-fade-up delay-2">
      <div className="bg-transparent rounded-[24px]">
        <div className="flex flex-col gap-2 mb-6">
          <div className="bg-surface/50 rounded-[24px] p-4 w-full">
            <p className="text-sm text-muted-foreground mb-1">Sua fatura mínima inevitável</p>
            <p className="font-serif text-2xl font-medium text-foreground">
              {formatCurrency(simulation.minimumNextMonth)}
            </p>
          </div>

        </div>

        {/* Installments list - Always visible */}
        <div className="mt-8 space-y-4">
          <p className="text-base sm:text-lg text-foreground px-2 mb-3 leading-relaxed">
            Já que estamos falando de compromissos recorrentes, dá uma olhada no quanto falta para quitar suas parcelas:
          </p>
          
          {installments.items.map((item, i) => {
            const remainingInstallments = item.totalInstallments - item.currentInstallment;
            const remainingAmount = remainingInstallments * item.monthlyAmount;
            
            return (
              <div key={i} className="bg-surface/50 rounded-[24px] p-4">
                <div className="flex items-start justify-between mb-3">
                  <p className="font-medium">{item.merchant}</p>
                  <p className="font-medium text-primary">{formatCurrency(item.monthlyAmount)}/mês</p>
                </div>

                {/* Progress bar */}
                <div className="mb-3">
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div 
                      className="bg-primary h-1.5 rounded-full transition-all"
                      style={{ width: `${(item.currentInstallment / item.totalInstallments) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-1.5">
                    <p className="text-[10px] sm:text-xs text-muted-foreground">
                      {item.currentInstallment} de {item.totalInstallments}
                    </p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">
                      {Math.round((item.currentInstallment / item.totalInstallments) * 100)}% pago
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm mt-3 pt-4">
                  {/* "Parcelas X de Y" line removed from here to move it below progress bar */}
                  
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Falta pagar</span>
                    <span className="font-medium">{formatCurrency(remainingAmount)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Termina em</span>
                    <span className="font-medium">{formatMonthYear(item.endDate)}</span>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="pt-3 border-t border-border/50">
            <div className="flex items-center justify-between px-2">
              <span className="text-muted-foreground">Total restante em parcelas</span>
              <span className="font-medium text-lg">{formatCurrency(installments.totalRemaining)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSimulationCard;