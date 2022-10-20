// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    if(S.length % 2 !== 0 || S[0] === ")"){
        return 0;
    }

    const arr = [];
    for(const char of S.split("")){
        if(char === "("){
            arr.push(char);
        }else{
            if(arr[arr.length - 1] === "("){
                arr.pop();
            }else{
                return 0
            }
        }
    }
    return arr.length ? 0 : 1
}
