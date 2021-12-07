function solution(left, right) {
    let number = 0;
    function isdivisors (number){
        let j = 0;
        for(let i = number-1; i > 0; i--){
            if(number % i === 0){
                j++;
            }
        }
        return j % 2;
    }
    for(let i = left; i <= right; i ++){
        if(isdivisors(i)){
            number += i;
        }else{
            number -= i;
        }
    }
    return number;
}
