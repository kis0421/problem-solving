function solution(babbling) {
  const vaildChars = ["aya", "ye", "woo", "ma"];
  return babbling.filter((phonate) => {
    let word = phonate;
    while (true) {
      const vaildChar = vaildChars.find((i) => word.startsWith(i))
      if (vaildChar) {
        word = word.slice(vaildChar.length, word.length)
      } else {
        break;
      }
    }
    return !word
  }).length
}