function solution(arr1, arr2) {
  return arr1.reduce((acc, cur, index) => {
    acc.push(cur.reduce((currentAcc, _, currentIndex) => {
      currentAcc.push(arr1[index][currentIndex] + arr2[index][currentIndex]);
      return currentAcc;
    }, []));
    return acc;
  }, []);
}
