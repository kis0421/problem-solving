function solution(x, n) {
  return new Array(n)
    .fill(false)
    .reduce((acc, cur, index) => {
      acc.push(x * (index + 1));
      return acc;
    }, []);
}
