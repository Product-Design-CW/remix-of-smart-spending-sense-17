import { Transaction, CategorySummary, BillSummary, SpendingInsight, CategoryType } from '@/types/bill';

export const billSummary: BillSummary = {
  totalAmount: 2847.52,
  dueDate: '2025-01-15',
  cardLastFour: '4892',
  cardType: 'Visa Platinum',
  statementPeriod: {
    start: '2024-12-01',
    end: '2024-12-31',
  },
  previousBalance: 1250.00,
  payments: 1250.00,
  newCharges: 2847.52,
};

export const transactions: Transaction[] = [
  { id: '1', merchant: 'Whole Foods Market', amount: 156.42, date: '2024-12-28', category: 'food', icon: '🛒' },
  { id: '2', merchant: 'Uber', amount: 24.50, date: '2024-12-27', category: 'transport', icon: '🚗' },
  { id: '3', merchant: 'Netflix', amount: 15.99, date: '2024-12-27', category: 'entertainment', icon: '🎬' },
  { id: '4', merchant: 'Amazon', amount: 89.99, date: '2024-12-26', category: 'shopping', icon: '📦' },
  { id: '5', merchant: 'Starbucks', amount: 6.75, date: '2024-12-25', category: 'food', icon: '☕' },
  { id: '6', merchant: 'Shell Gas', amount: 52.30, date: '2024-12-24', category: 'transport', icon: '⛽' },
  { id: '7', merchant: 'CVS Pharmacy', amount: 34.20, date: '2024-12-23', category: 'health', icon: '💊' },
  { id: '8', merchant: 'Electric Company', amount: 142.00, date: '2024-12-22', category: 'utilities', icon: '💡' },
  { id: '9', merchant: 'Apple Store', amount: 299.00, date: '2024-12-21', category: 'shopping', icon: '🍎' },
  { id: '10', merchant: 'Spotify', amount: 9.99, date: '2024-12-20', category: 'entertainment', icon: '🎵' },
  { id: '11', merchant: 'Trader Joe\'s', amount: 87.65, date: '2024-12-19', category: 'food', icon: '🛒' },
  { id: '12', merchant: 'Lyft', amount: 18.75, date: '2024-12-18', category: 'transport', icon: '🚗' },
  { id: '13', merchant: 'Target', amount: 156.80, date: '2024-12-17', category: 'shopping', icon: '🎯' },
  { id: '14', merchant: 'AMC Theaters', amount: 32.00, date: '2024-12-16', category: 'entertainment', icon: '🎥' },
  { id: '15', merchant: 'Water Utility', amount: 45.00, date: '2024-12-15', category: 'utilities', icon: '💧' },
  { id: '16', merchant: 'Gym Membership', amount: 49.99, date: '2024-12-15', category: 'health', icon: '💪' },
  { id: '17', merchant: 'Restaurant', amount: 78.50, date: '2024-12-14', category: 'food', icon: '🍽️' },
  { id: '18', merchant: 'Parking', amount: 25.00, date: '2024-12-13', category: 'transport', icon: '🅿️' },
  { id: '19', merchant: 'Internet Bill', amount: 89.99, date: '2024-12-12', category: 'utilities', icon: '🌐' },
  { id: '20', merchant: 'Department Store', amount: 245.70, date: '2024-12-10', category: 'shopping', icon: '🏬' },
  { id: '21', merchant: 'Coffee Shop', amount: 12.40, date: '2024-12-08', category: 'food', icon: '☕' },
  { id: '22', merchant: 'Concert Tickets', amount: 150.00, date: '2024-12-05', category: 'entertainment', icon: '🎤' },
  { id: '23', merchant: 'Doctor Visit', amount: 75.00, date: '2024-12-03', category: 'health', icon: '🏥' },
  { id: '24', merchant: 'Grocery Store', amount: 134.60, date: '2024-12-01', category: 'food', icon: '🛒' },
  { id: '25', merchant: 'Miscellaneous', amount: 45.00, date: '2024-12-01', category: 'other', icon: '📋' },
];

const categoryLabels: Record<CategoryType, string> = {
  food: 'Food & Dining',
  transport: 'Transportation',
  shopping: 'Shopping',
  entertainment: 'Entertainment',
  utilities: 'Utilities',
  health: 'Health & Wellness',
  other: 'Other',
};

const categoryIcons: Record<CategoryType, string> = {
  food: '🍔',
  transport: '🚗',
  shopping: '🛍️',
  entertainment: '🎬',
  utilities: '🏠',
  health: '❤️',
  other: '📋',
};

export const calculateCategorySummaries = (): CategorySummary[] => {
  const totals: Record<CategoryType, { amount: number; count: number }> = {
    food: { amount: 0, count: 0 },
    transport: { amount: 0, count: 0 },
    shopping: { amount: 0, count: 0 },
    entertainment: { amount: 0, count: 0 },
    utilities: { amount: 0, count: 0 },
    health: { amount: 0, count: 0 },
    other: { amount: 0, count: 0 },
  };

  transactions.forEach(t => {
    totals[t.category].amount += t.amount;
    totals[t.category].count++;
  });

  const totalSpent = Object.values(totals).reduce((sum, cat) => sum + cat.amount, 0);

  return Object.entries(totals)
    .map(([category, data]) => ({
      category: category as CategoryType,
      amount: data.amount,
      percentage: (data.amount / totalSpent) * 100,
      transactionCount: data.count,
      icon: categoryIcons[category as CategoryType],
      label: categoryLabels[category as CategoryType],
    }))
    .filter(cat => cat.amount > 0)
    .sort((a, b) => b.amount - a.amount);
};

export const spendingInsights: SpendingInsight[] = [
  {
    id: '1',
    type: 'increase',
    title: 'Shopping Up 23%',
    description: 'You spent more on shopping this month compared to last month.',
    percentage: 23,
    category: 'shopping',
  },
  {
    id: '2',
    type: 'decrease',
    title: 'Transport Down 15%',
    description: 'Great job! Your transportation costs decreased this month.',
    percentage: 15,
    category: 'transport',
  },
  {
    id: '3',
    type: 'tip',
    title: 'Subscription Alert',
    description: 'You have 2 streaming subscriptions. Consider consolidating to save $10/month.',
  },
  {
    id: '4',
    type: 'alert',
    title: 'Payment Due Soon',
    description: 'Your payment of $2,847.52 is due in 29 days.',
  },
];
