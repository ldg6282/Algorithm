function solution(s) {
    let str = s;
    let zeroCount = 0;
    let count = 0;
    
    while (str !== "1") {
        let ones = "";
        
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "1") {
                ones += "1";
            } else {
                zeroCount += 1;
            }
        }
        
        str = ones.length.toString(2);
        
        count += 1;
    }
    
    return [count, zeroCount];
}