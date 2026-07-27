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
        map.set(0, 1);
        for (const num of nums) {
            sum += num;
            const temp = sum - k;
            if (map.has(temp)) {
                count += map.get(temp);
            }
            map.set(sum, 1 + (map.get(sum) || 0))
        }
        return count;
    }
}
