import { WastedMoney } from '@/types/pierre';
import { formatCurrency } from '@/data/pierreBillData';
import { Flame } from 'lucide-react';

interface WastedMoneyCardProps {
  wastedMoney: WastedMoney;
}

const WastedMoneyCard = ({ wastedMoney }: WastedMoneyCardProps) => {
  const items = [
    { label: 'Juros', amount: wastedMoney.interest },
    { label: 'Taxas', amount: wastedMoney.fees },
    { label: 'Multa por atraso', amount: wastedMoney.lateFees },
    { label: 'Multas de trânsito', amount: wastedMoney.trafficFines },
    { label: 'Outras multas', amount: wastedMoney.otherFines },
  ].filter(item => item.amount > 0);

  return (
    <section className="">
      <div className="bg-transparent rounded-[24px]">
        <div className="flex items-center justify-start gap-3 mb-6">
          <div>
            <h2 className="font-serif text-xl">Dinheiro que não melhorou sua vida</h2>
          </div>
        </div>

        <div className="mb-6">
          <p className="font-serif text-2xl sm:text-3xl font-medium text-status-destructive">
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
