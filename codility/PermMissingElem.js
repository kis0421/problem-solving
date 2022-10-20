function solution(A) {
  if (!A.length) {
    return 1;
  }
  const sum = A.reduce((a, b) => a + b);
  return (A.length + 1) * ((A.length + 1) + 1) / 2 - sum;
}
