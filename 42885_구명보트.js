function solution(people, limit) {
  const sortedPeople = [...people.sort((a, b) => b - a)];
  const donePeople = [];
  let count = 0;
  let order = 0;

  while (!(donePeople.length === people.length || sortedPeople[order] === undefined)) {
    if (sortedPeople.length > 1 && limit >= sortedPeople[order] + sortedPeople[sortedPeople.length - 1]) {
      donePeople.push(sortedPeople[order], sortedPeople.pop());
    } else {
      donePeople.push(sortedPeople[order]);
    }
    order++;
    count++;
  }
  return count;
}
