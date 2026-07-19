class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (!nums || !nums.length) {
            return 0;
        }
        const dp = new Array(nums.length + 1).fill(0);
        dp[1] = nums[0];
        for (let i = 2; i <= nums.length; i++) {
            const take = dp[i - 2] + nums[i - 1];
            const skip = dp[i - 1];
            dp[i] = Math.max(skip, take);
        }
        return dp[nums.length];
    }
}
