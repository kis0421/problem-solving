function solution(arr) {
    const numbers = [...arr]
    const targetNumber = Math.min(...numbers)
    numbers.splice(numbers.indexOf(targetNumber) ,1)
    return numbers.length ? numbers : [-1]
}
