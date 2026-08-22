class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        function helper(i) {
            if (i >= nums.length) return 0;
            return Math.max(helper(i + 1), helper(i + 2) + nums[i]);
        }
        return helper(0);
    }
}
