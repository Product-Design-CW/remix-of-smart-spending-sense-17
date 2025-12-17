import { BillBreakdown } from '@/types/pierre';
import { formatCurrency } from '@/data/pierreBillData';
import { History, ShoppingBag, Percent } from 'lucide-react';

interface BillBreakdownCardProps {
  breakdown: BillBreakdown;
}

const BillBreakdownCard = ({ breakdown }: BillBreakdownCardProps) => {
  const segments = [
    {
      label: 'Past decisions',
      sublabel: 'Installments + recurring',
      amount: breakdown.pastDecisions.amount,
      percentage: breakdown.pastDecisions.percentage,
      icon: History,
      color: 'bg-primary/20',
      barColor: 'bg-primary',
    },
    {
      label: "This month's choices",
      sublabel: 'Variable spending',
      amount: breakdown.thisMonthChoices.amount,
      percentage: breakdown.thisMonthChoices.percentage,
      icon: ShoppingBag,
      color: 'bg-insight-warning/20',
      barColor: 'bg-insight-warning',
    },
    {
      label: 'Cost of credit',
      sublabel: 'Interest & fees',
      amount: breakdown.costOfCredit.amount,
      percentage: breakdown.costOfCredit.percentage,
      icon: Percent,
      color: 'surface-concern',
      barColor: 'bg-insight-negative',
    },
  ];

  return (
    <section className="opacity-0 animate-fade-up delay-1">
      <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft">
        <h2 className="font-serif text-xl mb-2">What really shaped this bill</h2>
        <p className="text-muted-foreground text-sm mb-8">{breakdown.explanation}</p>

        {/* Visual bar */}
        <div className="h-3 rounded-full bg-muted flex overflow-hidden mb-8">
          {segments.map((seg, i) => (
            <div
              key={i}
              className={`${seg.barColor} transition-all duration-700`}
              style={{ width: `${seg.percentage}%` }}
            />
          ))}
        </div>

        {/* Breakdown items */}
        <div className="space-y-4">
          {segments.map((seg, i) => {
            const Icon = seg.icon;
            return (
              <div 
                key={i}
                className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${seg.color}`}>
                    <Icon className="w-4 h-4 text-foreground/70" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{seg.label}</p>
                    <p className="text-xs text-muted-foreground">{seg.sublabel}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{formatCurrency(seg.amount)}</p>
                  <p className="text-xs text-muted-foreground">{seg.percentage}%</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BillBreakdownCard;
