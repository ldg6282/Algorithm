function solution(progresses, speeds) {
    var days = [];
    
    for (let i = 0; i < progresses.length; i++) {
        let count = 0;
        
        while (progresses[i] < 100) {
            progresses[i] = progresses[i] + speeds[i];
            count++;
        }
        
        days.push(count)
    }
    
    let currentDays = days[0];
    let answer = [];
    let count = 0;
    
    for (let i = 0; i < days.length; i++) {
        if (days[i] <= currentDays) {
            count++;
        } else {
            answer.push(count);
            currentDays = days[i];
            count = 1;
        }
    }

    answer.push(count);
    
    return answer;
}