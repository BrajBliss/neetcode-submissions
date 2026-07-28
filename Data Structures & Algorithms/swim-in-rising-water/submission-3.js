class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const n = grid.length;
        const visited = Array.from({ length: n }, () => new Array(n).fill(false));
        const pq = new MinPriorityQueue((entry) => entry[0]);
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        // maxElevationSoFar, r, c
        pq.enqueue([grid[0][0], 0, 0]);
        visited[0][0] = true;
        while (!pq.isEmpty()) {
            const [currentMaxElevation, r, c] = pq.dequeue();
            if (r === n - 1 && c === n - 1) {
                return currentMaxElevation;
            }
            for (const [dr, dc] of directions) {
                const newR = dr + r;
                const newC = dc + c;
                if (newR >= 0 && newR < n && newC >= 0 && newC < n && !visited[newR][newC]) {
                    visited[newR][newC] = true;
                    const nextMax = Math.max(currentMaxElevation, grid[newR][newC]);
                    pq.enqueue([nextMax, newR, newC]);
                }
            }
        }
        return 0;
    }
}
