export interface BillInsight {
  summary: string;
  tone: 'neutral' | 'positive' | 'concern' | 'empowering';
}

export interface BillOverview {
  totalAmount: number;
  previousAmount: number;
  changePercent: number;
  dueDate: string;
  insight: BillInsight;
}

export interface BillBreakdown {
  pastDecisions: {
    amount: number;
    percentage: number;
    installments: number;
    recurring: number;
  };
  thisMonthChoices: {
    amount: number;
    percentage: number;
  };
  costOfCredit: {
    amount: number;
    percentage: number;
    interest: number;
    fees: number;
  };
  explanation: string;
}

export interface FutureSimulation {
  minimumNextMonth: number;
  lockedAmount: number;
  installmentMonths: number;
  insight: string;
}

export interface CategorySpending {
  id: string;
  name: string;
  amount: number;
  trend: 'up' | 'down' | 'stable';
  trendPercent: number;
  insight: string;
  icon: string;
}

export interface InstallmentSummary {
  totalThisBill: number;
  monthlyImpact: number;
  remainingMonths: number;
  totalRemaining: number;
  debtFreeDate: string;
  items: InstallmentItem[];
  insight: string;
}

export interface InstallmentItem {
  merchant: string;
  originalAmount: number;
  monthlyAmount: number;
  currentInstallment: number;
  totalInstallments: number;
  endDate: string;
}

export interface SubscriptionSummary {
  monthlyTotal: number;
  annualTotal: number;
  count: number;
  items: SubscriptionItem[];
  insight: string;
}

export interface SubscriptionItem {
  name: string;
  amount: number;
  frequency: 'monthly' | 'annual';
  category: string;
}

export interface WastedMoney {
  total: number;
  interest: number;
  fees: number;
  lateFees: number;
  insight: string;
}

export interface SmartReflection {
  id: string;
  text: string;
  type: 'observation' | 'suggestion' | 'encouragement';
}

export interface SuggestedAction {
  id: string;
  title: string;
  description: string;
  impact: string;
  type: 'limit' | 'review' | 'alert' | 'cancel';
}

export interface PierreBill {
  overview: BillOverview;
  breakdown: BillBreakdown;
  futureSimulation: FutureSimulation;
  categories: CategorySpending[];
  installments: InstallmentSummary;
  subscriptions: SubscriptionSummary;
  wastedMoney: WastedMoney;
  reflections: SmartReflection[];
  suggestedActions: SuggestedAction[];
}
