class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let localSum = 0;
        const n = nums.length;
        const sum = (n * (n + 1)) / 2;
        for (const num of nums) localSum += num;
        return sum - localSum;
    }
}
