/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const answer = [];

    function dfs (path) {

        if (path.length === nums.length) {
            answer.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (path.includes(nums[i])) continue;
            path.push(nums[i]);
            dfs(path);
            path.pop();
        }
    }
    dfs ([])

    return answer;
};