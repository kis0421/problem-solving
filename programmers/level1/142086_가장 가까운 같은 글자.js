function solution(s) {
  const charMap = {};
  return s.split("").reduce((acc, cur, index) => {
    acc.push(charMap[cur] !== undefined ? index - charMap[cur] : -1)
    charMap[cur] = index;
    return acc;
  }, [])
}
