class Solution {
    /**
     * @param {character[][]} matrix
     * @return {number}
     */
    maximalSquare(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        if (!rows || !cols) return 0;
        let max = 0;
        const dp = new Array(cols + 1).fill(0);
        for (let r = 1; r <= rows; r++) {
            let prev = 0;
            for (let c = 1; c <= cols; c++) {
                const temp = dp[c];
                if (matrix[r - 1][c - 1] === "1") {
                    dp[c] = 1 + Math.min(dp[c], dp[c - 1], prev);
                    max = Math.max(max, dp[c]);
                } else {
                    dp[c] = 0;
                }
                prev = temp;
            }
        }
        return max * max;
    }
}
