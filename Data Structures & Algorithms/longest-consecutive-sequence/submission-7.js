class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max = 0;
        const set = new Set(nums);
        for (const num of nums) {
            let streak = 0, curr = num;
            while (set.has(curr)) {
                streak++;
                curr++;
            }
            max = Math.max(max, streak);
        }
        return max;
    }
}
