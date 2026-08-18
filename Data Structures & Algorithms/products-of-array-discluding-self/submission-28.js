class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // const n = nums.length;
        // const res = new Array(n).fill(1);
        // for (let i = 0; i < n; i++) {
        //     for (let j = 0; j < n; j++) {
        //         if (i !== j) {
        //             res[i] *= nums[j];
        //         }
        //     }
        // }
        // return res;

        // let prod = 1;
        // let zeroCount = 0;
        // for (const num of nums) {
        //     if (num !== 0) {
        //         prod *= num;
        //     } else {
        //         zeroCount++;
        //     }
        // }
        // const n = nums.length;
        // if (zeroCount > 1) {
        //     return new Array(n).fill(0);
        // }
        // const res = new Array(n);
        // for (let i = 0; i < n; i++) {
        //     if (zeroCount > 0) {
        //         res[i] = nums[i] === 0 ? prod : 0;
        //     } else {
        //         res[i] = prod / nums[i];
        //     }
        // }
        // return res;

         const n = nums.length;
         const res = new Array(n).fill(1);
         for (let i = 1; i < n; i++) {
            res[i] = res[i - 1] * nums[i - 1];
         }
         let postFix = 1;
         for (let i = n - 1; i >= 0; i--) {
            res[i] *= postFix;
            postFix *= nums[i];
         }
         return res;
    }
}
