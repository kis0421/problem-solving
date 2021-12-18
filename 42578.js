// 위장
function solution(clothes) {
  const wardrobe = {};
    
  clothes.forEach((cloth) => {
    const costume = cloth[1];
    if (!wardrobe[costume]) {
      wardrobe[costume] = 2;
    } else {
      wardrobe[costume] ++;
    }
  });
    
  return (Object.values(wardrobe).reduce((a, b) => a * b)) - 1;
}
