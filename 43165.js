// 타겟 넘버
function solution(numbers, target) {
  let count = 0;
  function dfs(depth, number) {
    if (depth !== numbers.length) {
      dfs(depth + 1, number + numbers[depth])
      dfs(depth + 1, number - numbers[depth])
    } else {
      if (number === target) {
        count++
      }
    }
  }
  dfs(0, 0)
  return count
}
