function solution(n, computers) {
  let networkCount = 0;
  const visited = [];

  function findNetwork(networkIndex, currentIndex) {
    visited.push(currentIndex);
    computers[currentIndex].reduce((acc, cur, index) => {
      if (!visited.includes(index) && cur) {
        acc.push(index);
      }
      return acc;
    }, [])
      .forEach((index) => findNetwork(networkIndex, index));
  }

  for (let index = 0; index < n; index++) {
    if (!visited.includes(index)) {
      findNetwork(index, index);
      networkCount++;
    }
  }
  return networkCount;
}
