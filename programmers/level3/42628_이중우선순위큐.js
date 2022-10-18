function solution(operations) {
    const queue = [];
    while (operations.length) {
        if (operations[0].split("I ").length > 1) {
            queue.push(parseInt(operations[0].split("I ")[1], 10));
        } else {
            const idx = queue.indexOf(
                operations[0] === "D 1"
                    ? Math.max(...queue)
                    : Math.min(...queue));
            queue.splice(idx, 1);
        }
        operations.shift();
    }
    return !queue.length
        ? [0, 0]
        : queue.length === 1
            ? [queue[0], queue[0]]
            : [Math.max(...queue), Math.min(...queue)];
}