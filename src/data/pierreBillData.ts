import { PierreBill } from '@/types/pierre';

export const pierreBill: PierreBill = {
  overview: {
    totalAmount: 4247.82,
    previousAmount: 3521.40,
    changePercent: 20.6,
    dueDate: '2025-01-15',
    insight: {
      summary: "This bill is higher mainly because of past installment decisions — your daily spending was actually under control.",
      tone: 'empowering',
    },
  },

  breakdown: {
    pastDecisions: {
      amount: 2380.00,
      percentage: 56,
      installments: 1680.00,
      recurring: 700.00,
    },
    thisMonthChoices: {
      amount: 1650.32,
      percentage: 39,
    },
    costOfCredit: {
      amount: 217.50,
      percentage: 5,
      interest: 180.00,
      fees: 37.50,
    },
    explanation: "More than half of this bill was already decided before the month even started.",
  },

  futureSimulation: {
    minimumNextMonth: 2050.00,
    lockedAmount: 2050.00,
    installmentMonths: 8,
    insight: "If you made zero purchases next month, your bill would still be R$ 2,050.",
  },

  categories: [
    {
      id: '1',
      name: 'Food & Delivery',
      amount: 892.45,
      trend: 'up',
      trendPercent: 28,
      insight: "Food delivery spikes on weekends are driving this category up.",
      icon: '🍽️',
    },
    {
      id: '2',
      name: 'Shopping',
      amount: 1245.00,
      trend: 'stable',
      trendPercent: 3,
      insight: "Shopping is quiet, but installments keep it heavy.",
      icon: '🛍️',
    },
    {
      id: '3',
      name: 'Transport',
      amount: 342.80,
      trend: 'down',
      trendPercent: 15,
      insight: "Transport is stable and predictable. Good control here.",
      icon: '🚗',
    },
    {
      id: '4',
      name: 'Entertainment',
      amount: 456.00,
      trend: 'up',
      trendPercent: 45,
      insight: "Concert tickets made this an unusual month.",
      icon: '🎬',
    },
    {
      id: '5',
      name: 'Health',
      amount: 189.00,
      trend: 'stable',
      trendPercent: 0,
      insight: "Consistent gym membership. Nothing unexpected.",
      icon: '💪',
    },
  ],

  installments: {
    totalThisBill: 1680.00,
    monthlyImpact: 1120.00,
    remainingMonths: 8,
    totalRemaining: 8960.00,
    debtFreeDate: '2025-09',
    items: [
      {
        merchant: 'Apple Store',
        originalAmount: 5999.00,
        monthlyAmount: 499.92,
        currentInstallment: 4,
        totalInstallments: 12,
        endDate: '2025-09',
      },
      {
        merchant: 'Furniture Store',
        originalAmount: 3200.00,
        monthlyAmount: 320.00,
        currentInstallment: 6,
        totalInstallments: 10,
        endDate: '2025-05',
      },
      {
        merchant: 'Electronics',
        originalAmount: 1800.00,
        monthlyAmount: 300.00,
        currentInstallment: 2,
        totalInstallments: 6,
        endDate: '2025-05',
      },
      {
        merchant: 'Department Store',
        originalAmount: 2240.00,
        monthlyAmount: 560.08,
        currentInstallment: 3,
        totalInstallments: 4,
        endDate: '2025-02',
      },
    ],
    insight: "Your future bills are carrying R$ 1,120 per month because of past purchases.",
  },

  subscriptions: {
    monthlyTotal: 287.94,
    annualTotal: 3455.28,
    count: 7,
    items: [
      { name: 'Netflix', amount: 55.90, frequency: 'monthly', category: 'Entertainment' },
      { name: 'Spotify Family', amount: 34.90, frequency: 'monthly', category: 'Entertainment' },
      { name: 'iCloud Storage', amount: 12.90, frequency: 'monthly', category: 'Technology' },
      { name: 'Gym Membership', amount: 149.90, frequency: 'monthly', category: 'Health' },
      { name: 'HBO Max', amount: 34.90, frequency: 'monthly', category: 'Entertainment' },
      { name: 'News Subscription', amount: 29.90, frequency: 'monthly', category: 'Information' },
      { name: 'Cloud Backup', amount: 19.90, frequency: 'monthly', category: 'Technology' },
    ],
    insight: "These subscriptions cost you R$ 3,455 per year. Two of them haven't been used in 30+ days.",
  },

  wastedMoney: {
    total: 217.50,
    interest: 180.00,
    fees: 37.50,
    lateFees: 0,
    insight: "This is money you paid without getting anything back.",
  },

  reflections: [
    {
      id: '1',
      text: "Your spending isn't out of control — your commitments are.",
      type: 'observation',
    },
    {
      id: '2',
      text: "Reducing new installments would quickly lower future bills.",
      type: 'suggestion',
    },
    {
      id: '3',
      text: "Subscriptions are small individually, but heavy together.",
      type: 'observation',
    },
  ],

  suggestedActions: [
    {
      id: '1',
      title: 'Set a food delivery limit',
      description: 'Cap weekend delivery spending at R$ 150',
      impact: 'Could save R$ 200/month',
      type: 'limit',
    },
    {
      id: '2',
      title: 'Review unused subscriptions',
      description: 'HBO Max and Cloud Backup show low usage',
      impact: 'R$ 55/month, R$ 660/year',
      type: 'review',
    },
  ],
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);
};

export const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });
};

export const formatMonthYear = (dateStr: string): string => {
  const [year, month] = dateStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('pt-BR', {
    month: 'short',
    year: 'numeric',
  });
};
