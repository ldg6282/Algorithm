/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const answer = [];
    const useNumber = new Set();

    function dfs (i, path, sum) {
        if (sum === target) {
            const key = path.slice().sort((a, b) => a - b).join(",");
            if (!useNumber.has(key)) {
                useNumber.add(key);
                answer.push([...path]);
            }
            return;
        }

        if (sum > target) return;

        for (let i = 0; i < candidates.length; i++) {
            path.push(candidates[i]);
            dfs(i, path, sum + candidates[i]);
            path.pop();
        }
    }

    dfs(0, [], 0)
    return answer;
};