class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const m = matrix.length;
        const n = matrix[0].length;
        if (!m || !n) return [];
        const result = [];
        let top = 0, bottom = m - 1;
        let left = 0, right = n - 1;
        while (left <= right && top <= bottom) {
            for (let c = left; c <= right; c++) {
                result.push(matrix[top][c]);
            }
            top++;
            for (let r = top; r <= bottom; r++) {
                result.push(matrix[r][right]);
            }
            right--;
            if (top <= bottom) {
                for (let c = right; c >= left; c--) {
                    result.push(matrix[bottom][c]);
                }
                bottom--;
            }
            if (left <= right) {
                for (let r = bottom; r >= top; r--) {
                    result.push(matrix[r][left]);
                }
                left++;
            }
        }        
        return result;
    }
}
