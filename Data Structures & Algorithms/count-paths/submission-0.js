class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        function dp(i, j) {
            if (!i || !j) {
                return 1;
            }
            return dp(i - 1, j) + dp(i, j - 1);
        }
        return dp(m - 1, n - 1);
    }
}
