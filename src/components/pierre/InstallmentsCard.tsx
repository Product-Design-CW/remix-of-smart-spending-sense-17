import { InstallmentSummary } from '@/types/pierre';
import { formatCurrency, formatMonthYear } from '@/data/pierreBillData';
import { Clock, ChevronDown, CalendarCheck } from 'lucide-react';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
interface InstallmentsCardProps {
  installments: InstallmentSummary;
}
const InstallmentsCard = ({
  installments
}: InstallmentsCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return <section className="opacity-0 animate-fade-up delay-4">
      <div className="bg-card rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-3 mb-6">
          <div className="p-2 rounded-xl bg-insight-warning/20">
            <Clock className="w-5 h-5 text-insight-warning" />
          </div>
          <div>
            <h2 className="font-serif text-xl">Seu eu do futuro está pagando</h2>
            <p className="text-sm text-muted-foreground mt-1">Parcelas são dívidas futuras, não gastos</p>
          </div>
        </div>

        {/* Key stats */}
        

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

        

        {/* Expandable details */}
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          

          <CollapsibleContent>
            <div className="mt-4 border-t border-border/50 space-y-3 border-0 pt-0">
              {installments.items.map((item, i) => <div key={i} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-medium">{item.merchant}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.currentInstallment}/{item.totalInstallments} • Original {formatCurrency(item.originalAmount)}
                    </p>
                    <p className="text-xs text-primary/80 mt-0.5">
                      Termina em {formatMonthYear(item.endDate)}
                    </p>
                  </div>
                  <p className="font-medium text-sm">{formatCurrency(item.monthlyAmount)}</p>
                </div>)}

              <div className="pt-3 border-t border-border/50">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total restante</span>
                  <span className="font-medium">{formatCurrency(installments.totalRemaining)}</span>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>;
};
export default InstallmentsCard;