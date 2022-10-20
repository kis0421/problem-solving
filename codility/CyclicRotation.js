function solution(A, K) {
    if (!A.length) {
        return []
    };
    const arr = A;
    for (let i = 0; i < K; i++) {
        const lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    return arr
}