class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;
        const pacific = new Set();
        const atlantic = new Set();
        function dfs(r, c, set) {
            const key = `${r},${c}`;
            set.add(key);
            const directions = [
                [-1, 0],
                [1, 0],
                [0, -1],
                [0, 1],
            ];
            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;
                if (nr >= 0 && nc >= 0 && nr < rows && nc < cols) {
                    const key = `${nr},${nc}`;
                    if (!set.has(key) && heights[nr][nc] >= heights[r][c]) {
                        dfs(nr, nc, set);
                    }
                }
            }
        }
        for (let r = 0; r < rows; r++) {
            dfs(r, 0, pacific);
            dfs(r, cols - 1, atlantic);
        }
        for (let c = 0; c < cols; c++) {
            dfs(0, c, pacific);
            dfs(rows - 1, c, atlantic);
        }
        return Array.from(pacific)
            .filter((cell) => atlantic.has(cell))
            .map((cell) => cell.split(",").map(Number));
    }
}
