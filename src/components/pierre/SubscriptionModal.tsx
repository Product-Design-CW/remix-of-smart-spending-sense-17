import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubscriptionModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const SubscriptionModal = ({ isOpen, onOpenChange }: SubscriptionModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none shadow-none overflow-visible [&>button]:hidden">
        
        {/* Custom close button */}
        <button 
          onClick={() => onOpenChange(false)}
          className="absolute -top-12 right-0 md:-right-12 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-4 p-4">
          {/* Pierre Pro */}
          <div className="bg-[#1C1C1E] rounded-[32px] p-8 flex flex-col h-full border border-white/10 relative overflow-hidden">
            {/* Tag */}
            <div className="absolute top-0 right-0 bg-[#BEF264] text-black text-xs font-bold px-4 py-2 rounded-bl-[16px]">
              Mais Popular
            </div>

            <div className="mb-6">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Pierre Pro</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-medium text-white">R$ 39</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Conecte até 2 contas bancárias e tenha controle avançado das suas finanças
            </p>

            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Conecte até 2 contas bancárias",
                "Conversas ilimitadas",
                "Alertas inteligentes",
                "Lembretes de pagamentos",
                "Relatórios exclusivos e personalizados"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-white shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full bg-[#BEF264] hover:bg-[#a3d945] text-black font-medium rounded-full h-12 text-base transition-transform active:scale-95">
              Seja pro
            </Button>
          </div>

          {/* Pierre Premium */}
          <div className="bg-[#1C1C1E] rounded-[32px] p-8 flex flex-col h-full border border-white/10">
            <div className="mb-6">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Pierre Premium</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-medium text-white">R$ 199</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Conecte múltiplas contas bancárias e tenha visão completa das suas finanças
            </p>

            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Tudo do Pro",
                "Conecte múltiplas contas bancárias",
                "Acesso prioritário a novidades do App",
                "Ainda mais alertas inteligentes",
                "Maior limite de lembretes de pagamentos"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-white shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full bg-[#BEF264] hover:bg-[#a3d945] text-black font-medium rounded-full h-12 text-base transition-transform active:scale-95">
              Assine o Premium
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionModal;

