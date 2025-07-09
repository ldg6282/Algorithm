function solution(elements) {
    const n = elements.length;
    const extended = elements.concat(elements);
    const sumSet = new Set();

    for (let len = 1; len <= n; len++) {
        let sum = 0;

        for (let i = 0; i < len; i++) {
          sum += extended[i];
        }
        sumSet.add(sum);

        for (let start = 1; start < n; start++) {
          sum = sum - extended[start - 1] + extended[start + len - 1];
          sumSet.add(sum);
        }
    }

    return sumSet.size;
}