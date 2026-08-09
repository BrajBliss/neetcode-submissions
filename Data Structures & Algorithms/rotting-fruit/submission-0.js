class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const queue = [];
        let freshOranges = 0;
        let minutes = 0;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                } else if (grid[r][c] === 1) {
                    freshOranges++;
                }
            }
        }
        while (queue.length && freshOranges) {
            minutes++;
            const levelSize = queue.length;
            for (let i = 0; i < levelSize; i++) {
                const [x, y] = queue.shift();
                const directions = [
                    [-1, 0],
                    [1, 0],
                    [0, -1],
                    [0, 1],
                ];
                for (const [dx, dy] of directions) {
                    const nx = x + dx;
                    const ny = y + dy;
                    if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny] === 1) {
                        grid[nx][ny] = 2;
                        freshOranges--;
                        queue.push([nx, ny]);
                    }
                }
            }
        }
        return freshOranges ? -1 : minutes;
    }
}
