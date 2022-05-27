// DFS로 모든 가능 케이스 구한 뒤 정렬

function solution(tickets) {
  const visitedCase = [];

  function visitCity(arr, visited) {
    const targetIndexes = tickets.reduce((acc, current, index) => {
      if (current[0] === arr[arr.length - 1] && !visited.includes(index)) {
        acc.push(index);
      }
      return acc;
    }, []);
    
    for (const targetIndex of targetIndexes) {
      const visitSities = [...arr];
      const visitedIndexes = [...visited];
      visitedIndexes.push(targetIndex);
      visitSities.push(tickets[targetIndex][1]);
      if (visitedIndexes.length === tickets.length) {
        visitedCase.push(visitSities);
      }
      visitCity(visitSities, visitedIndexes);
    }
  }
  visitCity(["ICN"], []);

  return visitedCase.sort((a, b) => a.join("").localeCompare(b.join("")))[0];
}
