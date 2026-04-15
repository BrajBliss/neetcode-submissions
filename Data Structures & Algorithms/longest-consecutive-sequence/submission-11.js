class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0;
        let res = 0, i = 0, streak = 0, curr = nums[0];
        nums.sort((a, b) => a - b);
        while (i < nums.length) {
            if (curr !== nums[i]) {
                streak = 0;
                curr = nums[i];
            }
            while (i < nums.length && nums[i] === curr) {
                i++;
            }
            streak++;
            curr++;
            res = Math.max(res, streak)
        }
        return res;
    }
}
