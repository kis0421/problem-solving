function solution(n) {
  function oneLength(num) {
    return num.
      toString(2)
      .split("")
      .reduce((acc, cur) => {
        acc += parseInt(cur, 10);
        return acc;
      }, 0);
  }
  let targetNumber = n + 1;
  while (oneLength(n) !== oneLength(targetNumber)) {
    targetNumber++;
  }
  return targetNumber;
}
