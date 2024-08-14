function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const mergedNums = [...nums1, ...nums2].sort(
      (a, b) => a - b
    );
    const isOdd = mergedNums.length % 2 !== 0;
    const midianIndex = mergedNums.length / 2;
  
    return isOdd
      ? mergedNums[Math.floor(midianIndex)]
      : (mergedNums[Math.floor(midianIndex - 1)] +
          mergedNums[Math.ceil(midianIndex)]) /
          2;
  }