function solution(s) {
  let minCount = s.length;

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    const compressionChars = [];
    let charIndex = 0;
    let accCount = 1;

    while (charIndex < s.length) {
      if (s.slice(charIndex, i + charIndex) === s.slice((charIndex + i), (i * 2 + charIndex))) {
        accCount++;
      } else {
        if (accCount > 1) {
          compressionChars.push(`${accCount}${s.slice(charIndex - i, i + charIndex - i)}`);
          accCount = 1;
        } else {
          compressionChars.push(s.slice(charIndex, i + charIndex));
        }
      }
      charIndex += i;
    }
    minCount = Math.min(minCount, compressionChars.join("").length);
  }

  return minCount;
}
