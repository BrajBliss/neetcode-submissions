class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const m = matrix.length, n = matrix[0].length;
        const copy = matrix.map(row => [...row]);
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (matrix[r][c] === 0) {
                    for (let i = 0; i < m; i++) {
                        copy[i][c] = 0;
                    }
                    for (let j = 0; j < n; j++) {
                        copy[r][j] = 0;
                    }
                }
            }
        }
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                matrix[r][c] = copy[r][c];
            }
        }
    }
}
