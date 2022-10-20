function solution(A) {
  const a = A.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});

  for (const key in a) {
    if (a[key] % 2 === 1) {
      return parseInt(key, 10);
    }
  }
}