function solution(n, lost, reserve) {
  const lostMembers = [...lost].sort((a, b) => a - b);
  const reserveMembers = [...reserve].sort((a, b) => a - b);
  const solvedMembers = [];

  lost.forEach((lostMember) => {
    const lostIndex = lostMembers.indexOf(lostMember);
    const reserveIndex = reserveMembers.indexOf(lostMember);

    if (reserveIndex > -1) {
      lostMembers.splice(lostIndex, 1);
      reserveMembers.splice(reserveIndex, 1);
      solvedMembers.push(lostMember);
    }
  });

  for (let memberNumber = 1; memberNumber <= n; memberNumber++) {
    if (solvedMembers.includes(memberNumber)) {
      continue;
    }
    const lostIndex = lostMembers.indexOf(memberNumber);
    if (lostIndex === -1) {
      solvedMembers.push(memberNumber);
    } else {
      const lendIndex = reserveMembers.findIndex((i) => i === memberNumber + 1 || i === memberNumber - 1);
      if (lendIndex > -1) {
        reserveMembers.splice(lendIndex, 1);
        solvedMembers.push(memberNumber);
      }
    }
  }
  return solvedMembers.length;
}
