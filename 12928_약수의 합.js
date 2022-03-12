function solution(n) {
   if([0,1].includes(n)){
       return n;
   }
   const divisor = [];
   for(let i = n ; i > 0 ; i--){
       if(n % i === 0){
           divisor.push(i)
       }
   }
   return divisor.reduce((acc,cur) => acc + cur, 0)
}
