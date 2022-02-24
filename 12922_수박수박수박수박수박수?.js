function solution(s) {
  const strings = [];
  for (let i = 1; i <= s; i++) {
    strings.push((i % 2) ? "수" : "박");
  }
  return strings.join("");
}
