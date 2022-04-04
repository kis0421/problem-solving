function solution(n) {
  function isPrimeNumber(num) {
    if ([2, 3, 5, 7].includes(num)) {
      return true;
    } else if (num <= 1 || num % 2 === 0) {
      return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return new Array(n)
    .fill(false)
    .reduce((acc, _, index) => {
      if (isPrimeNumber(index + 1)) {
        acc.push(index + 1)
      }
      return acc;
    }, []).length
}
