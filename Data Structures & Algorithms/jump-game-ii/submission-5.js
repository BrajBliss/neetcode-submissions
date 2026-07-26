class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        const n = nums.length;
        const dp = new Array(n).fill(Infinity);
        dp[n - 1] = 0;
        for (let i = n - 2; i >= 0; i--) {
            const maxJump = Math.min(n - 1, i + nums[i]);
            for (let j = i + 1; j <= maxJump; j++) {
                dp[i] = Math.min(dp[i], 1 + dp[j]);
            }
        }
        return dp[0];
    }
}
