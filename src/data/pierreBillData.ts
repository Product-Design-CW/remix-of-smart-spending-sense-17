import { PierreBill } from '@/types/pierre';

export const pierreBill: PierreBill = {
  overview: {
    totalAmount: 4646.15,
    previousAmount: 3521.40,
    changePercent: 31.9,
    dueDate: '2025-12-15',
    insight: {
      summary: "Esta fatura está mais alta principalmente por decisões passadas e juros — seus gastos variáveis do mês representam cerca de metade do total.",
      tone: 'empowering',
    },
    creditLimit: 10000.00,
  },

  breakdown: {
    pastDecisions: {
      amount: 2018.30,
      percentage: 43,
      installments: 1680.00,
      recurring: 338.30,
    },
    thisMonthChoices: {
      amount: 2410.35,
      percentage: 52,
    },
    costOfCredit: {
      amount: 217.50,
      percentage: 5,
      interest: 180.00,
      fees: 37.50,
    },
    explanation: "Quase metade da sua fatura vem de compromissos assumidos anteriormente (parcelas e assinaturas).",
  },

  futureSimulation: {
    minimumNextMonth: 2018.30,
    lockedAmount: 2018.30,
    installmentMonths: 8,
    insight: "Se você não fizesse nenhuma compra no próximo mês, sua fatura ainda seria de R$ 2.018,30.",
  },

  categories: [
    {
      id: '1',
      name: 'Compras',
      amount: 2080.00,
      previousAmount: 1850.00,
      trend: 'up',
      trendPercent: 12,
      insight: "O valor alto se deve principalmente às parcelas de compras anteriores.",
      icon: '🛍️',
      transactions: [
        { id: 't_inst1', name: 'Parc. Apple Store (4/12)', amount: 499.92, date: '2025-11-05' },
        { id: 't_inst2', name: 'Parc. Loja de Depto (3/4)', amount: 560.08, date: '2025-11-05' },
        { id: 't_inst3', name: 'Parc. Loja de Móveis (6/10)', amount: 320.00, date: '2025-11-05' },
        { id: 't_inst4', name: 'Parc. Eletrônicos (2/6)', amount: 300.00, date: '2025-11-05' },
        { id: 't6', name: 'Amazon.com.br', amount: 150.00, date: '2025-11-15' },
        { id: 't8', name: 'Zara', amount: 250.00, date: '2025-11-22' },
      ]
    },
    {
      id: '2',
      name: 'Alimentação e Delivery',
      amount: 892.45,
      previousAmount: 697.23,
      trend: 'up',
      trendPercent: 28,
      insight: "Picos de delivery nos fins de semana estão elevando essa categoria.",
      icon: '🍽️',
      transactions: [
        { id: 't1', name: 'iFood - McDonald\'s', amount: 45.90, date: '2025-11-05' },
        { id: 't2', name: 'Supermercado Extra', amount: 350.00, date: '2025-11-10' },
        { id: 't3', name: 'iFood - Sushi House', amount: 120.50, date: '2025-11-15' },
        { id: 't4', name: 'Restaurante Silva', amount: 89.00, date: '2025-11-20' },
        { id: 't5', name: 'Carrefour', amount: 287.05, date: '2025-11-28' },
      ]
    },
    {
      id: '3',
      name: 'Entretenimento',
      amount: 581.70,
      previousAmount: 410.00,
      trend: 'up',
      trendPercent: 41,
      insight: "Show e barzinho somaram custos extras este mês, além das assinaturas.",
      icon: '🎬',
      transactions: [
        { id: 't16', name: 'Eventim - Show', amount: 300.00, date: '2025-11-14' },
        { id: 't17', name: 'Bar do Zé', amount: 111.00, date: '2025-11-21' },
        { id: 'sub1', name: 'Netflix', amount: 55.90, date: '2025-11-01' },
        { id: 't15', name: 'Cinemark', amount: 45.00, date: '2025-11-06' },
        { id: 'sub2', name: 'Spotify Família', amount: 34.90, date: '2025-11-02' },
        { id: 'sub5', name: 'HBO Max', amount: 34.90, date: '2025-11-03' },
      ]
    },
    {
      id: '4',
      name: 'Transporte',
      amount: 538.03,
      previousAmount: 380.00,
      trend: 'up',
      trendPercent: 41,
      insight: "Multa de trânsito impactou significativamente esta categoria.",
      icon: '🚗',
      transactions: [
        { id: 'fine1', name: 'DETRAN - Multa', amount: 195.23, date: '2025-11-10' },
        { id: 't12', name: 'Posto Ipiranga', amount: 150.00, date: '2025-11-15' },
        { id: 't14', name: '99 App', amount: 120.00, date: '2025-11-29' },
        { id: 't11', name: 'Uber Trip', amount: 32.50, date: '2025-11-08' },
        { id: 't10', name: 'Uber Trip', amount: 24.90, date: '2025-11-01' },
        { id: 't13', name: 'Uber Trip', amount: 15.40, date: '2025-11-22' },
      ]
    },
    {
      id: '5',
      name: 'Serviços e Taxas',
      amount: 334.97,
      previousAmount: 100.00,
      trend: 'up',
      trendPercent: 235,
      insight: "Juros e taxas do cartão aumentaram muito o custo de serviços.",
      icon: '🏦',
      transactions: [
        { id: 'fee1', name: 'Juros de Financiamento', amount: 180.00, date: '2025-11-28' },
        { id: 'fine2', name: 'Multa Administrativa', amount: 54.77, date: '2025-11-15' },
        { id: 'fee2', name: 'IOF / Taxas', amount: 37.50, date: '2025-11-28' },
        { id: 'sub6', name: 'Assinatura de Jornal', amount: 29.90, date: '2025-11-05' },
        { id: 'sub7', name: 'Backup na Nuvem', amount: 19.90, date: '2025-11-05' },
        { id: 'sub3', name: 'iCloud', amount: 12.90, date: '2025-11-05' },
      ]
    },
    {
      id: '6',
      name: 'Saúde',
      amount: 219.00,
      previousAmount: 200.00,
      trend: 'stable',
      trendPercent: 9,
      insight: "Gastos consistentes com academia e farmácia.",
      icon: '💪',
      transactions: [
        { id: 'sub4', name: 'Academia', amount: 149.90, date: '2025-11-10' },
        { id: 't19', name: 'Droga Raia', amount: 69.10, date: '2025-11-20' },
      ]
    },
  ],

  installments: {
    totalThisBill: 1680.00,
    monthlyImpact: 1120.00,
    remainingMonths: 8,
    totalRemaining: 8960.00,
    debtFreeDate: '2026-08',
    items: [
      {
        merchant: 'Apple Store',
        originalAmount: 5999.00,
        monthlyAmount: 499.92,
        currentInstallment: 4,
        totalInstallments: 12,
        endDate: '2026-08',
      },
      {
        merchant: 'Loja de Móveis',
        originalAmount: 3200.00,
        monthlyAmount: 320.00,
        currentInstallment: 6,
        totalInstallments: 10,
        endDate: '2026-04',
      },
      {
        merchant: 'Eletrônicos',
        originalAmount: 1800.00,
        monthlyAmount: 300.00,
        currentInstallment: 2,
        totalInstallments: 6,
        endDate: '2026-04',
      },
      {
        merchant: 'Loja de Departamento',
        originalAmount: 2240.00,
        monthlyAmount: 560.08,
        currentInstallment: 3,
        totalInstallments: 4,
        endDate: '2026-01',
      },
    ],
    insight: "Seus parcelamentos comprometem R$ 1.680 da sua renda mensal até pelo menos fevereiro.",
  },

  subscriptions: {
    monthlyTotal: 338.30,
    annualTotal: 4059.60,
    count: 7,
    items: [
      { name: 'Academia', amount: 149.90, frequency: 'monthly', category: 'Saúde' },
      { name: 'Netflix', amount: 55.90, frequency: 'monthly', category: 'Entretenimento' },
      { name: 'Spotify Família', amount: 34.90, frequency: 'monthly', category: 'Entretenimento' },
      { name: 'HBO Max', amount: 34.90, frequency: 'monthly', category: 'Entretenimento' },
      { name: 'Assinatura de Jornal', amount: 29.90, frequency: 'monthly', category: 'Informação' },
      { name: 'Backup na Nuvem', amount: 19.90, frequency: 'monthly', category: 'Tecnologia' },
      { name: 'iCloud', amount: 12.90, frequency: 'monthly', category: 'Tecnologia' },
    ],
    insight: "Essas assinaturas custam mais de R$ 4.000 por ano. Duas delas não são usadas há mais de 30 dias.",
  },

  wastedMoney: {
    total: 467.50,
    interest: 180.00,
    fees: 37.50,
    lateFees: 0,
    trafficFines: 195.23,
    otherFines: 54.77,
    insight: "Este é um dinheiro que saiu do seu bolso sem trazer benefício algum. Quase 500 reais em juros e multas.",
  },

  reflections: [
    {
      id: '1',
      text: "Seus gastos variáveis estão altos, mas o maior peso vem dos compromissos fixos (parcelas e assinaturas).",
      type: 'observation',
    },
    {
      id: '2',
      text: "Evitar novas parcelas agora é crucial para reduzir o valor das próximas faturas.",
      type: 'suggestion',
    },
    {
      id: '3',
      text: "Quase R$ 500 foram gastos com juros e multas. Automatizar pagamentos pode evitar isso.",
      type: 'observation',
    },
  ],

  suggestedActions: [
    {
      id: '0',
      title: 'Pagar fatura total',
      description: 'Evite os R$ 180 de juros no próximo mês pagando o valor total.',
      impact: 'Economia imediata de juros',
      type: 'limit', // using existing type
    },
    {
      id: '1',
      title: 'Cancelar assinaturas não usadas',
      description: 'HBO Max e Backup na Nuvem mostram baixo uso.',
      impact: 'Economia de R$ 55/mês',
      type: 'review',
    },
    {
      id: '2',
      title: 'Centralizar gastos de transporte',
      description: 'Defina um limite mensal para Uber e Combustível.',
      impact: 'Controle melhor os R$ 538 gastos',
      type: 'limit',
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
