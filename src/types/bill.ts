export type CategoryType = 
  | 'food' 
  | 'transport' 
  | 'shopping' 
  | 'entertainment' 
  | 'utilities' 
  | 'health' 
  | 'other';

export interface Transaction {
  id: string;
  merchant: string;
  amount: number;
  date: string;
  category: CategoryType;
  icon: string;
}

export interface CategorySummary {
  category: CategoryType;
  amount: number;
  percentage: number;
  transactionCount: number;
  icon: string;
  label: string;
}

export interface BillSummary {
  totalAmount: number;
  dueDate: string;
  cardLastFour: string;
  cardType: string;
  statementPeriod: {
    start: string;
    end: string;
  };
  previousBalance: number;
  payments: number;
  newCharges: number;
}

export interface SpendingInsight {
  id: string;
  type: 'increase' | 'decrease' | 'tip' | 'alert';
  title: string;
  description: string;
  percentage?: number;
  category?: CategoryType;
}
