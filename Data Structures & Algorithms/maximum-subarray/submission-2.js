class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        const dup = [];
        const n = nums.length;
        for (let i = 0; i < n; i++) {
            if (nums[i] !== 0) dup.push(nums[i]);
        }
        while (dup.length < n) {
            dup.push(0);
        }
        for (let i = 0; i < n; i++) {
            nums[i] = dup[i];
        }
    }
}
