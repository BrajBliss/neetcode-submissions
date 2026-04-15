class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let res = nums[0], currSum = 0;
        for (const num of nums) {
            if (currSum < 0) currSum = 0;
            currSum += num;
            res = Math.max(res, currSum);
        }
        return res;
    }
}
