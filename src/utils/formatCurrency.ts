// import { useDataContext } from '../contexts/DataContext';
// // const { format } = new Intl.NumberFormat('pt-BR', {
// //   style: 'currency',
// //   currency: 'BRL',
// // });

// export const useFormatCurrency = (value: number) => {
//   const { restaurant } = useDataContext();

//   const number = value ?? 0;
//   return new Intl.NumberFormat(restaurant?.locale, {
//     style: 'currency',
//     currency: restaurant?.ccy,
//   }).format(number);
// };
