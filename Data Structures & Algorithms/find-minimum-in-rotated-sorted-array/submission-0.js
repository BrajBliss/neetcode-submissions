class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let res = Infinity;
        for (const num of nums) {
            res = Math.min(res, num);
        }
        return res;
    }
}
