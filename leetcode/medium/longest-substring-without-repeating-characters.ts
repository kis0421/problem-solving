function lengthOfLongestSubstring(s: string): number {
  let longestLength = 0;
  let chars = '';

  for (let i = 0; i < s.length; i++) {
    if (chars.includes(s[i])) {
      chars = chars.slice(chars.indexOf(s[i]) + 1);
    }
    chars += s[i];
    longestLength = Math.max(chars.length, longestLength);
  }
  return longestLength;
}
