function searchMatrix(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][0] === target) {
          return true;
      } else if (matrix[i][0] < target && i < matrix.length - 1) {
          continue;
      } else {
          const index = Math.max(0,matrix[i][0] >= target ? i - 1 : i);
          return matrix[index].includes(target);
      }
  }
  return false;
}
