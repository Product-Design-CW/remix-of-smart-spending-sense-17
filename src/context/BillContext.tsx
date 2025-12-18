import React, { createContext, useContext, useState, useEffect } from 'react';
import { PierreBill } from '@/types/pierre';
import { pierreBill as defaultBill } from '@/data/pierreBillData';

interface BillContextType {
  billData: PierreBill;
  setBillAmount: (amount: number) => void;
  resetBill: () => void;
  isCustomized: boolean;
}

const BillContext = createContext<BillContextType | undefined>(undefined);

const scaleAmount = (amount: number, factor: number) => {
  return Number((amount * factor).toFixed(2));
};

const scaleBillData = (bill: PierreBill, newTotal: number): PierreBill => {
  const currentTotal = bill.overview.totalAmount;
  if (currentTotal === 0) return bill;
  
  const factor = newTotal / currentTotal;

  // Deep clone and scale
  const newBill: PierreBill = JSON.parse(JSON.stringify(bill));

  // Overview
  newBill.overview.totalAmount = newTotal;
  newBill.overview.previousAmount = scaleAmount(bill.overview.previousAmount, factor);
  if (newBill.overview.creditLimit) {
    newBill.overview.creditLimit = scaleAmount(bill.overview.creditLimit, factor);
  }

  // Breakdown
  newBill.breakdown.pastDecisions.amount = scaleAmount(bill.breakdown.pastDecisions.amount, factor);
  newBill.breakdown.pastDecisions.installments = scaleAmount(bill.breakdown.pastDecisions.installments, factor);
  newBill.breakdown.pastDecisions.recurring = scaleAmount(bill.breakdown.pastDecisions.recurring, factor);
  
  newBill.breakdown.thisMonthChoices.amount = scaleAmount(bill.breakdown.thisMonthChoices.amount, factor);
  
  newBill.breakdown.costOfCredit.amount = scaleAmount(bill.breakdown.costOfCredit.amount, factor);
  newBill.breakdown.costOfCredit.interest = scaleAmount(bill.breakdown.costOfCredit.interest, factor);
  newBill.breakdown.costOfCredit.fees = scaleAmount(bill.breakdown.costOfCredit.fees, factor);

  // Future Simulation
  newBill.futureSimulation.minimumNextMonth = scaleAmount(bill.futureSimulation.minimumNextMonth, factor);
  newBill.futureSimulation.lockedAmount = scaleAmount(bill.futureSimulation.lockedAmount, factor);

  // Categories
  newBill.categories = bill.categories.map(cat => ({
    ...cat,
    amount: scaleAmount(cat.amount, factor),
    previousAmount: scaleAmount(cat.previousAmount, factor),
    transactions: cat.transactions?.map(t => ({
      ...t,
      amount: scaleAmount(t.amount, factor)
    }))
  }));

  // Installments
  newBill.installments.totalThisBill = scaleAmount(bill.installments.totalThisBill, factor);
  newBill.installments.monthlyImpact = scaleAmount(bill.installments.monthlyImpact, factor);
  newBill.installments.totalRemaining = scaleAmount(bill.installments.totalRemaining, factor);
  newBill.installments.items = bill.installments.items.map(item => ({
    ...item,
    originalAmount: scaleAmount(item.originalAmount, factor),
    monthlyAmount: scaleAmount(item.monthlyAmount, factor)
  }));

  // Subscriptions
  newBill.subscriptions.monthlyTotal = scaleAmount(bill.subscriptions.monthlyTotal, factor);
  newBill.subscriptions.annualTotal = scaleAmount(bill.subscriptions.annualTotal, factor);
  newBill.subscriptions.items = bill.subscriptions.items.map(item => ({
    ...item,
    amount: scaleAmount(item.amount, factor)
  }));

  // Wasted Money
  newBill.wastedMoney.total = scaleAmount(bill.wastedMoney.total, factor);
  newBill.wastedMoney.interest = scaleAmount(bill.wastedMoney.interest, factor);
  newBill.wastedMoney.fees = scaleAmount(bill.wastedMoney.fees, factor);
  newBill.wastedMoney.lateFees = scaleAmount(bill.wastedMoney.lateFees, factor);
  newBill.wastedMoney.trafficFines = scaleAmount(bill.wastedMoney.trafficFines, factor);
  newBill.wastedMoney.otherFines = scaleAmount(bill.wastedMoney.otherFines, factor);

  // Update text with scaled amounts (simple replacements for common patterns)
  // Note: Text replacement is tricky and error-prone. We'll skip complex text replacement for now 
  // or do very specific ones if needed. 
  // Ideally, the insights would be generated dynamically from numbers.
  // For now, we will leave text as is or update the specific ones we know contain numbers if critical.
  
  // Updating Future Simulation insight which mentions the amount explicitly
  newBill.futureSimulation.insight = `Se você não fizesse nenhuma compra no próximo mês, sua fatura ainda seria de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(newBill.futureSimulation.minimumNextMonth)}.`;

  return newBill;
};

export const BillProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [billData, setBillData] = useState<PierreBill>(defaultBill);
  const [isCustomized, setIsCustomized] = useState(false);

  // Removed localStorage loading effect to force customization on each reload

  const setBillAmount = (amount: number) => {
    const newData = scaleBillData(defaultBill, amount);
    setBillData(newData);
    setIsCustomized(true);
    // Removed localStorage saving
  };

  const resetBill = () => {
    setBillData(defaultBill);
    setIsCustomized(false);
    // Removed localStorage removal
  };

  return (
    <BillContext.Provider value={{ billData, setBillAmount, resetBill, isCustomized }}>
      {children}
    </BillContext.Provider>
  );
};

export const useBill = () => {
  const context = useContext(BillContext);
  if (context === undefined) {
    throw new Error('useBill must be used within a BillProvider');
  }
  return context;
};

