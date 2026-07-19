class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 1) {
            return 1;
        }
        let prev1 = 1;
        let prev2 = 1;
        for (let i = 2; i <= n; i++) {
            const curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
}
