
function miniMaxSum(arr) {
  const numbers = arr.slice().sort((a, b) => a - b);
  const commonTotal = numbers
    .slice(1, 4)
    .reduce((acc, cur) => acc + cur);

  console.log(`${commonTotal + numbers[0]} ${commonTotal + numbers[numbers.length - 1]}`);
}
