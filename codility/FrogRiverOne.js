function solution(X, A) {
  const roads = new Set();

  for (let i = 0; i < A.length; i++) {
    roads.add(A[i]);
    if (roads.size === X) {
      return i;
    }
  }

  return -1;
}
