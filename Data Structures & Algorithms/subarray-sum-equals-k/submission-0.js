class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0;
        const n = nums.length;
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                let sum = 0;
                for (let m = i; m <= j; m++) {
                    sum += nums[m];
                }
                if (sum === k) count++;
            }
        }
        return count;
    }
}
