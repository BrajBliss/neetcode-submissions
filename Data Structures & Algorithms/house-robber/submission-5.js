class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // function helper(i) {
        //     if (i >= nums.length) return 0;
        //     return Math.max(helper(i + 1), helper(i + 2) + nums[i]);
        // }
        // return helper(0);

        // const memo = new Int32Array(nums.length).fill(-1);
        // function helper(i) {
        //     if (i >= nums.length) return 0;
        //     if (memo[i] !== -1) {
        //         return memo[i];
        //     }
        //     return (memo[i] = Math.max(helper(i + 1), nums[i] + helper(i + 2)));
        // }
        // return helper(0);

        // const n = nums.length;
        // if (n === 0) return 0;
        // if (n === 1) return nums[0];
        // const dp = new Array(n).fill(0);
        // dp[0] = nums[0];
        // dp[1] = Math.max(nums[0], nums[1]);
        // for (let i = 2; i < n; i++) {
        //     dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
        // }
        // return dp[n - 1];

        let temp1 = 0;
        let temp2 = 0;
        for (const num of nums) {
            const temp = Math.max(num + temp1, temp2);
            temp1 = temp2;
            temp2 = temp;
        }
        return temp2;
    }
}
