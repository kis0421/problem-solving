function solution(fees, records) {
  const recordMap = records.reduce((acc, cur) => {
    const splitRecord = cur.split(" ");
    const checkTime = splitRecord[0].split(":").reduce((acc, cur, index) => acc + parseInt(index === 0 ? cur * 60 : cur, 10), 0);
    const carNumber = splitRecord[1];
    if (!acc[carNumber]) {
      acc[carNumber] = [];
    }
    acc[carNumber].push(checkTime);
    return acc;
  }, {});

  return Object.entries(recordMap).reduce((acc, cur) => {
    let totalTime = 0;
    let targetTime = cur[1].length % 2 === 0 ? cur[1].pop() : 1439;
    while (cur[1].length) {
      totalTime += (targetTime - cur[1].pop());
      targetTime = cur[1].pop();
    }
    const price = totalTime <= fees[0]
      ? fees[1]
      : fees[1] + Math.ceil(((totalTime - fees[0]) / fees[2])) * fees[3];
    acc.push([cur[0], price]);
    return acc;
  }, [])
  .sort((a, b) => a[0] - b[0])
  .map((i) => i[1]);
}
