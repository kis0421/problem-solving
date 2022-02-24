function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => {
      acc += parseInt(cur, 0);
      return acc
    }, 0)
}
