function solution(A) {
  if (A.length === 1) {
    return A[0] <= 0 || A[0] !== 1
      ? 1
      : 2;
  }
  const numbers = Array.from(new Set(A))
    .filter((i) => i > 0)
    .sort((a, b) => a - b);
  if (!numbers.length) {
    return 1;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== i + 1) {
      return i + 1;
    }
  }
  return numbers[numbers.length - 1] + 1;
}
