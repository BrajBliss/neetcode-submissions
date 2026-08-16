class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n = nums.length;
        // for (let i = 0; i < n; i++) {
        //     for (let j = i + 1; j < n; j++) {
        //         if (target === nums[i] + nums[j]) {
        //             return [i, j];
        //         }
        //     }
        // }
        const map = new Map();
        for (let i = 0; i < n; i++) {
            const diff = target - nums[i];
            if (map.has(diff)) {
                return [map.get(diff), i];
            }
            map.set(nums[i], i);
        }
        return [];
    }
}
