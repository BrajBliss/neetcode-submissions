class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prod = 1;
        let zeroCount = 0;
        for (const num of nums) {
            if (num !== 0) {
                prod *= num;
            } else {
                zeroCount++;
            }
        }
        const n = nums.length;
        if (zeroCount > 1) {
            return new Array(n).fill(0);
        }
        const res = new Array(n).fill;
        for (let i = 0; i < n; i++) {
            if (zeroCount > 0) {
                res[i] = res[i] === 0 ? prod : 0;
            } else {
                res[i] = prod / nums[i];
            }
        }
        return res;
    }
}
