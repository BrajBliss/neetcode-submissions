class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // set -> unique elements
        return new Set(nums).size < nums.length;
    }
}
