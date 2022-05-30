function solution(k, dungeons) {
  let maxClear = 0;
  const getCourses = (function getPermutation(fatigue, arr, n) {
    const result = [];
    arr.forEach((fixed, index, origin) => {
      const rest = origin.filter((_, originIndex) => index !== originIndex);
      const permutations = n === 2 ? arr.map((i) => [i]) : getPermutation(fatigue - fixed[1], rest, n - 1);
      result.push(...permutations.map((v) => [fixed, ...v]));
    });
    return result;
  })(k, dungeons, dungeons.length);

  for (const dungeonCourse of getCourses) {
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
