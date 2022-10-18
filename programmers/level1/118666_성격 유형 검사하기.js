function solution(survey, choices) {
  const indicators = [0, 0, 0, 0];
  const types = [["R", "T"], ["C", "F"], ["J", "M"], ["A", "N"]];
  const scoreMap = { 1: 3, 2: 2, 3: 1, 4: 0, 5: -1, 6: -2, 7: -3, };

  for (let i = 0; i < survey.length; i++) {
    const first = survey[i].split("")[0];
    const typeIndex = types.findIndex((type) => type.includes(first));
    indicators[typeIndex] += scoreMap[choices[i]] * (first === types[typeIndex][0] ? -1 : 1);
  }

  return indicators.map((indicator, index) => {
    const choiceIndex = (types[index][0] > types[index][1] || indicator > 0) ? 1 : 0;
    return types[index][choiceIndex]
  }).join("");
}
