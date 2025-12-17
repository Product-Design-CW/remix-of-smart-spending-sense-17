import { SpendingInsight } from '@/types/bill';
import { TrendingUp, TrendingDown, Lightbulb, AlertCircle } from 'lucide-react';

interface SpendingInsightsProps {
  insights: SpendingInsight[];
}

const insightIcons = {
  increase: TrendingUp,
  decrease: TrendingDown,
  tip: Lightbulb,
  alert: AlertCircle,
};

const insightStyles = {
  increase: 'bg-category-entertainment/10 border-category-entertainment/30 text-category-entertainment',
  decrease: 'bg-category-food/10 border-category-food/30 text-category-food',
  tip: 'bg-category-utilities/10 border-category-utilities/30 text-category-utilities',
  alert: 'bg-primary/10 border-primary/30 text-primary',
};

const SpendingInsights = ({ insights }: SpendingInsightsProps) => {
  return (
    <div className="rounded-2xl gradient-card shadow-card p-6 animate-fade-in stagger-3">
      <div className="flex items-center gap-2 mb-6">
        <Lightbulb className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">Smart Insights</h2>
      </div>

      <div className="space-y-3">
        {insights.map((insight, index) => {
          const Icon = insightIcons[insight.type];
          return (
            <div 
              key={insight.id}
              className={`p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02]
                ${insightStyles[insight.type]} animate-scale-in opacity-0`}
              style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-background/50">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-foreground">{insight.title}</h3>
                    {insight.percentage && (
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-background/50">
                        {insight.type === 'decrease' ? '-' : '+'}{insight.percentage}%
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpendingInsights;
