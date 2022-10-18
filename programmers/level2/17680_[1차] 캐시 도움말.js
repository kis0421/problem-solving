function solution(cacheSize, cities) {
  if (!cacheSize) { return cities.length * 5; }
  const upperCaseCities = cities.map((city) => city.toUpperCase());
  const cache = [];

  return upperCaseCities.reduce((acc, cur) => {

    const cacheIndex = cache.slice(Math.max(cache.length - cacheSize, 0), cache.length).indexOf(cur);

    cache.push(cacheIndex === -1 ? cur : cache.splice((Math.min(cacheSize, cache.length) - (cacheIndex)) * -1, 1)[0]);
    console.log(cacheIndex, cache, (cacheSize - (cacheIndex)) * -1, 1);
    return acc + (cacheIndex === -1 ? 5 : 1);
  }, 0);
}
