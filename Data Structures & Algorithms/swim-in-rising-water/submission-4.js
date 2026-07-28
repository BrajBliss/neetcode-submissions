class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const n = grid.length;
        const visited = Array.from({length : n}, () => new Array(n).fill(false));
        const pq = new MinPriorityQueue(item => item[0]);
        // maxElevationSoFar, row, col
        pq.enqueue([grid[0][0], 0, 0]);
        visited[0][0] = true;
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ];
        while (!pq.isEmpty()) {
            const [currentMaxElevationSoFar, row, col] = pq.dequeue();
            if (row === n - 1 && col === n - 1) {
                return currentMaxElevationSoFar;
            }
            for (const [dr, dc] of directions) {
                const nr = row + dr;
                const nc = col + dc;
                if (nr >= 0 && nr < n && nc >= 0 && nc < n && !visited[nr][nc]) {
                    visited[nr][nc] = true;
                    const nextMaxElevation = Math.max(currentMaxElevationSoFar, grid[nr][nc]);
                    pq.enqueue([nextMaxElevation, nr, nc]);
                }
            }
        } 
        return 0;
    }
}
