class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        // const n = matrix.length;
        // const rotated = Array.from({ length: n }, () => new Array(n).fill(0));
        // for (let i = 0; i < n; i++) {
        //     for (let j = 0; j < n; j++) {
        //         rotated[j][n - 1 - i] = matrix[i][j];
        //     }
        // }
        // for (let i = 0; i < n; i++) {
        //     for (let j = 0; j < n; j++) {
        //         matrix[i][j] = rotated[i][j];
        //     }
        // }

        const n = matrix.length;
        for (let r = 0; r < n; r++) {
            for (let c = r + 1; c < n; c++) {
                [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
            }
        }
        for (let r = 0; r < n; r++) {
            matrix[r].reverse();
        }
    }
}
