function solution(age) {
  const ages = 'abcdefghij'.split('')
  return age.toString().split('').map((char) => ages[char]).join('')
}
