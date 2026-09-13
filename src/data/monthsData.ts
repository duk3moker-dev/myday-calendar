// Estrutura de dados de meses com cores e imagens
export const monthsData = [
  {
    id: 0,
    name: 'Janeiro',
    monthEN: 'January',
    monthShort: 'Jan',
    gradient: 'gradient-january',
    themeColor: '#fce7f3',
    imageUrl: '/images/months/january.png',
    description: 'Novo começo, novas possibilidades'
  },
  {
    id: 1,
    name: 'Fevereiro',
    monthEN: 'February',
    monthShort: 'Fev',
    gradient: 'gradient-february',
    themeColor: '#fbcfe8',
    imageUrl: '/images/months/february.png',
    description: 'Mês do amor e afeição'
  },
  {
    id: 2,
    name: 'Março',
    monthEN: 'March',
    monthShort: 'Mar',
    gradient: 'gradient-march',
    themeColor: '#f9a8d4',
    imageUrl: '/images/months/march.png',
    description: 'Primavera se aproxima'
  },
  {
    id: 3,
    name: 'Abril',
    monthEN: 'April',
    monthShort: 'Abr',
    gradient: 'gradient-april',
    themeColor: '#f472b6',
    imageUrl: '/images/months/april.png',
    description: 'Flores desabrochando'
  },
  {
    id: 4,
    name: 'Maio',
    monthEN: 'May',
    monthShort: 'Mai',
    gradient: 'gradient-may',
    themeColor: '#ec4899',
    imageUrl: '/images/months/may.png',
    description: 'Beleza natural em plenitude'
  },
  {
    id: 5,
    name: 'Junho',
    monthEN: 'June',
    monthShort: 'Jun',
    gradient: 'gradient-june',
    themeColor: '#db2777',
    imageUrl: '/images/months/june.png',
    description: 'Clima quente e festivo'
  },
  {
    id: 6,
    name: 'Julho',
    monthEN: 'July',
    monthShort: 'Jul',
    gradient: 'gradient-july',
    themeColor: '#be185d',
    imageUrl: '/images/months/july.png',
    description: 'Auge do verão'
  },
  {
    id: 7,
    name: 'Agosto',
    monthEN: 'August',
    monthShort: 'Ago',
    gradient: 'gradient-august',
    themeColor: '#831843',
    imageUrl: '/images/months/august.png',
    description: 'Transição para o outono'
  },
  {
    id: 8,
    name: 'Setembro',
    monthEN: 'September',
    monthShort: 'Set',
    gradient: 'gradient-september',
    themeColor: '#500724',
    imageUrl: '/images/months/september.png',
    description: 'Renovação e mudanças'
  },
  {
    id: 9,
    name: 'Outubro',
    monthEN: 'October',
    monthShort: 'Out',
    gradient: 'gradient-october',
    themeColor: '#3f0633',
    imageUrl: '/images/months/october.png',
    description: 'Cores quentes do outono'
  },
  {
    id: 10,
    name: 'Novembro',
    monthEN: 'November',
    monthShort: 'Nov',
    gradient: 'gradient-november',
    themeColor: '#2d0a2e',
    imageUrl: '/images/months/november.png',
    description: 'Preparação para o final do ano'
  },
  {
    id: 11,
    name: 'Dezembro',
    monthEN: 'December',
    monthShort: 'Dez',
    gradient: 'gradient-december',
    themeColor: '#fda4af',
    imageUrl: '/images/months/december.png',
    description: 'Mês da magia e celebração'
  }
];

export const getMonthData = (monthIndex: number) => {
  return monthsData[monthIndex];
};

export const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};

export const getDaysArray = (year: number, month: number) => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const days = [];

  // Adicionar dias vazios no começo
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Adicionar dias do mês
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return days;
};
