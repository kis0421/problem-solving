function solution(arr) {
    let startNumber = Math.max(...arr);
    while (arr.find((i) => startNumber % i)) {
        startNumber++;
    }
    return startNumber;
}
