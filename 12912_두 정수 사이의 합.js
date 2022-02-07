function solution(a, b) {
  const arr = [];
  const target = [a, b].sort((acc, cur) => acc - cur);
  for (let i = target[0]; i <= target[1]; i++) {
    arr.push(i);
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
}
