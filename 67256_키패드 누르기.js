function solution(numbers, hand) {
  function getPosition(num) {
    const column = keyPad.findIndex((i) => i.includes(num));
    const row = keyPad[column].findIndex((i) => i === num);
    return [column, row];
  }
  const pushHistory = [];
  let leftHand = "*";
  let rightHand = "#";
  const keyPad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]];

  for (const currentNumber of numbers) {
    if ([1, 4, 7].includes(currentNumber)) {
      pushHistory.push("L");
    } else if ([3, 6, 9].includes(currentNumber)) {
      pushHistory.push("R");
    } else {
      const left = getPosition(leftHand);
      const right = getPosition(rightHand);
      const target = getPosition(currentNumber);
      const leftCost = (Math.abs(left[0] - target[0]) + (Math.abs(left[1] - target[1])));
      const rightCost = (Math.abs(right[0] - target[0]) + (Math.abs(right[1] - target[1])));

      if (rightCost < leftCost) {
        pushHistory.push("R");
      } else if (rightCost > leftCost) {
        pushHistory.push("L");
      } else {
        if (hand === "right") {
          pushHistory.push("R");
        } else {
          pushHistory.push("L");
        }
      }
    }
    if (pushHistory[pushHistory.length - 1] === "R") {
      rightHand = currentNumber;
    } else {
      leftHand = currentNumber;
    }
  }
  return pushHistory.join("");
}
