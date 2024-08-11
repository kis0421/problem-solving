function isValid(s: string): boolean {
  const parentheses = [];
  const validParenthesesMap: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  for (const char of s.split('')) {
    if (parentheses.length === 0 && [')', '}', ']'].includes(char)) {
      return false;
    }
    if (Object.keys(validParenthesesMap).includes(char)) {
      if (parentheses[parentheses.length - 1] === validParenthesesMap[char]) {
        parentheses.pop();
        continue;
      } else {
        return false;
      }
    }
    parentheses.push(char);
  }
  return !Boolean(parentheses.length > 0);
}
