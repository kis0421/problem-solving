function solution(N, stages) {
  const defaultStage = {};
  for (let i = 1; i <= N; i++) {
    defaultStage[i] = { failed: 0, total: 0 };
  }
  return stageMap = Object.entries(stages
    .reduce((acc, cur) => {
      if (cur < N + 1) {
        acc[cur] = {
          failed: acc[cur].failed + 1,
          total: acc[cur].total + 1,
        };
      }
      for (let i = cur - 1; i >= 1; i--) {
        acc[i] = {
          failed: acc[i].failed,
          total: acc[i].total + 1,
        };
      }
      return acc;
    }, defaultStage))
    .sort((a, b) => (b[1].failed / b[1].total) - (a[1].failed / a[1].total))
    .map((i) => parseInt(i[0], 10));
}
