import { SuggestedAction } from '@/types/pierre';
import { Target, Search, Bell, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SuggestedActionsProps {
  actions: SuggestedAction[];
}

const actionIcons = {
  limit: Target,
  review: Search,
  alert: Bell,
  cancel: X,
};

const SuggestedActions = ({ actions }: SuggestedActionsProps) => {
  return (
    <section className="opacity-0 animate-fade-up delay-7">
      <div className="text-center mb-8">
        <h2 className="font-serif text-2xl mb-2">Uma pequena mudança</h2>
        <p className="text-muted-foreground">pode tornar o próximo mês mais leve</p>
      </div>

      <div className="space-y-4">
        {actions.map((action) => {
          const Icon = actionIcons[action.type];
          return (
            <button
              key={action.id}
              className="w-full text-left bg-card hover:bg-muted/50 rounded-2xl p-5 shadow-soft 
                         transition-all duration-200 hover:shadow-lifted group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl surface-highlight">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium mb-1">{action.title}</h3>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary 
                                           group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{action.description}</p>
                  <p className="text-xs text-primary font-medium">{action.impact}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default SuggestedActions;
