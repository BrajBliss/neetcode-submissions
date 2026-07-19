class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (!nums || !nums.length) {
            return 0;
        }
        let prev2 = 0;
        let prev1 = nums[0];
        for (let i = 2; i <= nums.length; i++) {
            const take = prev2 + nums[i - 1];
            const skip = prev1;
            const current = Math.max(skip, take);
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }
}
