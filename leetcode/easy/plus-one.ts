function plusOne(digits: number[]): number[] {
  const result = digits.reduceRight((acc: number[], cur, index) => {
    const sum = cur + Number(index === digits.length - 1) + (acc[digits.length - index - 1] || 0);
    const currentNumber = sum >= 10 ? sum % 10 : sum;
    if (acc[digits.length - index - 1]) {
      acc[digits.length - index - 1] = currentNumber;
    } else {
      acc.push(currentNumber);
    }
    if (sum >= 10) {
      acc.push(1);
    }
    return acc;
  }, []);
  result.reverse();
  return result;
}
