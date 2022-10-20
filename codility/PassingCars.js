function solution(A) {
  let count = 0;
  let carCount = 0;
  
  for (let i = A.length - 1; i >= 0; i--) {
    if (!A[i]) {
      count += carCount;
      if (count > 1000000000) {
        return -1;
      }
    } else {
      carCount++;
    }
  }
  return count;
}
