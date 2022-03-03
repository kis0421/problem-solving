function solution(n, times) {
  function immigrationCheck(targetTime) {
    const totalQuantityPerTime = times.reduce((acc, cur) => {
      if (cur <= targetTime) {
        acc += Math.floor(targetTime / cur);
      }
      return acc;
    }, 0);
    return totalQuantityPerTime >= n;
  }
  
  let timeLimit = 10e8;
  let maxTime = 0;
  while (maxTime !== timeLimit) {
    if (immigrationCheck(timeLimit)) {
      maxTime = timeLimit;
      timeLimit = Math.ceil(timeLimit / 2);
    } else {
      timeLimit = !maxTime ? timeLimit * 2 : Math.ceil(((maxTime + timeLimit) / 2));
    }
  }
  return timeLimit;
}
