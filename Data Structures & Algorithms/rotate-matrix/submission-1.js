class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        const n = matrix.length;
        for (let r = 0; r < n; r++) {
            for (let c = 1 + r; c < n; c++) {
                [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
            }
        }
        for (let r = 0; r < n; r++) {
            matrix[r].reverse();
        }
    }
}
