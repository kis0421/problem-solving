function solution(S) {
  const stack = [];
  
  if (S.length % 2 !== 0) {
    return 0;
  }

  for (const char of S.split("")) {
    if (["{", "[", "("].includes(char)) {
      stack.push(char);
    } else {
      if (!stack.length) {
        return 0;
      }
      if (char === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      } else if (char === "}" && stack[stack.length - 1] === "{") {
        stack.pop();
      } else if (char === "]" && stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        return 0;
      }
    }
  }
  return stack.length ? 0 : 1;
}
