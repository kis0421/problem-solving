function solution(w, h) {
  const gcd = (a, b) => b ? gcd(b, a % b) : a;
  return (w * h) - ((w + h) - gcd(w,h));
}
