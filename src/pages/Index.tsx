import OpeningInsight from '@/components/pierre/OpeningInsight';
import BillBreakdownCard from '@/components/pierre/BillBreakdownCard';
import FutureSimulationCard from '@/components/pierre/FutureSimulationCard';
import CategoryInsights from '@/components/pierre/CategoryInsights';
import SubscriptionsCard from '@/components/pierre/SubscriptionsCard';
import WastedMoneyCard from '@/components/pierre/WastedMoneyCard';
import SmartReflections from '@/components/pierre/SmartReflections';
import SuggestedActions from '@/components/pierre/SuggestedActions';
import { useBill } from '@/context/BillContext';
import BillAdjustmentDialog from '@/components/pierre/BillAdjustmentDialog';
import SubscriptionModal from '@/components/pierre/SubscriptionModal';
import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';

const Index = () => {
  const { billData, isCustomized } = useBill();
  const mainRef = useRef<HTMLElement>(null);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [isPremium, setIsPremium] = useState(false); // Default to locked
  
  useLayoutEffect(() => {
    if (isCustomized && mainRef.current) {
      const ctx = gsap.context(() => {
        // Animate sections and dividers
        // Select all direct children of the content div, plus footer
        // Content div children are: section, div.h-px
        // Footer is footer
        
        // We can target specific elements to ensure we don't miss anything or animate wrong things
        const targets = mainRef.current?.querySelectorAll('section, .h-px, footer');
        
        if (targets && targets.length > 0) {
          gsap.fromTo(targets, 
            { 
              y: 50, 
              opacity: 0,
              filter: 'blur(10px)'
            },
            { 
              y: 0, 
              opacity: 1, 
              filter: 'blur(0px)',
              duration: 1, 
              stagger: 0.05, 
              ease: "power3.out",
              clearProps: "all" 
            }
          );
        }
      }, mainRef);
      
      return () => ctx.revert();
    }
  }, [isCustomized]);

  const handleUnlock = () => {
    setIsSubscriptionModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <BillAdjustmentDialog />
      <SubscriptionModal 
        isOpen={isSubscriptionModalOpen} 
        onOpenChange={setIsSubscriptionModalOpen} 
      />
      
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container max-w-2xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-h3-medium">Pierre</span>
            </div>
            <span className="text-body-sm text-muted-foreground">Novembro 2025</span>
          </div>
        </div>
      </header>

      {/* Main content - Only rendered if customized */}
      {isCustomized && (
        <main ref={mainRef} className="container max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
          <div className="space-y-8 sm:space-y-12">
            {/* 1. Opening Insight */}
            <OpeningInsight overview={billData.overview} />

            {/* Divider */}
            <div className="h-px bg-border/50" />

            {/* 2. Bill Breakdown */}
            <BillBreakdownCard breakdown={billData.breakdown} />

            <div className="h-px bg-border/50" />

            {/* 3. Future Simulation + Installments */}
            <FutureSimulationCard 
              simulation={billData.futureSimulation} 
              installments={billData.installments}
              creditLimit={billData.overview.creditLimit}
            />

            <div className="h-px bg-border/50" />

            {/* 4. Category Insights */}
            <CategoryInsights categories={billData.categories} />

            <div className="h-px bg-border/50" />

            {/* 5. Subscriptions */}
            <SubscriptionsCard subscriptions={billData.subscriptions} />

            <div className="h-px bg-border/50" />

            {/* 6. Wasted Money */}
            <WastedMoneyCard wastedMoney={billData.wastedMoney} />

            <div className="h-px bg-border/50" />

            {/* 7. Smart Reflections */}
            <SmartReflections reflections={billData.reflections} />

            {/* Divider */}
            <div className="h-px bg-border/50" />

            {/* 8. Suggested Actions - Locked by default */}
            <SuggestedActions 
              actions={billData.suggestedActions} 
              isLocked={!isPremium}
              onUnlock={handleUnlock}
            />
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-border/50 text-center pb-8">
            <p className="text-xs text-muted-foreground">
              Período da fatura: 1 – 30 de novembro de 2025
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Precisa de ajuda para entender algo? <button className="text-primary hover:underline">Fale com o Pierre</button>
            </p>
          </footer>
        </main>
      )}
    </div>
  );
};

export default Index;
