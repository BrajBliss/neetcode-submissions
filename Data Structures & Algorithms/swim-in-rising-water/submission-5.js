class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const n = grid.length;
        let left = Math.max(grid[0][0], grid[n - 1][n - 1]);
        let right = n * n - 1;
        let result = right;
        function canReach(maxTime) {
            const visited = Array.from({length: n}, () => new Array(n).fill(false));
            const queue = [[0, 0]];
            visited[0][0] = true;
            const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            while (queue.length > 0) {
                const [r, c] = queue.shift();
                if (r === n - 1 && c === n -1) {
                    return true;
                }
                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nc >=0 && nr >= 0 && nc < n && nr < n && !visited[nr][nc] && grid[nr][nc] <= maxTime) {
                        visited[nr][nc] = true;
                        queue.push([nr, nc]);
                    }
                }
            }
                return false;
        }
        while (left <= right) {
            const mid = Math.floor((left + right)/ 2);
            if (canReach(mid)) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return result;
    }
}
