function solution(s) {
    let count = 0;
    let result = 0;
    
    while (count < s.length) {
        let arr = [];
        s = s.slice(1) + s[0];
        
        for (let i = 0; i < s.length; i++) {
            const last = arr[arr.length - 1];
            
            if (s[i] === ')' && last === '(') {
                arr.pop();
            } else if (s[i] === ']' && last === '[') {
                arr.pop();
            } else if (s[i] === '}' && last === '{') {
                arr.pop();
            } else {
                arr.push(s[i]);
            }
        }
        
        if (arr.length === 0) {
            result++;
        }
        count++;
    }
    
    return result;
}