function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  const stringX = x.toString();
  for (let i = 0; i < Math.floor(stringX.length / 2); i++) {
    if (stringX[i] !== stringX[stringX.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}
