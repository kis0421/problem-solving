// 순위검색 

function solution(info, query) {
  const infoMap = info.map((i) => {
    const splitInfoMap = i.split(" ");
    return [...splitInfoMap.slice(0, 4), parseInt(splitInfoMap.slice(4, 5), 10)];
  }).sort((a, b) => a[4] - b[4]);
  const queryMap = query.map((i) => {
    const splitQuery = i.split(" and ");
    const [splitQuries, lastQuery] = splitQuery[3].split(" ");
    return [...splitQuery.slice(0, 3), splitQuries, parseInt(lastQuery, 10)];
  });
  function filterMember(info, query) {
    for (let i = 0; i <= 3; i++) {
      if (info[i] !== query[i] && query[i] !== "-") {
        return false;
      }
    }
    return true;
  }
  return queryMap.map((query) => infoMap
    .filter((info) => info[4] >= query[4])
    .filter((info) => filterMember(info, query)).length);
}
