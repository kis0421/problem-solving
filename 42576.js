const division = (arr, n) => {
    const newArray = [];
    if (!n) {
        return arr;
    }
    while (arr.length) {
        newArray.push(arr.splice(0, n));
        if (!arr.length) {
            break;
        }
    }
    return newArray;

};
function solution(participant, completion) {
    const newParticipant = division(participant.sort(), 1000);
    const newCompletion = division(completion.sort(), 1000);
    let name = "";
    for (let i = 0; i <= newParticipant.length; i++) {
        if (newCompletion[i] && newParticipant[i].join("").length === newCompletion[i].join("").length) {
               continue;
           } else {
            const real = newCompletion[i] ? i : i - 1;
            for (const j of newParticipant[i]) {
                    const nameIdx = newCompletion[real].indexOf(j);
                    if (nameIdx > -1) {
                        newCompletion[real].splice(nameIdx, 1);
                    } else {
                        name = j;
                        break;
                    }
                }
            break;
            }
      }
    return name;
   }