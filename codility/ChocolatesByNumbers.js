function solution(N, M) {
  let R = 0;
  function gcd(a, b) {
    while ((a % b) > 0) {
      R = a % b;
      a = b;
      b = R;
    }
    return b;
  }
  return N / gcd(N, M);
}
