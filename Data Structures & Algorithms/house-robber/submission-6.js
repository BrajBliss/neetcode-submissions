class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // function helper(i) {
        //     if (i >= nums.length) {
        //         return 0;
        //     }
        //     const robCurrent = nums[i] + helper(i + 2);
        //     const skipCurrent = helper(i + 1);
        //     return Math.max(robCurrent, skipCurrent);
        // }
        // return helper(0);

        let prev2 = 0;
        let prev1 = 0;
        for (const num of nums) {
            const current = Math.max(prev1, prev2 + num);
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }
}
