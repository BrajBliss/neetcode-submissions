class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        // function helper(r, c) {
        //     if (r === m - 1 && c === n - 1) {
        //         return 1;
        //     }
        //     if (r >= m || c >= n) {
        //         return 0;
        //     }
        //     const down = helper(r + 1, c);
        //     const right = helper(r, c + 1);
        //     return down + right;
        // }
        // return helper(0, 0);
        // // time
        // // o(2^(m + n)) - every cell branches 2 times
        // // space
        // // o(m + n) - no auxiliary, only recursion call stack

        const dp = new Array(n).fill(1);
        for (let r = 1; r < m; r++) {
            for (let c = 1; c < n; c++) {
                dp[c] = dp[c] + dp[c - 1];
            }
        }
        return dp[n - 1];
    }
}
