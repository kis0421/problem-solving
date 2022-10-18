function solution(n) {
  const oneTwoFourCountryNumber = n
    .toString(3)
    .split("")
    .reduce((acc, _, index, origin) => {
      const currentNumber = parseInt(origin[index], 10);
      if (!(index === 0 && !currentNumber)) {
        acc.push(currentNumber);
      }
      return acc;
    }, []);
  function replaceZero(index) {
    if (oneTwoFourCountryNumber.length > index + 1) {
      if (!oneTwoFourCountryNumber[index] || oneTwoFourCountryNumber[index + 1]) {
        replaceZero(index + 1);
      } else {
        oneTwoFourCountryNumber[index]--;
        oneTwoFourCountryNumber[index + 1] = 3;
        replaceZero(index -1);
      }
    } else {
      while (!oneTwoFourCountryNumber[0]) {
        oneTwoFourCountryNumber.splice(0, 1);
      }
    }
  }
  replaceZero(0);
  return oneTwoFourCountryNumber
    .join("")
    .replace(/3/gi, "4");
}
