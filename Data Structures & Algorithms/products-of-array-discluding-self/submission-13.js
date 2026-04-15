class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length);
        let prod = 1, zeroCount = 0;
        for (const num of nums) {
            if (!num) zeroCount++;
            else prod *= num;
        }
        if (zeroCount > 1) {
            return Array(nums.length).fill(0); 
        }
        for (let i = 0; i < nums.length; i++) {
            if (!zeroCount) {
                res[i] = prod / nums[i]
            } else {
                res[i] = nums[i] === 0 ? prod : 0;
            }
        }
        return res;
    }
}
