function solution(k, tangerine) {
    const count = {};
    
    for (let i = 0; i < tangerine.length; i++) {
        let size = tangerine[i];
        if (count[size]) {
            count[size]++;
        } else {
            count[size] = 1;
        }
    }

    const counts = [];
    for (let key in count) {
        counts.push(count[key]);
    }
    counts.sort((a, b) => b - a);

    let sum = 0;
    let kinds = 0;
    for (let i = 0; i < counts.length; i++) {
        sum += counts[i];
        kinds++;
        if (sum >= k) {
            break;
        }
    }

    return kinds;
}