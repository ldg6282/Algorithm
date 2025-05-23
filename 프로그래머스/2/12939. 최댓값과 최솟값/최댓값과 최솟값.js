function solution(s) {
    const num = s.split(" ");
    const arr = [];
    
    for (let i = 0; i < num.length; i++) {
        arr.push(Number(num[i]));
    }
    
    return [Math.min(...arr), Math.max(...arr)].join(" ");
}