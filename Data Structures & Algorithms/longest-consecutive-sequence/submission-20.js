class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;
        const set = new Set(nums);
        for (const num of set) {
            let streak = 0;
            let curr = num;
            while (set.has(curr)) {
                curr++;
                streak++;
            }
            res = Math.max(res, streak);
        }
        return res;
    }
}
