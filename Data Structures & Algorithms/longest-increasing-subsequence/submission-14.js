class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        // function helper(current, prev) {
        //     if (current === nums.length) {
        //         return 0;
        //     }
        //     // op1 - don't include the current element
        //     let op1 = helper(current + 1, prev);
        //     // op2 - include the current element if strictly increasing
        //     let op2 = 0;
        //     if (prev === -1 || nums[current] > nums[prev]) {
        //         op2 = helper(current + 1, current) + 1;
        //     }
        //     return Math.max(op1, op2);
        // }
        // return helper(0, -1);

        const tails = [];
        for (let i = 0; i < nums.length; i++) {
            let left = 0,
                right = tails.length - 1;
            let x = nums[i];
            let insertionIndex = tails.length;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (tails[mid] < x) {
                    left = mid + 1;
                } else {
                    insertionIndex = mid;
                    right = mid - 1;
                }
            }
            if (insertionIndex === tails.length) {
                tails.push(x);
            } else {
                tails[insertionIndex] = x;
            }
        }
        return tails.length;
    }
}
