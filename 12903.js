// 가운데 글자 가져오기
function solution(s) {
    const isOdd = Boolean(s.length % 2);
    const startIndex = Math.floor(s.length / 2);
    
    return isOdd
        ? s[startIndex]
        : s.slice(startIndex - 1, startIndex + 1) ;
}
