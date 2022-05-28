function solution(k, dungeons) {
  let maxClear = 0;

  function getPermutation(fatigue, arr, n) {
    const result = [];
    if (n === 1) {
      return arr.map((i) => [i]);
    }
    arr.forEach((fixed, index, origin) => {
      const rest = origin.filter((_, originIndex) => index !== originIndex);
      const permutations = getPermutation(fatigue - fixed[1], rest, n - 1);
      result.push(...permutations.map((v) => [fixed, ...v]));
    });
    return result;
  }
  for (const dungeonCourse of getPermutation(k, dungeons, dungeons.length)) {
    let fatigue = k;
    let clearCount = 0;
    for (const dungeon of dungeonCourse) {
      if (fatigue >= dungeon[0]) {
        fatigue -= dungeon[1];
        clearCount++;
      } else {
        break;
      }
    }
    maxClear = Math.max(maxClear, clearCount);
  }
  return maxClear;
}
