function solution(s) {
  return s
    .split(" ")
    .map((chars, index) => {
      if (chars === "") {
        return "";
      }
      const lowerChars = chars.split("").map((char) => char.toLowerCase()).join("");
      return `${lowerChars[0].toUpperCase()}${lowerChars.substring(1, lowerChars.length)}`;
    })
    .join(" ");
}
