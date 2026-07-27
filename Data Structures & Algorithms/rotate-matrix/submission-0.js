class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        const n = matrix.length;
        const temp = Array.from({length: n}, () => new Array(n));
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                temp[c][n - 1 - r] = matrix[r][c];
            }
        }
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                matrix[r][c] = temp[r][c];
            }
        }
    }
}
