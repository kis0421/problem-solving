function solution(arr) {
  const numbers = [];

  for (const currentNumber of arr) {
    if (!numbers.length || numbers[numbers.length - 1] !== currentNumber) {
      numbers.push(currentNumber);
    }
  }
  
  return numbers;
}
