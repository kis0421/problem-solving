function solution(s) {
  return s
    .split(" ")
    .map((char) => char
      .split("")
      .reduce((acc, cur, index) => {
        acc.push(!Boolean(index % 2) || index === 0
          ? cur.toUpperCase()
          : cur.toLowerCase());
        return acc;
      }, []).join(""))
    .join(" ");
}
