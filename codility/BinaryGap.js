function solution(n) {
    const binaryStringArray = n.toString(2).split("");
    let gap = 0;
    // FlatMap node v11+
    // const positiveNumbersIndex = binaryStringArray.flatMap((a, i) => a === "1" ? [i] : []);
    const positiveNumbersIndex = binaryStringArray.reduce((a, b, i) => b === "1" ? [...a, i] : a, []);
    positiveNumbersIndex.forEach((v, i) => {
        if (i + 1 < positiveNumbersIndex.length) {
            gap = Math.max(gap, positiveNumbersIndex[i + 1] - v - 1);
        }
    })
    return gap
}