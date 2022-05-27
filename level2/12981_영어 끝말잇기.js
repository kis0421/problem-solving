function solution(n, words) {
  let lastCaracter = "";
  const targetWords = [...words];
  const useKeywords = [];

  while (targetWords.length) {
    const shiftKeyword = targetWords.shift();
    if (useKeywords.find((i) => i === shiftKeyword)) {
      break;
    }

    if (lastCaracter === "" || lastCaracter === shiftKeyword[0]) {
      useKeywords.push(shiftKeyword);
      lastCaracter = shiftKeyword[shiftKeyword.length - 1];
    } else {
      break;
    }
  }

  if (useKeywords.length === words.length) {
    return [0, 0];
  } else {
    return [(useKeywords.length % n) + 1, Math.ceil((useKeywords.length + 1) / n)];
  }
}
