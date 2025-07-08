/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxIsland = 0;

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0) return 0;

        grid[i][j] = 0;
        let area = 1;

        area += dfs(i + 1, j);
        area += dfs(i - 1, j);
        area += dfs(i, j + 1);
        area += dfs(i, j - 1);

        return area;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                maxIsland = Math.max(maxIsland, dfs(i, j));
            }
        }
    }
    
    return maxIsland;
};