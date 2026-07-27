class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const m = matrix.length;
        const n = matrix[0].length;
        if (!m || !n) return [];
        const result = [];
        const visited = Array.from({length: m}, () => new Array(n).fill(false));
        const dr = [0, 1, 0, -1];
        const dc = [1, 0, -1, 0];
        let r = 0, c = 0, dir = 0;
        for (let i = 0; i < m * n; i++) {
            result.push(matrix[r][c]);
            visited[r][c] = true;
            let nextR = r + dr[dir];
            let nextC = c + dc[dir];
            if (nextR < 0 || nextR >= m || nextC < 0 || nextC >= n || visited[nextR][nextC]) {
                dir = (dir + 1) % 4;
                nextR = r + dr[dir];
                nextC = c + dc[dir];
            }
            r = nextR;
            c = nextC;
        }
        return result;
    }
}
