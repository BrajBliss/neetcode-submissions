class Solution {
    /**
     * @param {character[][]} matrix
     * @return {number}
     */
    maximalSquare(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        if (!rows || !cols) return 0;
        const dp = Array.from({length: rows + 1}, () => new Array(cols + 1).fill(0));
        let maxSide = 0;
        for (let r = 1; r <= rows; r++) {
            for (let c = 1; c <= cols; c++) {
                if (matrix[i - 1][j - 1] === '1') {
                    const top = dp[i - 1][j];
                    const left = dp[i][j - 1];
                    const diag = dp[i - 1][j - 1];
                    dp[i][j] = 1 + Math.min(top, left, diag);
                    maxSide = Math.max(maxSide, dp[i][j]);
                }
            }
        }
        return maxSide * maxSide;
    }
}
