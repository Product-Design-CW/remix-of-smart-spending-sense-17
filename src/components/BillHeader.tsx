import { BillSummary } from '@/types/bill';
import { CreditCard, Calendar, ArrowRight } from 'lucide-react';

interface BillHeaderProps {
  summary: BillSummary;
}

const BillHeader = ({ summary }: BillHeaderProps) => {
  const formatCurrency = (amount: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

  const formatDate = (dateStr: string) => 
    new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div className="relative overflow-hidden rounded-2xl gradient-card shadow-card p-6 md:p-8 animate-fade-in">
      {/* Glow effect */}
      <div className="absolute inset-0 gradient-glow opacity-50" />
      
      <div className="relative z-10">
        {/* Card info */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
            <CreditCard className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{summary.cardType}</p>
            <p className="font-mono text-foreground">•••• {summary.cardLastFour}</p>
          </div>
        </div>

        {/* Total amount */}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-1">Total Amount Due</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-gradient">{formatCurrency(summary.totalAmount)}</span>
          </h1>
        </div>

        {/* Due date and period */}
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Due Date</p>
              <p className="text-sm font-medium">{formatDate(summary.dueDate)}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-muted-foreground">
              <span className="text-xs">{formatDate(summary.statementPeriod.start)}</span>
              <ArrowRight className="w-3 h-3" />
              <span className="text-xs">{formatDate(summary.statementPeriod.end)}</span>
            </div>
          </div>
        </div>

        {/* Balance breakdown */}
        <div className="mt-6 pt-6 border-t border-border/50 grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Previous</p>
            <p className="font-mono text-sm">{formatCurrency(summary.previousBalance)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Payments</p>
            <p className="font-mono text-sm text-category-food">-{formatCurrency(summary.payments)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">New Charges</p>
            <p className="font-mono text-sm">{formatCurrency(summary.newCharges)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillHeader;
