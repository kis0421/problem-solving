function solution(n) {
   const targetNum = Math.sqrt(n);
   if(targetNum % 1 === 0){
       return (targetNum + 1) * (targetNum + 1)
   }else{
       return -1
   }
}
