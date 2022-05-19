function solution(brown, yellow) {
  const totalBlockCount = brown + yellow;
  let brownLength = 1;

  while (true) {
    const expectedNumber = totalBlockCount / brownLength;
    if (Number.isInteger(expectedNumber) && expectedNumber > 1 && brownLength >= expectedNumber &&
      (brownLength - 2) * (expectedNumber - 2) === yellow) {
      return [brownLength, expectedNumber];
    }
    brownLength++;
  }
}
