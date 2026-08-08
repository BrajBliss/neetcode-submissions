class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        function backtrack(i, path, sum) {
            if (sum === target) {
                result.push([...path]);
                return;
            }
            if (sum > target) {
                return;
            }
            for (let j = i; j < nums.length; j++) {
                path.push(nums[j]);
                backtrack(j, path, sum + nums[j]);
                path.pop();
            }
        }
        backtrack(0, [], 0);
        return result;
    }
}
