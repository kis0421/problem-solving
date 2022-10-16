
function miniMaxSum(arr) {
  const numbers = arr.slice().sort((a, b) => a - b);
  return [...numbers.slice(1, 4), ...numbers.slice(1, 4), numbers[0], numbers[numbers.length - 1]]
    .reduce((acc, cur) => acc + cur);
}
