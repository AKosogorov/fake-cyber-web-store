const formatterRUB = createCurrencyFormatter('RUB')

export function formatRUB(num: number): string {
  return formatterRUB.format(num)
}

const formatterUSD = createCurrencyFormatter('USD')

export function formatUSD(num: number): string {
  return formatterUSD.format(num)
}

function createCurrencyFormatter(currency: string) {
  return new Intl.NumberFormat('ru-Ru', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })
}
