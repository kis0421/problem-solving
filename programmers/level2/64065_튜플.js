function solutions(s) {
  return Object.entries(s
    .replace(/({|})/g, "")
    .split(",")
    .reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {}))
    .sort((a, b) => b[1] - a[1])
    .map(([v, _]) => Number(v));
}
