class Solution {
    /**
     * @param {character[][]} matrix
     * @return {number}
     */
    maximalSquare(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        if (!rows || !cols) return 0;
        let maxSide = 0;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (matrix[r][c] === '1') {
                    let side = 1;
                    let isValid = true;
                    while (r + side < rows && c + side < cols && isValid) {
                        for (let i = c; i <= c + side; c++) {
                            if (matrix[r + side][i] === '0') {
                                isValid = false;
                                break;
                            }
                        }
                        for (let i = r; i <= r + side; i++) {
                            if (matrix[i][c + side] === '0') {
                                isValid = false;
                                break;
                            }
                        }
                        if (isValid) side++;
                    }
                    maxSide = Math.max(maxSide, side);
                }
            }
        }
        return maxSide * maxSide;
    }
}
