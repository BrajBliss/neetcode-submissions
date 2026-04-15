class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // create a set
        // compare the length of the set and the array
        // true if not equal
        return new Set(nums).size < nums.length;
    }
}
