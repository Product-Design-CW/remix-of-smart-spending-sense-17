import { CategorySummary, CategoryType } from '@/types/bill';
import { useState } from 'react';

interface SpendingChartProps {
  categories: CategorySummary[];
}

const categoryColors: Record<CategoryType, string> = {
  food: 'hsl(var(--cat-food))',
  transport: 'hsl(var(--cat-transport))',
  shopping: 'hsl(var(--cat-shopping))',
  entertainment: 'hsl(var(--cat-leisure))',
  utilities: 'hsl(var(--cat-housing))',
  health: 'hsl(var(--cat-health))',
  other: 'hsl(var(--cat-other))',
};

const SpendingChart = ({ categories }: SpendingChartProps) => {
  const [hoveredCategory, setHoveredCategory] = useState<CategoryType | null>(null);
  
  const totalAmount = categories.reduce((sum, cat) => sum + cat.amount, 0);
  const radius = 90;
  const strokeWidth = 24;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate stroke dasharray for each segment
  let cumulativeOffset = 0;
  const segments = categories.map(cat => {
    const segmentLength = (cat.percentage / 100) * circumference;
    const offset = cumulativeOffset;
    cumulativeOffset += segmentLength;
    return { ...cat, segmentLength, offset };
  });

  const formatCurrency = (amount: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

  return (
    <div className="rounded-[24px] gradient-card shadow-card p-6 animate-fade-in stagger-1">
      <h2 className="text-lg font-semibold mb-6">Spending Breakdown</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Donut Chart */}
        <div className="relative">
          <svg width="220" height="220" viewBox="0 0 220 220" className="transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="110"
              cy="110"
              r={radius}
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth={strokeWidth}
            />
            
            {/* Category segments */}
            {segments.map((segment, index) => (
              <circle
                key={segment.category}
                cx="110"
                cy="110"
                r={radius}
                fill="none"
                stroke={categoryColors[segment.category]}
                strokeWidth={hoveredCategory === segment.category ? strokeWidth + 4 : strokeWidth}
                strokeDasharray={`${segment.segmentLength} ${circumference}`}
                strokeDashoffset={-segment.offset}
                strokeLinecap="round"
                className="transition-all duration-300 animate-draw-circle"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  opacity: hoveredCategory && hoveredCategory !== segment.category ? 0.4 : 1,
                }}
                onMouseEnter={() => setHoveredCategory(segment.category)}
                onMouseLeave={() => setHoveredCategory(null)}
              />
            ))}
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-xs text-muted-foreground">Total</p>
            <p className="text-xl font-bold font-mono">{formatCurrency(totalAmount)}</p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-3 w-full">
          {categories.map((cat, index) => (
            <div 
              key={cat.category}
              className={`flex items-center justify-between p-3 rounded-[24px] transition-all duration-200 cursor-pointer
                ${hoveredCategory === cat.category ? 'bg-secondary' : 'hover:bg-secondary/50'}`}
              onMouseEnter={() => setHoveredCategory(cat.category)}
              onMouseLeave={() => setHoveredCategory(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: categoryColors[cat.category] }}
                />
                <span className="text-sm">{cat.label}</span>
              </div>
              <div className="text-right">
                <p className="font-mono text-sm font-medium">{formatCurrency(cat.amount)}</p>
                <p className="text-xs text-muted-foreground">{cat.percentage.toFixed(1)}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpendingChart;
