class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // create a frequency map
        // sort the frequency map by frequency
        // return the top topKFrequent
        const count = new Map();
        for (const num of nums) {
            count[num] = 1 + (count[num] || 0);
        }
        console.log(count)
    }
}
