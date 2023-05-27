function solution(players, callings) {
    const arr = [...players];
    const ranking = arr.reduce((acc,cur, index) => {
        acc[cur] = index;
        return acc; 
    }, {});

    for(const call of callings){
        const index = ranking[call];
        if(index > 0){
            const targetName = arr[index - 1];
            [ranking[call], ranking[targetName]] = [ranking[targetName],ranking[call]];
            [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
        }
    }
    return arr;
}
