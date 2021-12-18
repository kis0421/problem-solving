// 로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
    let winningCount = 0;
    let zeroCount = 0;
    
    lottos.forEach((lotto) => {
        if(lotto === 0){
            zeroCount ++;
        }else{
            if(win_nums.includes(lotto)){
                winningCount++;
            }
        }
    })
    
    return [7 - Math.max(1,(winningCount + zeroCount)), 7 - Math.max(1,winningCount)]
}
