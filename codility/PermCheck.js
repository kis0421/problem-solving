function solution(A) {
  const setA = new Set(A);
  if (setA.size !== A.length) {
    return 0;
  }
  const max = Math.max(...A);
  return max * (max + 1) / 2 === A.reduce((a, b) => a + b) ? 1 : 0;
}
