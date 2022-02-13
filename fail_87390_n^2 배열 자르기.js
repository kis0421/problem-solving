// time out
// 실패 (signal: aborted (core dumped))

function solution(n, left, right) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[i].push(j + 1);
      arr[i][j] = Math.max(arr[i][j], (Math.max(j, i) + 1));
    }
  }
  return arr.reduce((acc, cur) => {
    acc.push(...cur);
    return acc;
  }, []).slice(left, right + 1);
    
}
