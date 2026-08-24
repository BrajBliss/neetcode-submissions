class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        // function helper(curr, prev) {
        //     if (curr === nums.length) {
        //         return 0;
        //     }
        //     // op1 - don't include current element
        //     let op1 = helper(curr + 1, prev);
        //     // op2 - include op2 if strictly increasing
        //     let op2 = 0;
        //     if (prev === -1 || nums[curr] > nums[prev]) {
        //         op2 = 1 + helper(curr + 1, curr);
        //     }
        //     return Math.max(op1, op2);
        // }
        // return helper(0, -1);

        const tails = [];
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            let left = 0,
                right = tails.length;
            let insertAt = tails.length;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (tails[mid] < num) {
                    left = mid + 1;
                } else {
                    insertAt = mid;
                    right = mid - 1;
                }
            }
            if (insertAt === tails.length) {
                tails.push(num);
            } else {
                tails[insertAt] = num;
            }
        }
        return tails.length;
    }
}
