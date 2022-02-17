// recursive + for loop 섞음
// 일관성을 위해 for loop로만 동작하게 바꿨을때 잘 동작하는지도 확인 필요 (추후 리팩토링)

function solution(nums) {
  let primeCount = 0;
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
  function addNumbers(number1, number2, number3) {
    if (nums[number1] !== undefined && nums[number2] !== undefined && nums[number3] !== undefined) {
      if (isPrimeNumber((nums[number1] + nums[number2] + nums[number3]))) {
        primeCount++;
      }
      if (number3 < nums.length - 1) {
        addNumbers(number1, number2, number3 + 1);
      } else if (number3 === nums.length - 1 && number2 < number3 - 1) {
        addNumbers(number1, number2 + 1, number2 + 2);
      }
    }
  }
  for (let i = 0; i < nums.length - 2; i++) {
    addNumbers(i, i + 1, i + 2);
  }
  return primeCount;
}
