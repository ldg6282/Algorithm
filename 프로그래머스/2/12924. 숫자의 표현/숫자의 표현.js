function solution(n) {
    let count = 0;
    const maxK = Math.floor(Math.sqrt(2 * n)) + 1;

    for (let i = 1; i <= maxK; i++) {
        const numerator = 2 * n - i * (i - 1);
        const denominator = 2 * i;

        if (numerator % denominator === 0) {
            const a = numerator / denominator;
            if (a > 0) {
                count++;
            }
        }
    }

    return count;
}