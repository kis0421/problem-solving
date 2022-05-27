// 나머지가 1이 되는 수 찾기

function solution(n) {
    if(n%2 === 1){
        return 2;
    }
    let i = 3;
    while(true){
        if(n%i === 1){
            break;
        }
        i=i+2
    }
    return i
}
