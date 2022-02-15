function solution(n, t, m, p) {
  const chars = [];
  let i = 0;
  while (chars.length < m * t) {
    chars.push(...i.toString(n).split("").map((i) => i.toUpperCase()));
    i++;
  }
  return chars.reduce((acc, cur, index) => {
    if (((index) % m) === p - 1) {
      acc.push(cur);
    }
    return acc;
  }, []).slice(0, t).join("");
}