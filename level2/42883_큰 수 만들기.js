function solution(number, k) {
  const stack = [];
  for (let i = 0; i < number.length; i++) {
    while (k && (stack[stack.length - 1] < number[i])) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }
  return (k ? stack.slice(0, stack.length - 1) : stack).join("");
}
