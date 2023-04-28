export function round(num: any, decimalPlaces = 0): Number {
  if (num < 0) return round(-num, decimalPlaces);
  var p = Math.pow(10, decimalPlaces);
  var n = (num * p).toPrecision(15);
  return Math.round(Number(n)) / p;
}

export function currencyFormatter(value: any) {
  if (!Number(value)) return "";

  const amount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value / 100);

  return `${amount}`;
}

export function percentFormatter(value: any) {
  if (!Number(value)) return "";

  const amount = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value / 100);

  return `${amount}`;
}

export const displayPercent = (percent: any) =>
  `${(percent / 100).toFixed(2)}%`;
