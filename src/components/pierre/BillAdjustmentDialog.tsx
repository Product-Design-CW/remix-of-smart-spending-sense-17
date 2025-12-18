import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBill } from "@/context/BillContext";

const BillAdjustmentDialog = () => {
  const { setBillAmount, isCustomized } = useBill();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Always open if not customized (which is always true on reload now)
    if (!isCustomized) {
      setIsOpen(true);
    }
  }, [isCustomized]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(inputValue.replace(/[^\d.,]/g, '').replace(',', '.'));
    if (!isNaN(amount) && amount > 0) {
      setBillAmount(amount);
      setIsOpen(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px] sm:rounded-[24px] rounded-[24px] border-none">
        <DialogHeader>
          <DialogTitle>Bem-vindo ao Pierre</DialogTitle>
          <DialogDescription>
            Para uma experiência personalizada, informe o valor da sua fatura de Novembro.
            Adaptaremos todas as análises para a sua realidade.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Input
              id="amount"
              placeholder="R$ 0,00"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="text-lg"
              autoFocus
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="rounded-full">Personalizar Experiência</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BillAdjustmentDialog;
