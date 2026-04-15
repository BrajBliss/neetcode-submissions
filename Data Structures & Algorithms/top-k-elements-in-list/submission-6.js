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
            count.set(num, 1 + (count.get(num) || 0))
        }
        const countSortedByFrequency = new Map([...count].sort((a, b) => b[1] - a[1]));
        const arr = [...countSortedByFrequency.keys()]
        return arr.slice(0, k);
    }
}
