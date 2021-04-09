function solution(numbers) {
    const answer = new Set();
    while(numbers.length){
        for(const number of numbers.slice(1)){
            answer.add(numbers[0] + number)
        }
        numbers.shift()
    }
    return Array.from(answer).sort((a,b) => a-b);
}