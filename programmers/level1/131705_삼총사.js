function solution(number) {
  const getCombinations = (arr, length) => {
    return length === 1
      ? arr.map((i) => [i])
      : arr.reduce((acc, cur, index, origin) => {
        acc.push(...getCombinations(origin.slice(index + 1), length - 1).map((i) => [cur, ...i]))
        return acc;
      }, [])
  }
  return getCombinations(number, 3).filter((i) => i.reduce((acc, cur) => acc + cur) === 0).length
}
