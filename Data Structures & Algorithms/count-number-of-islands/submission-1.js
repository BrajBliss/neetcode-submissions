class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;
        const rows = grid.length;
        const cols = grid[0].length;
        function dfs(r, c) {
            const key = `${r},${c}`;
            if (r < 0 || r >= rows || c < 0 || c >= cols) return;
            if (grid[r][c] !== "1") return;
            grid[r][c] = "#";
            const directions = [
                [-1, 0],
                [1, 0],
                [0, -1],
                [0, 1],
            ];
            for (const [dr, dc] of directions) {
                const nr = dr + r;
                const nc = dc + c;
                dfs(nr, nc);
            }
        }
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === "1") {
                    dfs(r, c);
                    count++;
                }
            }
        }
        return count;
    }
}
