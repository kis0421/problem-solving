function solution(A, B, K) {
    let cnt = parseInt(B / K, 10) - parseInt(A / K, 10);

    if (A % K === 0) {
        cnt += 1;
    }
    return cnt;
}
