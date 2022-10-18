function solution(numbers) {
  const primeNumbers = new Set();

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
  function getPermutation(targetArray, prefix) {
    if (targetArray.length >= 1) {
      for (let i = 0; i < targetArray.length; i+=1) {
        const fixed = prefix + targetArray[i];
        const copyArray = [...targetArray];
        copyArray.splice(i, 1);
        if (isPrimeNumber(parseInt(fixed, 10))) {
          primeNumbers.add(parseInt(fixed, 10));
        }
        getPermutation(copyArray, fixed);
      }
    }
  }
  getPermutation(numbers.split(""), "");
  return primeNumbers.size;
}
