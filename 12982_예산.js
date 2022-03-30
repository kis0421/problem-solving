function solutiona(d, budget) {
  let currentPrice = budget;
  const sortedPrices = [...d].sort((a, b) => b - a);

  while (currentPrice - sortedPrices[sortedPrices.length - 1] >= 0) {
    currentPrice -= sortedPrices.pop();
  }

  return d.length - sortedPrices.length;
}
