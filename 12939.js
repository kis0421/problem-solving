function solution(s) {
    const numbers = s.split(" ")
     .map((i) => parseInt(i,10))
    return `${Math.min(...numbers)} ${Math.max(...numbers)}`
}
