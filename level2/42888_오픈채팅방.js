function solution(record) {
    const idMap = {};
    const records = [];

    record.forEach((i) => {
        const [type, userId, nickName] = i.split(" ");
        if (["Enter", "Leave"].includes(type)) {
            records.push([userId, type === "Enter" ? "님이 들어왔습니다." : "님이 나갔습니다."]);
        }
        if (nickName) {
            idMap[userId] = nickName;
        }
    });
    return records.map((i) => `${idMap[i[0]]}${i[1]}`);
}