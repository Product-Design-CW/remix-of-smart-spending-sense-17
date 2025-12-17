import { CategorySpending } from '@/types/pierre';
import { formatCurrency } from '@/data/pierreBillData';
import { TrendingUp, TrendingDown, Minus, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface CategoryInsightsProps {
  categories: CategorySpending[];
}

const CategoryInsights = ({ categories }: CategoryInsightsProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-negative" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-positive" />;
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getTrendLabel = (trend: 'up' | 'down' | 'stable', percent: number) => {
    if (trend === 'stable') return 'Estável';
    return `${trend === 'up' ? '+' : '-'}${percent}%`;
  };

  return (
    <section className="opacity-0 animate-fade-up delay-3">
      <h2 className="font-serif text-xl mb-2">Para onde foi seu dinheiro</h2>
      <p className="text-sm text-muted-foreground mb-6">Com contexto, não apenas números</p>

      <div className="space-y-3">
        {categories.map((category) => (
          <Collapsible
            key={category.id}
            open={expandedId === category.id}
            onOpenChange={(open) => setExpandedId(open ? category.id : null)}
          >
            <div className="bg-card rounded-xl overflow-hidden shadow-soft">
              <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div className="text-left">
                    <p className="font-medium">{category.name}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      {getTrendIcon(category.trend)}
                      <span className={`text-xs ${
                        category.trend === 'up' ? 'text-negative' :
                        category.trend === 'down' ? 'text-positive' :
                        'text-muted-foreground'
                      }`}>
                        {getTrendLabel(category.trend, category.trendPercent)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium">{formatCurrency(category.amount)}</span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200
                    ${expandedId === category.id ? 'rotate-180' : ''}`} />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="px-4 pb-4 pt-2 border-t border-border/50">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.insight}
                  </p>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        ))}
      </div>
    </section>
  );
};

export default CategoryInsights;
