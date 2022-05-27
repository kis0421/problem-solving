function solution(num) {
    let targetNumber = num;
    let count = 0;
    while(targetNumber !== 1 && count !== 500){
        if(targetNumber % 2 === 0 ){
         targetNumber /= 2 
        }else{
            targetNumber = (targetNumber * 3)+1
        }
        count++;
    }
    return count === 500 ? -1 : count 
}
