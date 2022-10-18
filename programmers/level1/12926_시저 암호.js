function solution(s, n) {
  const stringTable = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ];
  return s.split("")
    .map((char) => {
      if (char === " ") {
        return " ";
      }
      const tableIndex = stringTable.findIndex((i) => i.split("").includes(char));
      return stringTable[tableIndex][(stringTable[tableIndex].indexOf(char) + n) % 26];
    }).join("");
}
