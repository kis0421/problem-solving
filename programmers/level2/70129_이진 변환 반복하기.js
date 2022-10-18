function solution(s) {
  let binaryNumber = s;
  let removeZeroCount = 0;
  let removeTryCount = 0;
  while (binaryNumber !== "1") {
    const binaryAfterRemoval = binaryNumber
      .split("")
      .reduce((acc, cur) => {
        if (cur === "0") {
          removeZeroCount++;
        } else {
          acc.push(cur);
        }
        return acc;
      }, [])
      .length
      .toString(2);
    binaryNumber = binaryAfterRemoval;
    removeTryCount++;
  }
  return [removeTryCount, removeZeroCount]
}
