function solution(dartResult) {
  const bonusMap = { S: 1, D: 2, T: 3 };
  return dartResult.match(/([0-9]{1,2})+(S|D|T)+(\#|\*){0,1}/g)
    .reduce((acc, cur, index) => {
      const [score, bonus, option] = cur.match(/([0-9]{1,2})|(S|D|T)|(\#|\*){0,1}/g);
      acc.push(Math.pow(parseInt(score, 10), bonusMap[bonus]));
      if (option === "*") {
        acc[index] = acc[index] * 2;
        if (index) {
          acc[index - 1] = acc[index - 1] * 2;
        }
      } else if (option === "#") {
        acc[index] = acc[index] * -1;
      }
      return acc;
    }, [])
    .reduce((acc, cur) => acc + cur);
}
