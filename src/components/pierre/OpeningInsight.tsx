import { BillOverview } from '@/types/pierre';
import { formatCurrency, formatDate } from '@/data/pierreBillData';
import { ArrowUp, ArrowDown, Calendar } from 'lucide-react';

interface OpeningInsightProps {
  overview: BillOverview;
}

const OpeningInsight = ({ overview }: OpeningInsightProps) => {
  const isIncrease = overview.changePercent > 0;
  const changeAbs = Math.abs(overview.changePercent);

  return (
    <section className="opacity-0 animate-fade-up">
      {/* Main insight */}
      <p className="text-h1 sm:text-[30px] text-2xl mb-8 sm:mb-10 text-foreground/90">
        {overview.insight.summary}
      </p>

      {/* Bill amount */}
      <div className="space-y-4">
        <div className="flex items-end gap-3 sm:gap-4 flex-wrap">
          <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            {formatCurrency(overview.totalAmount)}
          </span>
          
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
            ${isIncrease ? 'bg-status-destructive/10 text-status-destructive' : 'bg-status-success/10 text-status-success'}`}>
            {isIncrease ? (
              <ArrowUp className="w-4 h-4" />
            ) : (
              <ArrowDown className="w-4 h-4" />
            )}
            <span>{changeAbs.toFixed(0)}% vs mês passado</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">Vencimento em {formatDate(overview.dueDate)}</span>
        </div>
      </div>
    </section>
  );
};

export default OpeningInsight;
