function reverse(x: number): number {
    let isPositive = x < 0;
    const splitNumbers = x.toString().split('');
    splitNumbers.reverse();
    if (splitNumbers.at(-1) === '-') {
        splitNumbers.pop()
    }
    const reverseNumber = Number(splitNumbers.join(''));
    return Math.pow(2, 31) < reverseNumber ? 0 : isPositive ? -reverseNumber : reverseNumber

};
