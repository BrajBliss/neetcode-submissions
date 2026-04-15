class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return 1;
        let curr = 1, last = 1;
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) continue;
            else if (nums[i] == nums[i + 1] - 1) curr++;
            else {
                last = Math.max(last, curr);
                curr = 1;
            };
        }
        return Math.max(last, curr);
    }
}