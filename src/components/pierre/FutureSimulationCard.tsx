import { FutureSimulation } from '@/types/pierre';
import { formatCurrency } from '@/data/pierreBillData';
import { FastForward } from 'lucide-react';

interface FutureSimulationCardProps {
  simulation: FutureSimulation;
}

const FutureSimulationCard = ({ simulation }: FutureSimulationCardProps) => {
  return (
    <section className="opacity-0 animate-fade-up delay-2">
      <div className="surface-cool rounded-2xl p-6 md:p-8 border border-border/50">
        <div className="flex items-start gap-3 mb-6">
          <div className="p-2 rounded-xl bg-primary/10">
            <FastForward className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="font-serif text-xl">Se você não fizesse nada no próximo mês</h2>
            <p className="text-sm text-muted-foreground mt-1">Uma visão do seu futuro comprometido</p>
          </div>
        </div>

        <div className="bg-background/60 rounded-xl p-6 mb-6">
          <p className="text-sm text-muted-foreground mb-2">Sua fatura mínima inevitável</p>
          <p className="font-serif text-4xl font-medium text-foreground">
            {formatCurrency(simulation.minimumNextMonth)}
          </p>
        </div>

        <p className="text-foreground/80 leading-relaxed">
          {simulation.insight}
        </p>

        <div className="mt-6 pt-6 border-t border-border/50">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Comprometido por</span>
            <span className="font-medium">{simulation.installmentMonths} meses</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSimulationCard;
