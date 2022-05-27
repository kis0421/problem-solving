function solution(x) {
   return Boolean(x % x.toString().split("").reduce((acc, cur) => acc + parseInt(cur, 10), 0) === 0);
}
