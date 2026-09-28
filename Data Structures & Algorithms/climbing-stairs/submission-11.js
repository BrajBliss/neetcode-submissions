class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // if (n <= 1) return 1;
        // return this.climbStairs(n - 1) + this.climbStairs(n - 2);

        const memo = {};
        function helper(i) {
            if (i <= 1) return 1;
            if (i in memo) {
                return memo[i];
            }
            memo[i] = helper(i - 1) + helper(i - 2);
            return memo[i];
        }
        return helper(n);
    }
}
