import { InstallmentSummary } from '@/types/pierre';
import { formatCurrency, formatMonthYear } from '@/data/pierreBillData';
import { Clock, ChevronDown, CalendarCheck } from 'lucide-react';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface InstallmentsCardProps {
  installments: InstallmentSummary;
}

const InstallmentsCard = ({ installments }: InstallmentsCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="opacity-0 animate-fade-up delay-4">
      <div className="surface-warm rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-3 mb-6">
          <div className="p-2 rounded-xl bg-insight-warning/20">
            <Clock className="w-5 h-5 text-insight-warning" />
          </div>
          <div>
            <h2 className="font-serif text-xl">Your future self is paying</h2>
            <p className="text-sm text-muted-foreground mt-1">Installments are future debt, not spending</p>
          </div>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-background/60 rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">This bill</p>
            <p className="font-serif text-2xl font-medium">{formatCurrency(installments.totalThisBill)}</p>
          </div>
          <div className="bg-background/60 rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Monthly impact</p>
            <p className="font-serif text-2xl font-medium">{formatCurrency(installments.monthlyImpact)}</p>
          </div>
        </div>

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

        <p className="text-foreground/80 leading-relaxed mb-6">
          {installments.insight}
        </p>

        {/* Expandable details */}
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
            <span>See all installments</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>

          <CollapsibleContent>
            <div className="mt-4 pt-4 border-t border-border/50 space-y-3">
              {installments.items.map((item, i) => (
                <div 
                  key={i}
                  className="flex items-center justify-between py-2"
                >
                  <div>
                    <p className="text-sm font-medium">{item.merchant}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.currentInstallment}/{item.totalInstallments} • Originally {formatCurrency(item.originalAmount)}
                    </p>
                    <p className="text-xs text-primary/80 mt-0.5">
                      Termina em {formatMonthYear(item.endDate)}
                    </p>
                  </div>
                  <p className="font-medium text-sm">{formatCurrency(item.monthlyAmount)}</p>
                </div>
              ))}

              <div className="pt-3 border-t border-border/50">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total remaining</span>
                  <span className="font-medium">{formatCurrency(installments.totalRemaining)}</span>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

export default InstallmentsCard;
