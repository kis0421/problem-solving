function solution(n, arr1, arr2) {
    function changeWithFillString(str) {
        const binaryNumber = str;
        let fillString = "";
        for (let i = binaryNumber.length; i < n; i++) {
            fillString += "0";
        }
        return `${fillString}${binaryNumber}`;
    }
    const binaryArray1 = arr1.map((i) => changeWithFillString(i.toString(2)));
    const binaryArray2 = arr2.map((i) => changeWithFillString(i.toString(2)));
    const secretMap = [];
    for (let i = 0; i < n; i++) {
        let secretString = "";
        for (let j = 0; j < n; j++) {
            secretString = secretString.concat(binaryArray1[i][j] === "1" || binaryArray2[i][j] === "1"
                ? "#"
                : " ");
        }
        secretMap.push(secretString);
    }
    return secretMap;
}
