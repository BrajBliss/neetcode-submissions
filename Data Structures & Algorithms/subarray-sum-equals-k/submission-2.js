class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
       let count = 0;
       let currSum = 0;
       const map = new Map();
       map.set(0, 1);
       for (const num of nums) {
        currSum += num;
        if (map.has(currSum - k)) {
            count += map.get(currSum - k);
        }
        map.set(currSum, 1 + (map.get(currSum) || 0))
       }
       return count;
    }
}
