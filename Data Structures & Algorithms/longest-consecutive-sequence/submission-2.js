class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const n = nums.length;
        if (n === 0) return 0;
        if (n === 1) return 1;
        let curr = 1, max = 1;
        nums.sort((a, b) => a - b);
        for (let i = 0; i < n - 1; i++) {
            if (nums[i] === nums[i + 1]) continue;
            else if (nums[i] === nums[i + 1] - 1) curr++;
            else {
                max = Math.max(max, curr);
                curr = 1;
            }
        }
        return Math.max(curr, max);
    }
}
