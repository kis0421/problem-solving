function solution(skill, skill_trees) {
  const splitSkill = skill.split("");

  return skill_trees.filter((skillTree) => {
    let index = 0;
    for (const targetSkill of skillTree) {
      if (skill[index] === targetSkill) {
        index++;
      } else if (splitSkill.slice(index + 1, splitSkill.length).includes(targetSkill)) {
        return false;
      }
    }
    return true;
  }).length;
}
