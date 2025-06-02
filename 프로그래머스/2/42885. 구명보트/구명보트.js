function solution(people, limit) {
    const arr = people.sort((a, b) => a - b);
    let low = 0;
    let high = arr.length - 1;
    let count = 0;
    
    while (low <= high) {
        if (arr[low] + arr[high] <= limit) {
            low++;
            high--
        } else {
            high--;
        }
        count++;
    }
    
    return count;
}