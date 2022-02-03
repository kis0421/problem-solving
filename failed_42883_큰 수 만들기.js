// shift splice 

function solution(number, k) {
  const numbers = number.split("").map((i) => parseInt(i, 10));
  let deleteCount = k;

  let start = 0;
  while (deleteCount !== 0 && numbers[start + 1] !== undefined) {
    if ([0, 1].includes(numbers[0])) {
      numbers.shift();
      deleteCount--;
    } else {
      if (numbers[start] < numbers[start + 1]) {
        console.log(start, deleteCount, "지운다");
        numbers.splice(start, 1);
        deleteCount--;
        start = 0;
      } else {
        start++;
      }
    }
  }
  // for (let i = 0; i < k; i++) {
  // diffWidthRemoveNumber(0);
  // }
  return numbers.join("");
}
