class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const set = new Set();
        function backtrack(path, sum) {
            if (sum === target) {
                const sortedPath = [...path].sort((a, b) => a - b);
                set.add(JSON.stringify(sortedPath));
                return;
            }
            if (sum > target) {
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                path.push(nums[i]);
                backtrack(path, sum + nums[i]);
                path.pop();
            }
        }
        backtrack([], 0);
        return Array.from(set).map((item) => JSON.parse(item));
    }
}
