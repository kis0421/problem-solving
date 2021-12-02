function solution(absolutes, signs) {
    return absolutes.map((absolute,i) => absolute * (signs[i] ? 1 : -1))
                     .reduce((prev, cur) => prev + cur)
}
