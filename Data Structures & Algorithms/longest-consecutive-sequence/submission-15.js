class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let res = 0;
        for (const num of nums) {
            let length = 1;
            while (set.has(num + length)) {
                length++;
            }
            res = Math.max(res, length);
        }
        return res;
    }
}
