class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dp = new Array(m).fill().map(() => new Array(n).fill(0));
        for (let c = 0; c < n; c++) {
            dp[0][c] = 1;
        }
        for (let r = 0; r < m; r++) {
            dp[r][0] = 1;
        }
        for (let r = 1; r < m; r++) {
            for (let c = 1; c < n; c++) {
                dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
            }
        }
        return dp[m - 1][n - 1];
    }
}
