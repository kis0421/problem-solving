function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }
  if (begin === target) {
    return 1;
  }
  let chageCount = null;
  function findToEqualWord(word, currentWords, count) {
    if (word === target) {
      chageCount = chageCount === null
        ? count
        : Math.min(chageCount, count);
    } else {
      const convertibleIndexes = currentWords.reduce((acc, targetWord, targetWordIndex) => {
        const convertible = word
          .split("")
          .map((char, index) => char === targetWord[index])
          .reduce((a, b) => !b ? a + 1 : a, 0, 0) === 1;
        if (convertible) {
          acc.push(targetWordIndex);
        }
        return acc;
      }, []);
      for (const convertibleIndex of convertibleIndexes) {
        const wordsInBlock = [...currentWords];
        const nextWord = wordsInBlock[convertibleIndex];
        wordsInBlock.splice(convertibleIndex, 1);
        findToEqualWord(nextWord, wordsInBlock, count + 1);
      }
    }

  }
  findToEqualWord(begin, words, 0);
  return chageCount === null ? 0 : chageCount;
}
