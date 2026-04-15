class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;
        const set = new Set(nums);
        for (const num of nums) {
            if (!set.has(num - 1)) {
                let length = 1;
                while (set.has(num + length)) {
                    length++;
                }
                res = Math.max(res, length)
            }
        }
        return res;
    }
}
