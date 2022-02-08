function solution(id_list, report, k) {
  const uniqueReport = Array.from(new Set(report));
  const ids = uniqueReport.reduce((acc, cur, index) => {
    const [_, target] = cur.split(" ");
    acc[target] = acc[target] === undefined
      ? 1
      : acc[target] + 1;
    return acc;
  }, {});
  const reportCount = uniqueReport.reduce((acc, cur, index) => {
    const [reporter, target] = cur.split(" ");
    if (ids[target] && ids[target] >= k) {
      acc[reporter] = acc[reporter] === undefined
        ? 1
        : acc[reporter] + 1;
    }
    return acc;
  }, {});

  return id_list.map((i) => reportCount[i] || 0);
}
