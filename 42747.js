function solution(citations) {
    let hIndex = 0;
    while (true) {
        const filterNumbers = citations.filter((i) => i > hIndex);
        if (!(filterNumbers.length > hIndex
            && filterNumbers.length > citations.filter((i) => i < hIndex).length)) {
                break;
        }
        hIndex++;
    }
    return hIndex;
}