class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        // const n = nums.length;
        // nums.sort((a, b) => a - b);
        // for (let i = 0; i < n; i++) {
        //     if (nums[i] !== i) {
        //         return i;
        //     }
        // }
        // return n;

        // const set = new Set(nums);
        // const n = nums.length;
        // for (let i = 0; i <= n; i++) {
        //     if (!set.has(i)) {
        //         return i;
        //     }
        // }

        const n = nums.length;
        const expectedSum = (n * (n + 1)) / 2;
        let currentSum = 0;
        for (const num of nums) {
            currentSum += num;
        }
        return expectedSum - currentSum;
    }
}
