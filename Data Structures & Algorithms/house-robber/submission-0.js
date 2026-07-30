class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (!nums || !nums.length) {
            return 0;
        }
        function robHelper(i) {
            if (!i) {
                return 0;
            }
            if (i === 1) {
                return nums[0];
            }
            const skip = robHelper(i - 1);
            const take = robHelper(i - 2) + nums[i - 1];
            return Math.max(skip, take);
        }
        return robHelper(nums.length);
    }
}
