class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const m = matrix.length, n = matrix[0].length;
        let firstColHasZero = false;
        for (let r = 0; r < m; r++) {
            if (matrix[r][0] === 0) firstColHasZero = true;
            for (let c = 1; c < n; c++) {
                if (matrix[r][c] === 0) {
                    matrix[r][0] = 0;
                    matrix[0][c] = 0;
                }
            }
        }
        for (let r = 1; r < m; r++) {
            for (let c = 1; c < n; c++) {
                if (matrix[r][0] === 0 || matrix[0][c] === 0) {
                    matrix[r][c] = 0;
                }
            }
        }
        if (matrix[0][0] === 0) {
            for (let c = 0; c < n; c++) matrix[0][c] = 0;
        }
        if (firstColHasZero) {
            for (let r = 0; r < m; r++) matrix[r][0] = 0;
        }
    }
}
