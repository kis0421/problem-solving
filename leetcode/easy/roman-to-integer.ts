const romanChars = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};
function romanToInt(s: string): number {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const twoLetters = `${s[i]}${s[i + 1]}`;
        if (romanChars[twoLetters]) {
            result += romanChars[twoLetters];
            i += 1;
            continue;
        } else {
            result += romanChars[s[i]];
        }
    }
    return result;
}
Ï
