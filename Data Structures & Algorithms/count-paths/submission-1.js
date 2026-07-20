class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memo = {};
        function dp(i, j) {
            if (!i || !j) {
                return 1;
            }
            const key = `${i},${j}`;
            if (key in memo) {
                return memo[key];
            }
            memo[key] = dp(i - 1, j) + dp(i, j - 1);
            return memo[key];
        }
        return dp(m - 1, n - 1);
    }
}
