function solution(name, yearning, photo) {
  const scoreMap = name.reduce((acc, cur, index) => {
    acc[cur] = yearning[index];
    return acc;
  }, {});
  return photo.map((i) => i.reduce((acc, cur) => acc + (scoreMap[cur] || 0), 0));
}
