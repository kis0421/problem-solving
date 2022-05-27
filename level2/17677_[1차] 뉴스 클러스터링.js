function solution(str1, str2) {
  function getUseableElement(str) {
    return str.split("").reduce((acc, _, index, origin) => {
      const elements = origin
        .slice(index, 2 + index)
        .reduce((acc, cur) => {
          if (cur.match(new RegExp(/^[a-zA-Z]*$/))) {
            acc.push(cur.toUpperCase());
          }
          return acc;
        }, []);
      if (elements.length === 2) {
        acc.push(elements.join(""));
      }
      return acc;
    }, []);
  }
  const setA = getUseableElement(str1);
  const setB = getUseableElement(str2);

  const intersection = [];

  for (const a of setA) {
    const charIndex = setB.indexOf(a);
    if (charIndex !== -1) {
      intersection.push(setB.splice(charIndex, 1));
    }
  }
  return !intersection.length && !(setA.length + setB.length)
    ? 65536
    : Math.floor(intersection.length / (setA.length + setB.length) * 65536);
}
