import { SubscriptionSummary } from '@/types/pierre';
import { formatCurrency } from '@/data/pierreBillData';
import { Repeat, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface SubscriptionsCardProps {
  subscriptions: SubscriptionSummary;
}

const SubscriptionsCard = ({ subscriptions }: SubscriptionsCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="opacity-0 animate-fade-up delay-5">
      <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft">
        <div className="flex items-start gap-3 mb-6">
          <div className="p-2 rounded-xl bg-primary/10">
            <Repeat className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="font-serif text-xl">Subscriptions you don't think about</h2>
            <p className="text-sm text-muted-foreground mt-1">{subscriptions.count} recurring charges</p>
          </div>
        </div>

        {/* Annual impact highlight */}
        <div className="bg-accent/50 rounded-xl p-5 mb-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Monthly</p>
              <p className="font-serif text-xl font-medium">{formatCurrency(subscriptions.monthlyTotal)}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground mb-1">Per year</p>
              <p className="font-serif text-2xl font-medium text-foreground">{formatCurrency(subscriptions.annualTotal)}</p>
            </div>
          </div>
        </div>

        <p className="text-foreground/80 leading-relaxed mb-6">
          {subscriptions.insight}
        </p>

        {/* Expandable list */}
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
            <span>See all subscriptions</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>

          <CollapsibleContent>
            <div className="mt-4 pt-4 border-t border-border/50 space-y-3">
              {subscriptions.items.map((item, i) => (
                <div 
                  key={i}
                  className="flex items-center justify-between py-2"
                >
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.category}</p>
                  </div>
                  <p className="font-medium text-sm">{formatCurrency(item.amount)}/mo</p>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

export default SubscriptionsCard;
