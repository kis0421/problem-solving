function solution(t, p) {
  const standard = Number(p);
  return t
    .split('')
    .reduce((acc, _, index) => {
      if (t.length - index >= p.length) {
        const num = t.slice(index, index + p.length);
        if (standard >= Number(num)) {
          acc.push(num);
        }
      }
      return acc;
    }, []).length;
}
