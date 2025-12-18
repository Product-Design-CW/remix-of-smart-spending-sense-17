import { SuggestedAction } from '@/types/pierre';
import { Target, Search, Bell, X, ArrowRight, Link2, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SuggestedActionsProps {
  actions: SuggestedAction[];
  isLocked?: boolean;
  onUnlock?: () => void;
}

const actionIcons = {
  connect: Link2,
  limit: Target,
  review: Search,
  alert: Bell,
  cancel: X,
};

const SuggestedActions = ({ actions, isLocked = true, onUnlock }: SuggestedActionsProps) => {
  return (
    <section className="relative">
      <div className="text-center mb-8">
        <h2 className="font-serif text-2xl mb-2">Uma pequena mudança</h2>
        <p className="text-muted-foreground">pode tornar o próximo mês mais leve</p>
      </div>

      <div className="space-y-4 relative">
        {actions.map((action) => {
          const Icon = actionIcons[action.type];
          return (
            <button
              key={action.id}
              disabled={isLocked}
              className={`w-full text-left bg-card rounded-[24px] p-5 
                         transition-all duration-200 group ${isLocked ? 'blur-sm select-none' : 'hover:bg-surface/50'}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-[24px] bg-surface-hover">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium mb-1 text-foreground">{action.title}</h3>
                    {!isLocked && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary 
                                             group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{action.description}</p>
                  <p className="text-xs text-primary font-medium">{action.impact}</p>
                </div>
              </div>
            </button>
          );
        })}

        {isLocked && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
            {/* Dark gradient overlay for better text contrast if needed, though blur helps */}
            <div className="bg-background/80 backdrop-blur-md absolute inset-0 rounded-[24px] border border-white/10" />
            
            <div className="relative z-20 flex flex-col items-center max-w-sm">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-foreground">
                Desbloqueie suas recomendações
              </h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Identificamos oportunidades de economia exclusivas para o seu perfil. Assine para ver como poupar mais.
              </p>
              <Button 
                onClick={onUnlock} 
                className="bg-[#BEF264] hover:bg-[#a3d945] text-black font-medium rounded-full px-8 h-10 transition-transform active:scale-95"
              >
                Ver oportunidades
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SuggestedActions;
