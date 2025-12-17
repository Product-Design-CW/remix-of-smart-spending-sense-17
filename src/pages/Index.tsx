import { pierreBill } from '@/data/pierreBillData';
import OpeningInsight from '@/components/pierre/OpeningInsight';
import BillBreakdownCard from '@/components/pierre/BillBreakdownCard';
import FutureSimulationCard from '@/components/pierre/FutureSimulationCard';
import CategoryInsights from '@/components/pierre/CategoryInsights';
import InstallmentsCard from '@/components/pierre/InstallmentsCard';
import SubscriptionsCard from '@/components/pierre/SubscriptionsCard';
import WastedMoneyCard from '@/components/pierre/WastedMoneyCard';
import SmartReflections from '@/components/pierre/SmartReflections';
import SuggestedActions from '@/components/pierre/SuggestedActions';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-medium">Pierre</span>
            </div>
            <span className="text-sm text-muted-foreground">Dezembro 2024</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container max-w-2xl mx-auto px-6 py-10">
        <div className="space-y-12">
          {/* 1. Opening Insight */}
          <OpeningInsight overview={pierreBill.overview} />

          {/* Divider */}
          <div className="h-px bg-border/50" />

          {/* 2. Bill Breakdown */}
          <BillBreakdownCard breakdown={pierreBill.breakdown} />

          {/* 3. Future Simulation */}
          <FutureSimulationCard simulation={pierreBill.futureSimulation} />

          {/* 4. Category Insights */}
          <CategoryInsights categories={pierreBill.categories} />

          {/* 5. Installments */}
          <InstallmentsCard installments={pierreBill.installments} />

          {/* 6. Subscriptions */}
          <SubscriptionsCard subscriptions={pierreBill.subscriptions} />

          {/* 7. Wasted Money */}
          <WastedMoneyCard wastedMoney={pierreBill.wastedMoney} />

          {/* 8. Smart Reflections */}
          <SmartReflections reflections={pierreBill.reflections} />

          {/* Divider */}
          <div className="h-px bg-border/50" />

          {/* 9. Suggested Actions */}
          <SuggestedActions actions={pierreBill.suggestedActions} />
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border/50 text-center pb-8">
          <p className="text-xs text-muted-foreground">
            Período da fatura: 1 – 31 de dezembro de 2024
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Precisa de ajuda para entender algo? <button className="text-primary hover:underline">Fale com o Pierre</button>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
