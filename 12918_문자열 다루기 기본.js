function solution(s) {
   return !isNaN(s) 
    && [4,6].includes(s.length) 
    && parseInt(s,10).toString().length === s.length
}
