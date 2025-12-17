import { PierreBill } from '@/types/pierre';

export const pierreBill: PierreBill = {
  overview: {
    totalAmount: 4247.82,
    previousAmount: 3521.40,
    changePercent: 20.6,
    dueDate: '2025-01-15',
    insight: {
      summary: "Esta fatura está mais alta principalmente por decisões de parcelamento — seus gastos do dia a dia estavam sob controle.",
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
    explanation: "Mais da metade desta fatura já estava decidida antes mesmo do mês começar.",
  },

  futureSimulation: {
    minimumNextMonth: 2050.00,
    lockedAmount: 2050.00,
    installmentMonths: 8,
    insight: "Se você não fizesse nenhuma compra no próximo mês, sua fatura ainda seria de R$ 2.050.",
  },

  categories: [
    {
      id: '1',
      name: 'Alimentação e Delivery',
      amount: 892.45,
      previousAmount: 697.23,
      trend: 'up',
      trendPercent: 28,
      insight: "Picos de delivery nos fins de semana estão elevando essa categoria.",
      icon: '🍽️',
    },
    {
      id: '2',
      name: 'Compras',
      amount: 1245.00,
      previousAmount: 1208.74,
      trend: 'stable',
      trendPercent: 3,
      insight: "Compras estão calmas, mas as parcelas mantêm o valor alto.",
      icon: '🛍️',
    },
    {
      id: '3',
      name: 'Transporte',
      amount: 342.80,
      previousAmount: 403.29,
      trend: 'down',
      trendPercent: 15,
      insight: "Transporte está estável e previsível. Bom controle aqui.",
      icon: '🚗',
    },
    {
      id: '4',
      name: 'Entretenimento',
      amount: 456.00,
      previousAmount: 314.48,
      trend: 'up',
      trendPercent: 45,
      insight: "Ingressos de shows fizeram deste um mês atípico.",
      icon: '🎬',
    },
    {
      id: '5',
      name: 'Saúde',
      amount: 189.00,
      previousAmount: 189.00,
      trend: 'stable',
      trendPercent: 0,
      insight: "Mensalidade da academia consistente. Nada inesperado.",
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
        merchant: 'Loja de Móveis',
        originalAmount: 3200.00,
        monthlyAmount: 320.00,
        currentInstallment: 6,
        totalInstallments: 10,
        endDate: '2025-05',
      },
      {
        merchant: 'Eletrônicos',
        originalAmount: 1800.00,
        monthlyAmount: 300.00,
        currentInstallment: 2,
        totalInstallments: 6,
        endDate: '2025-05',
      },
      {
        merchant: 'Loja de Departamento',
        originalAmount: 2240.00,
        monthlyAmount: 560.08,
        currentInstallment: 3,
        totalInstallments: 4,
        endDate: '2025-02',
      },
    ],
    insight: "Suas faturas futuras carregam R$ 1.120 por mês por causa de compras passadas.",
  },

  subscriptions: {
    monthlyTotal: 287.94,
    annualTotal: 3455.28,
    count: 7,
    items: [
      { name: 'Netflix', amount: 55.90, frequency: 'monthly', category: 'Entretenimento' },
      { name: 'Spotify Família', amount: 34.90, frequency: 'monthly', category: 'Entretenimento' },
      { name: 'iCloud', amount: 12.90, frequency: 'monthly', category: 'Tecnologia' },
      { name: 'Academia', amount: 149.90, frequency: 'monthly', category: 'Saúde' },
      { name: 'HBO Max', amount: 34.90, frequency: 'monthly', category: 'Entretenimento' },
      { name: 'Assinatura de Jornal', amount: 29.90, frequency: 'monthly', category: 'Informação' },
      { name: 'Backup na Nuvem', amount: 19.90, frequency: 'monthly', category: 'Tecnologia' },
    ],
    insight: "Essas assinaturas custam R$ 3.455 por ano. Duas delas não são usadas há mais de 30 dias.",
  },

  wastedMoney: {
    total: 467.50,
    interest: 180.00,
    fees: 37.50,
    lateFees: 0,
    trafficFines: 195.23,
    otherFines: 54.77,
    insight: "Este é um dinheiro que você pagou sem receber nada em troca. Multas e taxas podem ser evitadas com mais atenção.",
  },

  reflections: [
    {
      id: '1',
      text: "Seus gastos não estão fora de controle — seus compromissos estão.",
      type: 'observation',
    },
    {
      id: '2',
      text: "Reduzir novos parcelamentos diminuiria rapidamente as faturas futuras.",
      type: 'suggestion',
    },
    {
      id: '3',
      text: "Assinaturas são pequenas individualmente, mas pesadas juntas.",
      type: 'observation',
    },
  ],

  suggestedActions: [
    {
      id: '0',
      title: 'Centralize suas contas no Pierre',
      description: 'Conecte outros cartões e contas bancárias para ter uma visão completa dos seus gastos',
      impact: 'Visão 360° das suas finanças',
      type: 'connect',
    },
    {
      id: '1',
      title: 'Definir um limite para delivery',
      description: 'Limitar gastos com delivery nos fins de semana a R$ 150',
      impact: 'Pode economizar R$ 200/mês',
      type: 'limit',
    },
    {
      id: '2',
      title: 'Revisar assinaturas não usadas',
      description: 'HBO Max e Backup na Nuvem mostram baixo uso',
      impact: 'R$ 55/mês, R$ 660/ano',
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
  return new Date(dateStr).toLocaleDateString('pt-BR', {
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
