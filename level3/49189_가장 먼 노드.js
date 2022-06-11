function solution(n, edge) {
  const visited = { 1: true };
  let maxDepth = 0;
  let leafCount = 0;
  const graph = edge.reduce((acc, cur) => {
    const [head, tail] = cur;
    if (!acc[head]) { acc[head] = []; }
    if (!acc[tail]) { acc[tail] = []; }
    acc[head].push(tail);
    acc[tail].push(head);
    return acc;
  }, {});

  function travelGraphq(arr, depth) {
    const needVisit = Array.from(new Set(arr)).filter((i) => !visited[i]);
    if (needVisit.length) {
      if (maxDepth < depth) {
        maxDepth = depth;
        leafCount = 0;
      }
      for (const node of needVisit) {
        leafCount++;
        visited[node] = true;
      }
      const nextGraphs = needVisit.reduce((acc, cur) => {
        for (const node of graph[cur]) {
          acc.push(node);
        }
        return acc;
      }, []);
      travelGraphq(nextGraphs, depth + 1);
    }
  }
  travelGraphq(graph[1], 1);

  return leafCount;
}
