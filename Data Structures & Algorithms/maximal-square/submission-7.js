class Solution {
    /**
     * @param {character[][]} matrix
     * @return {number}
     */
    maximalSquare(matrix) {
        // const rows = matrix.length;
        // const cols = matrix[0].length;
        // if (!rows || !cols) return 0;
        // let maxSide = 0;
        // for (let r = 0; r < rows; r++) {
        //     for (let c = 0; c < cols; c++) {
        //         if (matrix[r][c] === "1") {
        //             let side = 1;
        //             let isValid = true;
        //             while (r + side < rows && c + side < cols && isValid) {
        //                 for (let i = c; i <= c + side; c++) {
        //                     if (matrix[r + side][i] === "0") {
        //                         isValid = false;
        //                         break;
        //                     }
        //                 }
        //                 for (let i = r; i <= r + side; i++) {
        //                     if (matrix[i][c + side] === "0") {
        //                         isValid = false;
        //                         break;
        //                     }
        //                 }
        //                 if (isValid) side++;
        //             }
        //             maxSide = Math.max(maxSide, side);
        //         }
        //     }
        // }
        // return maxSide * maxSide;

        // const rows = matrix.length;
        // const cols = matrix[0].length;
        // if (!rows || !cols) return 0;
        // const dp = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));
        // let maxSide = 0;
        // for (let r = 1; r <= rows; r++) {
        //     for (let c = 1; c <= cols; c++) {
        //         if (matrix[r - 1][c - 1] === "1") {
        //             const top = dp[r - 1][c];
        //             const left = dp[r][c - 1];
        //             const diag = dp[r - 1][c - 1];
        //             dp[r][c] = 1 + Math.min(top, left, diag);
        //             maxSide = Math.max(maxSide, dp[r][c]);
        //         }
        //     }
        // }
        // return maxSide * maxSide;

        const rows = matrix.length;
        const cols = matrix[0].length;
        if (!rows || !cols) return 0;
        const dp = new Array(cols + 1).fill(0);
        let maxSide = 0;
        for (let r = 1; r <= rows; r++) {
            let prev = 0;
            for (let c = 1; c <= cols; c++) {
                const temp = dp[c];
                if (matrix[r - 1][c - 1] === "1") {
                    dp[c] = 1 + Math.min(dp[c], dp[c - 1], prev);
                    maxSide = Math.max(maxSide, dp[c]);
                } else {
                    dp[c] = 0;
                }
                prev = temp;
            }
        }
        return maxSide * maxSide;
    }
}
