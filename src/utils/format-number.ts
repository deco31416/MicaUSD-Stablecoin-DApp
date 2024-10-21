export const formatNumber = (value: number, maximumFractionDigits?: number) => {
  if (Math.abs(value) < 1.2) {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: maximumFractionDigits || 6,
      currencyDisplay: "code",
    }).format(value);
  }

  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: maximumFractionDigits || 3,
    currencyDisplay: "code",
  }).format(value);
};
