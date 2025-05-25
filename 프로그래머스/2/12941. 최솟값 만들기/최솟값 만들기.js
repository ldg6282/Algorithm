function solution(A,B){
    let answer = 0;
    const newA = A.sort((a, b) => a - b);
    const newB = B.sort((a, b) => b - a);
    
    for (let i = 0; i < A.length; i++) {
        const acc = newA[i] * newB[i];
        answer = answer + acc;
    }

    return answer;
}