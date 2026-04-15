class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = new Set();
        nums.sort((a, b) => a - b);
        const n = nums.length;
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for (let k = j = 1; k < n; k++) {
                    const sum = nums[i] + nums[j] + nums[k];
                    if (sum === 0) res.add(JSON.stringify([nums[i], nums[j], nums[k]]))
                }
            }
        }
        return Array.from(res).map(item => JSON.parse(item));
    }
}
