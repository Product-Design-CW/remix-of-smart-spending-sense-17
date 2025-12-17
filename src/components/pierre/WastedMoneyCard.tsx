import { WastedMoney } from '@/types/pierre';
import { formatCurrency } from '@/data/pierreBillData';
import { Flame } from 'lucide-react';

interface WastedMoneyCardProps {
  wastedMoney: WastedMoney;
}

const WastedMoneyCard = ({ wastedMoney }: WastedMoneyCardProps) => {
  const items = [
    { label: 'Interest', amount: wastedMoney.interest },
    { label: 'Fees', amount: wastedMoney.fees },
    ...(wastedMoney.lateFees > 0 ? [{ label: 'Late fees', amount: wastedMoney.lateFees }] : []),
  ].filter(item => item.amount > 0);

  return (
    <section className="opacity-0 animate-fade-up delay-6">
      <div className="surface-concern rounded-2xl p-6 md:p-8 border border-insight-negative/10">
        <div className="flex items-start gap-3 mb-6">
          <div className="p-2 rounded-xl bg-insight-negative/10">
            <Flame className="w-5 h-5 text-insight-negative" />
          </div>
          <div>
            <h2 className="font-serif text-xl">Money that didn't improve your life</h2>
          </div>
        </div>

        <div className="mb-6">
          <p className="font-serif text-3xl font-medium text-insight-negative">
            {formatCurrency(wastedMoney.total)}
          </p>
        </div>

        <div className="space-y-2 mb-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{item.label}</span>
              <span>{formatCurrency(item.amount)}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-foreground/70 leading-relaxed">
          {wastedMoney.insight}
        </p>
      </div>
    </section>
  );
};

export default WastedMoneyCard;
