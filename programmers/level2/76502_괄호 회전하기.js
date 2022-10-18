function solution(s) {
  if (s.length === 1) {
    return 0
  }    
  let count = 0;
  function isCorrectParentheses(brackets) {
    const stack = [];
    for (const bracket of brackets) {
      if (["[", "{", "("].includes(bracket)) {
        stack.push(bracket);
      } else {
        if (!stack.length) {
          return false;
        } else if (stack[stack.length - 1] === "(" && bracket === ")"
          || stack[stack.length - 1] === "{" && bracket === "}"
          || stack[stack.length - 1] === "[" && bracket === "]") {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return !Boolean(stack.length);
  }
  for (let i = 0; i < s.length; i++) {
    const target = s.split("");
    target.push(...target.splice(0, i));
    if (isCorrectParentheses(target)) {
      count++;
    }
  }
  return count;
}
