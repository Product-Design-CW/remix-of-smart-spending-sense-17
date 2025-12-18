import { CategorySpending } from '@/types/pierre';
import { formatCurrency, formatDate } from '@/data/pierreBillData';
import { TrendingUp, TrendingDown, Minus, ChevronDown, Utensils, ShoppingBag, Plane, Drama, Dumbbell, ShieldCheck, Laptop, MoreHorizontal, Car } from 'lucide-react';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface CategoryInsightsProps {
  categories: CategorySpending[];
}

const CategoryInsights = ({ categories }: CategoryInsightsProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const totalAmount = categories.reduce((sum, cat) => sum + cat.amount, 0);

  const getCategoryStyle = (id: string, name: string) => {
    // Map based on ID or Name to ensure consistency with data
    const normalizedName = name.toLowerCase();
    
    if (normalizedName.includes('alimentação') || normalizedName.includes('food')) {
      return { icon: Utensils, color: 'bg-cat-food', text: 'text-cat-food' };
    }
    if (normalizedName.includes('compras') || normalizedName.includes('shopping')) {
      return { icon: ShoppingBag, color: 'bg-cat-shopping', text: 'text-cat-shopping' };
    }
    if (normalizedName.includes('transporte') || normalizedName.includes('transport')) {
      return { icon: Car, color: 'bg-cat-transport', text: 'text-cat-transport' }; // Figma used Plane for "Viagens", using Car for Transport
    }
    if (normalizedName.includes('viage') || normalizedName.includes('travel')) {
      return { icon: Plane, color: 'bg-cat-travel', text: 'text-cat-travel' };
    }
    if (normalizedName.includes('entretenimento') || normalizedName.includes('lazer')) {
      return { icon: Drama, color: 'bg-cat-leisure', text: 'text-cat-leisure' };
    }
    if (normalizedName.includes('saúde') || normalizedName.includes('health')) {
      return { icon: Dumbbell, color: 'bg-cat-health', text: 'text-cat-health' };
    }
    if (normalizedName.includes('seguro')) {
      return { icon: ShieldCheck, color: 'bg-cat-insurance', text: 'text-cat-insurance' };
    }
    if (normalizedName.includes('digit') || normalizedName.includes('tech')) {
      return { icon: Laptop, color: 'bg-cat-digital', text: 'text-cat-digital' };
    }
    
    return { icon: MoreHorizontal, color: 'bg-cat-other', text: 'text-cat-other' };
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-status-destructive" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-status-success" />;
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const formatDelta = (delta: number) => {
    if (delta === 0) return 'Mesmo valor';
    const prefix = delta > 0 ? '+' : '';
    return `${prefix}${formatCurrency(delta)}`;
  };

  return (
    <section className="opacity-0 animate-fade-up delay-3">
      {/* Header & Chart */}
      <div className="mb-8">
        <p className="font-medium text-muted-foreground text-sm sm:text-base mb-1">Gastos por categoria</p>
        <h2 className="font-medium text-3xl sm:text-4xl text-foreground mb-4">{formatCurrency(totalAmount)}</h2>
        
        <div className="flex w-full h-4 rounded-[16px] overflow-hidden gap-1">
          {categories.map((category) => {
            const { color } = getCategoryStyle(category.id, category.name);
            const percentage = (category.amount / totalAmount) * 100;
            return (
              <div 
                key={category.id} 
                className={`h-full rounded-[4px] ${color}`} 
                style={{ width: `${percentage}%` }}
              />
            );
          })}
        </div>
      </div>

      {/* List */}
      <div className="flex flex-col gap-2">
        {categories.map((category) => {
          const delta = category.amount - category.previousAmount;
          const { icon: Icon, color, text } = getCategoryStyle(category.id, category.name);
          const percentage = Math.round((category.amount / totalAmount) * 100);

          return (
            <Collapsible
              key={category.id}
              open={expandedId === category.id}
              onOpenChange={(open) => setExpandedId(open ? category.id : null)}
              className="border-b border-border/50 last:border-0"
            >
              <CollapsibleTrigger className="w-full py-3 sm:py-4 flex items-center justify-between group hover:bg-surface/50 transition-colors px-1 -mx-1 rounded-[16px]">
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className={`p-2.5 sm:p-3 rounded-[16px] bg-surface-hover flex items-center justify-center shrink-0`}>
                     {/* The icon color should match the category color but formatted nicely */}
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${text}`} /> 
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm sm:text-base truncate">{category.name}</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">{percentage}% dos gastos</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 ml-2 shrink-0">
                  <span className="text-muted-foreground text-sm sm:text-base whitespace-nowrap">{formatCurrency(category.amount)}</span>
                  <div className="bg-transparent rounded-full p-1 group-hover:bg-surface-hover transition-colors">
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transition-transform duration-200 ${expandedId === category.id ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="px-1 pb-6 pt-2">
                  <div className="bg-surface/50 rounded-[16px] p-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Mês anterior: {formatCurrency(category.previousAmount)}</span>
                      <div className="flex items-center gap-2">
                         {getTrendIcon(category.trend)}
                         <span className={category.trend === 'up' ? 'text-status-destructive' : category.trend === 'down' ? 'text-status-success' : 'text-muted-foreground'}>
                           {formatDelta(delta)} ({category.trend === 'up' ? '+' : category.trend === 'down' ? '-' : ''}{category.trendPercent}%)
                         </span>
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {category.insight}
                    </p>

                    {category.transactions && category.transactions.length > 0 && (
                      <div className="pt-4 mt-4 border-t border-border/30">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Transações</p>
                        <div className="space-y-3">
                          {category.transactions.map((transaction) => (
                            <div key={transaction.id} className="flex items-center justify-between text-sm">
                              <div>
                                <p className="font-medium text-foreground">{transaction.name}</p>
                                <p className="text-xs text-muted-foreground">{formatDate(transaction.date)}</p>
                              </div>
                              <span className="font-medium">{formatCurrency(transaction.amount)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryInsights;
