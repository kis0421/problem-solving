function solution(n, left, right) {
  const arr = [];
  for (let i = left; i <= right; i++) {
    const [quotient, remainder] = [Math.floor(i / n), i % n];
    arr.push(remainder === n - 1 ? n : Math.max(quotient + 1, remainder + 1 )  );
  }
  return arr
}
