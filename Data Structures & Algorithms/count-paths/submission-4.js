class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        function solve(i, j) {
            if (!i || !j) return 1;
            return solve(i - 1, j) + solve(i, j - 1);
        }
        return solve(m - 1, n - 1);
    }
}
