function solution(ingredients) {
  const burgers = [];
  let count = 0;
  
  for (const ingredient of ingredients) {
    burgers.push(ingredient);
    while ((burgers.at(-1) === 1 && burgers.at(-2) === 3 && burgers.at(-3) === 2) && burgers.at(-4) === 1) {
      burgers.splice(burgers.length - 4, 4);
      count++;
    }
  }
  return count
}
