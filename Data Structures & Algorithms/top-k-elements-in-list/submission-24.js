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
        const arr = [...map];
        arr.sort((a, b) => b[1] - a[1]);
        return arr.slice(0, k).map((pair) => pair[0]);
    }
}
