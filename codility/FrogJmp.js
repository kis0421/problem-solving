function solution(X, Y, D) {
    if(X === Y){
        return 0;
    }
    if(Y - X - D <= 0){
        return 1
    }
    
    return Math.ceil((Y - X) / D)
}
