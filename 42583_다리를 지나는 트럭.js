function solution(bridge_length, weight, truck_weights) {
  const trucksInfo = truck_weights.map((weight) => ({ location: bridge_length, weight }));
  const bridge = [];
  const done = [];
  let count = 0;

  while (trucksInfo.length || bridge.length) {
    if (bridge.length && bridge[0].location === 0) {
      done.push(bridge.shift());
    }
    if (trucksInfo.length && bridge.reduce((acc, cur) => acc + cur.weight, 0) + trucksInfo[0].weight <= weight) {
      bridge.push(trucksInfo.shift());
    }

    for (const key in bridge) {
      bridge[key].location--;
    }
    count++;
  }

  return count;
}
