function solution(n, words) {
    const arr = [];
    let order = 0;
    let time = 0;
    
    for (let i = 0; i < words.length; i++) {
        if(i % n === 0) {
            time++;
        }
        
        if (arr.includes(words[i])) {
            order = i % n + 1;
            console.log(words[i])
            break;
        }
        
        if (i > 0 && words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
          order = i % n + 1;
            break;  
        }
        
        arr.push(words[i]);
    }
    
    return order === 0 ? [0, 0] : [order, time];
}