function solution(s) {
  const brackets = [[], []];
  for (const bracket of s.split("")) {
    if (bracket === "(") {
      brackets[0].push(bracket);
    } else {
      if (brackets[0][bracket.length - 1]) {
        brackets[0].pop();
      } else {
        return false;
      }
    }
  }
  return !(brackets[0].length && brackets.length);
}
