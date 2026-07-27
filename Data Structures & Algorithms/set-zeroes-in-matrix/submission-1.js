class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const m = matrix.length, n = matrix[0].length;
        const zr = new Array(m).fill(false);
        const zc = new Array(n).fill(false);
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (matrix[r][c] === 0) {
                    zr[r] = true;
                    zc[c] = true;
                }
            }
        }
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (zr[r] || zc[c]) {
                    matrix[r][c] = 0;
                }
            }
        }
    }
}
