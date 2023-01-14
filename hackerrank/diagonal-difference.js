function diagonalDifference(arr) {
  const size = arr.length;
  let [left, right] = [0, 0];
  for (let i = 0; i < size; i++) {
    left += arr[i][i];
    right += arr[i][arr.length - 1 - i];
  }
  return Math.abs(left - right)
}