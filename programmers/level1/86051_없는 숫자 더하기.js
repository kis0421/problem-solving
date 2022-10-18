function solution(numbers) {
    return [0,1,2,3,4,5,6,7,8,9]
        .filter((number) => !numbers.includes(number) )
        .reduce((a,b) => a + b)
}
