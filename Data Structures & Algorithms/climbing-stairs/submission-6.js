class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = {};
        function climbHelper(i) {
            if (i <= 1) {
                return 1;
            }
            if (i in memo) {
                return memo[i];
            }
            memo[i] = climbHelper(i - 1) + climbHelper(i - 2);
            return memo[i];
        }
        return climbHelper(n);
    }
}
