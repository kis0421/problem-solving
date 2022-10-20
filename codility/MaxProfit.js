function solution(A) {
  let maxPrice = 0;
  let minPrice = A[0];
  let localPrice = 0;

  for (const priceOfDay of A) {
    localPrice = priceOfDay - minPrice;
    maxPrice = Math.max(maxPrice, localPrice);
    minPrice = Math.min(minPrice, priceOfDay);
  }
  return maxPrice;
}
