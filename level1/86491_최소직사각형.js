function solution(sizes) {
  return sizes.map((size) => size.sort((a, b) => b - a)).sort((a, b) => b[0] - a[0])[0][0]
    * sizes.map((size) => size.sort((a, b) => a - b)).sort((a, b) => b[0] - a[0])[0][0];
}
