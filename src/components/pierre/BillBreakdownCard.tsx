import { BillBreakdown } from '@/types/pierre';
import { formatCurrency } from '@/data/pierreBillData';

interface BillBreakdownCardProps {
  breakdown: BillBreakdown;
}

const BillBreakdownCard = ({ breakdown }: BillBreakdownCardProps) => {
  const totalAmount = 
    breakdown.pastDecisions.amount + 
    breakdown.thisMonthChoices.amount + 
    breakdown.costOfCredit.amount;

  const pastDecisionsPercentage = Math.round((breakdown.pastDecisions.amount / totalAmount) * 100);
  const thisMonthPercentage = Math.round((breakdown.thisMonthChoices.amount / totalAmount) * 100);
  const costOfCreditPercentage = Math.round((breakdown.costOfCredit.amount / totalAmount) * 100);

  const segments = [
    {
      label: 'Parcelas e recorrências',
      percentage: pastDecisionsPercentage,
      amount: breakdown.pastDecisions.amount,
      color: 'bg-zinc-600',
      dotColor: 'bg-zinc-600',
    },
    {
      label: 'Compras do mês',
      percentage: thisMonthPercentage,
      amount: breakdown.thisMonthChoices.amount,
      color: 'bg-brand', // Brand bright green
      dotColor: 'bg-brand',
    },
    {
      label: 'Juros e taxas',
      percentage: costOfCreditPercentage,
      amount: breakdown.costOfCredit.amount,
      color: 'bg-red-500', // Destructive
      dotColor: 'bg-red-500',
    },
  ];

  return (
    <section className="">
      <div className="bg-transparent rounded-[24px]">
        <h2 className="font-medium text-lg leading-6 mb-6 text-foreground">
          {breakdown.explanation}
        </h2>

        {/* Visual bar */}
        <div className="flex gap-[2px] items-center overflow-hidden rounded-[24px] w-full h-[16px] mb-6">
          {segments.map((seg, i) => (
            <div
              key={i}
              className={`${seg.color} h-full rounded-[4px] first:rounded-l-[4px] last:rounded-r-[4px] transition-all duration-700`}
              style={{ flex: seg.percentage }}
            />
          ))}
        </div>

        {/* Breakdown items */}
        <div className="flex flex-col gap-4 w-full">
          {segments.map((seg, i) => (
            <div key={i} className="flex items-center justify-between w-full">
              <div className="flex gap-2 sm:gap-3 items-center min-w-0 flex-1">
                <div className={`relative shrink-0 size-[8px] rounded-full ${seg.dotColor}`} />
                <p className="font-normal text-xs sm:text-sm text-foreground truncate">
                  {seg.label} <span className="text-muted-foreground">({seg.percentage}%)</span>
                </p>
              </div>
              <div className="flex items-center pl-2">
                <p className="font-normal text-xs sm:text-sm text-foreground whitespace-nowrap">
                  {formatCurrency(seg.amount)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BillBreakdownCard;
