function solution(n, k) {
    return (n * 12000) + (Math.max(k - Math.floor(n / 10), 0)  * 2000);
}
