import { Transaction, CategoryType } from '@/types/bill';
import { useState } from 'react';

interface TransactionListProps {
  transactions: Transaction[];
}

const categoryBgClasses: Record<CategoryType, string> = {
  food: 'bg-cat-food/20 text-cat-food',
  transport: 'bg-cat-transport/20 text-cat-transport',
  shopping: 'bg-cat-shopping/20 text-cat-shopping',
  entertainment: 'bg-cat-leisure/20 text-cat-leisure',
  utilities: 'bg-cat-housing/20 text-cat-housing',
  health: 'bg-cat-health/20 text-cat-health',
  other: 'bg-cat-other/20 text-cat-other',
};

const TransactionList = ({ transactions }: TransactionListProps) => {
  const [filter, setFilter] = useState<CategoryType | 'all'>('all');
  
  const filteredTransactions = filter === 'all' 
    ? transactions 
    : transactions.filter(t => t.category === filter);

  const formatCurrency = (amount: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

  const formatDate = (dateStr: string) => 
    new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  const categories: (CategoryType | 'all')[] = ['all', 'food', 'transport', 'shopping', 'entertainment', 'utilities', 'health', 'other'];

  return (
    <div className="rounded-[24px] gradient-card shadow-card p-6 animate-fade-in stagger-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Transactions</h2>
        <span className="text-sm text-muted-foreground">{filteredTransactions.length} items</span>
      </div>

      {/* Filter pills */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all
              ${filter === cat 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
          >
            {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Transaction list */}
      <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
        {filteredTransactions.map((transaction, index) => (
          <div 
            key={transaction.id}
            className="flex items-center justify-between p-3 rounded-[24px] bg-secondary/30 hover:bg-secondary/50 
                       transition-all duration-200 animate-slide-in-right opacity-0"
            style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-[24px] flex items-center justify-center text-lg
                ${categoryBgClasses[transaction.category]}`}>
                {transaction.icon}
              </div>
              <div>
                <p className="text-sm font-medium">{transaction.merchant}</p>
                <p className="text-xs text-muted-foreground">{formatDate(transaction.date)}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono text-sm font-medium">{formatCurrency(transaction.amount)}</p>
              <span className={`text-xs px-2 py-0.5 rounded-full ${categoryBgClasses[transaction.category]}`}>
                {transaction.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
