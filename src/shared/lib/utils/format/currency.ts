const formatterRUB = new Intl.NumberFormat("ru-Ru", {
  style: "currency",
  currency: "RUB",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatRUB(num: number): string {
  return formatterRUB.format(num);
}
