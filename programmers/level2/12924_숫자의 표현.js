function solution(n) {
  let count = 0;
  for (let current = n; current > 0; current--) {
    let total = current;
    for (let i = current - 1; i > 0; i--) {
      if (total === n || total > n) {
        break;
      }
      total += i;
    }
    if (total === n) {
      count++;
    }
    if (total > n || total === n) {
      continue;
    }
  }
  return count;
}
