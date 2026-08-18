class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // if (n <= 1) return 1;
        // return this.climbStairs(n - 1) + this.climbStairs(n - 2);

        // const memo = {};
        // function climbHelper(i) {
        //     if (i <= 1) return 1;
        //     if (i in memo) {
        //         return memo[i];
        //     }
        //     memo[i] = climbHelper(i - 1) + climbHelper(i - 2);
        //     return memo[i];
        // }
        // return climbHelper(n);

        // if (n <= 1) return 1;
        // const dp = new Array(n + 1).fill(0);
        // dp[0] = 1;
        // dp[1] = 1;
        // for (let i = 2; i <= n; i++) {
        //     dp[i] = dp[i - 1] + dp[i - 2];
        // }
        // return dp[n];

        if (n <= 1) return 1;
        let prev2 = 1;
        let prev1 = 1;
        for (let i = 2; i <= n; i++) {
            const curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
}
