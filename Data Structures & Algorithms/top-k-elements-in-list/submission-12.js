class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
         for (const num of nums) {
            map.set(num, 1 + (map.get(num) || 0));
         }
         const sortedArr = [...map].sort((a, b) => b[1] - a[1]);
         return sortedArr.slice(0, k).map(pair => pair[0])
        return [];
    }
}
