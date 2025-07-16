function solution(want, number, discount) {
    const wantMap = new Map;
    let result = 0;
    
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }
    
    for (let i = 0; i < discount.length; i++) {
        const windowMap = new Map;
        
        for (let j = i; j < i + 10; j++) {
            const item = discount[j];
            windowMap.set(item, (windowMap.get(item) || 0) + 1);
        }
        
        let matched = true;
        
        for (let [item, count] of windowMap) {
            if (wantMap.get(item) !== count) {
                matched = false;
                break;
            }
        }
        
        if (matched) result++;
    }
    
    return result;
}