function solution(board, moves) {
    let count = 0;
    const machine = [...board];
    const doneStack = [];

    moves.forEach((move, index) => {
        for (let i = 0; i < machine.length; i++) {
            if (machine[i][move - 1] !== 0) {
                if (doneStack[doneStack.length - 1] === machine[i][move - 1]) {
                    doneStack.pop();
                    count += 2;
                } else {
                    doneStack.push(machine[i][move - 1]);
                }
                machine[i][move - 1] = 0;
                break;
            }
        }
    });
    return count;
}
