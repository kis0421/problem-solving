function solution(n, a, b) {
  let [playerA, playerB] = [a, b];
  let playRound = 0;

  while (playerA !== playerB) {
    [playerA, playerB] = [Math.ceil(playerA / 2), Math.ceil(playerB / 2)];
    playRound++;
  }
  return playRound;
}
