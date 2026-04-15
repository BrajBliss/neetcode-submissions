class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let prod = 1, zeroCount = 0;
       for (const num of nums) {
        if (num) {
            prod *= num;
        } else zeroCount++;
       }
       if (zeroCount > 1) {
        return new Array(nums.length).fill(0);
       }
       const res = new Array(nums.length);
       for (let i = 0; i < nums.length; i++) {
        if (zeroCount > 0) {
            res[i] = nums[i] === 0 ? prod : 0;
        } else res[i] = prod / nums[i];
       }
       return res;
    }
}
