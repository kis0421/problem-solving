function solution(a, b) {
  const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const getDaysOfMonth = (month) => month === 2
    ? 29
    : [1, 3, 5, 7, 8, 10, 12].includes(month)
      ? 31
      : 30;
  const months = Array.from({ length: a }, (_, index) => index + 1);
  return weeks[(4 + months.reduce((acc, cur, index) => acc + (months.length - 1 === index ? b : getDaysOfMonth(cur)), 0)) % 7];
}

// Date object
function solution(a, b) {
  return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][new Date(`2016-${a}-${b}`).getDay()];
}
