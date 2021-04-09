function solution(numbers) {
    if(numbers.every((number) => number === 0)){
        return "0"
    }else{
        return (numbers.sort((a, b) => {
            return parseInt(`${b}${a}`,10) - parseInt(`${a}${b}`,10)
        })).join("")
    }
}