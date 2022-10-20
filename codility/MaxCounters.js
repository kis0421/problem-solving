function solution(N, A) {
  const arr = new Array(N).fill(0);
  let max = 0;
  let currentMax = 0;

  for (const i of A) {
    if (i === N + 1) {
      max = currentMax;
    } else {
      if (arr[i - 1] < max) {
        arr[i - 1] = max;
      }
      arr[i - 1]++;
      if (arr[i - 1] > currentMax) {
        currentMax = arr[i - 1];
      }
    }
  }
  return arr.map((i) => max > i ? max : i);
}
