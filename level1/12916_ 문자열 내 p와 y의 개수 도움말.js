function solution(s) {
  const charMap = s.split("")
    .reduce((acc, cur) => {
      const char = cur.toLocaleLowerCase();
      if (["y", "p"].includes(char)) {
        acc[char] = (acc[char] || 0) + 1;
      }
      return acc;
    }, {});
  return charMap.y === charMap.p;
}
