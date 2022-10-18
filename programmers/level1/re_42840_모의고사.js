// 리팩토링할 수 있을 거 같음
function solution(answers) {
  const members = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scores = [0, 0, 0];

  answers.forEach((current, index) => {
    members.forEach((member, memberIndex) => {
      const currentSolution = member[index % member.length];
      if (current === currentSolution) {
        scores[memberIndex]++;
      }
    });
  });
  const maxScore = Math.max(...scores);
  return scores.reduce((acc, current, index) => {
    return current === maxScore
      ? [...acc, index + 1]
      : [...acc];
  }, []);
}
