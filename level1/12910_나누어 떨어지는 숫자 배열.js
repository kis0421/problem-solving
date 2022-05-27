function solution(arr, divisor) {
    const divisorArray =  arr.reduce((acc, cur) => {
        if(cur % divisor === 0){
            acc.push(cur)
        }
        return acc
    }, [])
    return divisorArray.length 
        ? divisorArray.sort((a,b) => a-b)
        : [-1]
}
