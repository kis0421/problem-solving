function solution(A, B) {
  const arrayA = A.sort((a, b) => a - b);
  const arrayB = B.sort((a, b) => b - a);

  return arrayA.reduce((acc, _, index) => {
    acc = acc + arrayA[arrayA.length - (index + 1)] * arrayB[arrayB.length - (index + 1)];
    return acc;
  }, 0)

}
