function solution(clothes) {
    const clothesMap = new Map();
    
    for (let [item, type] of clothes) {
        if (!clothesMap[type]) {
            clothesMap[type] = 0;
        }
        clothesMap[type]++
    }
    
    let answer = 1;
    
    for (let type in clothesMap) {
        answer *= clothesMap[type] + 1
    }
    
    return answer - 1;
}