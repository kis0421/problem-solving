// 프린터

function solution(priorities, location) {
  const documents = priorities.map((document, index) => ({ index, importance: document }));
  const done = [];

  while (documents.length) {
    if (documents.find((document) => document.importance > documents[0].importance)) {
      documents.push(documents.shift());
    } else {
      done.push(documents.shift());
    }
  }

  for (const key in done) {
    if (done[key].index === location) {
      return parseInt(key, 10) + 1;
    }
  }
}
