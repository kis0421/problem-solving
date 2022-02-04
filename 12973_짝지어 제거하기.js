function solution(s) {
  if (s.length % 2 !== 0) {
    return 0;
  }
  
  const stringArray = s.split("");
  const charStack = [];

  for (let i = 0; i < s.length; i++) {
    if (!charStack.length) {
      charStack.push(stringArray[i]);
    } else {
      if (charStack[charStack.length - 1] === stringArray[i]) {
        charStack.pop();
      } else {
        charStack.push(stringArray[i]);
      }
    }
  }

  return charStack.length ? 0 : 1;
}
