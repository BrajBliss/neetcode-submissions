class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0;
        let sum = 0;
        const map = new Map();
        map.set(0, 1)
        for (const num of nums) {
            sum += num;
            if (map.has(sum - k)) {
                count += map.get(sum - k);
            }
            map.set(sum, 1 + (map.get(sum) || 0))
        }
        return count;
    }
}
