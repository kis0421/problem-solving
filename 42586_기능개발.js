function solution(progresses, speeds) {
    const completedDays = progresses.map((i, index) => Math.ceil((100 - i) / speeds[index]));
    const releaseCounts = [];
    let day = 0;
    while (completedDays.length > day) {
        let j = day + 1;
        let tempCount = 1;
        while (true) {
            if ((completedDays[day] < completedDays[j]) || completedDays.length <= j) {
                releaseCounts.push(tempCount);
                break;
            } else {
                j++;
                tempCount++;
            }
        }
        day += tempCount;
    }
    return releaseCounts;
}
