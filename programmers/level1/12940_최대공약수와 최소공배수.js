function solution(n, m) {
  const gcd = (a, b) => b ? gcd(b, a % b) : a;
  return [gcd(n, m), n * m / gcd(n, m)];
}
