const DEFAULT_LOCALE = 'pt-BR';
const DEFAULT_CURRENCY = 'BRL';

let currencyFormatter = new Intl.NumberFormat(DEFAULT_LOCALE, {
  style: 'currency',
  currency: DEFAULT_CURRENCY,
});

let currentLocale: Intl.LocalesArgument;

interface CurrencyFormatterArgs {
  language?: Intl.LocalesArgument;
  currency?: string;
}

export const CurrencyFormatter = () => {
  return {
    formatter: currencyFormatter.format,

    setLocale: ({
      currency = DEFAULT_LOCALE,
      language = DEFAULT_CURRENCY,
    }: CurrencyFormatterArgs) => {
      if (currentLocale !== language) {
        currencyFormatter = new Intl.NumberFormat(language, {
          style: 'currency',
          currency,
        });
      }
    },
  };
};
