function solutiona(nums) {
  return Math.min(new Set(nums).size, nums.length / 2);
}
