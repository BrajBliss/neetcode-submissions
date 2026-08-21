class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        nums.sort((a, b) => a - b);
        function backtrack(startIndex, currentPath, remainingTarget) {
            if (remainingTarget === 0) {
                res.push([...currentPath]);
                return;
            }
            for (let i = startIndex; i < nums.length; i++) {
                if (nums[i] > remainingTarget) {
                    break;
                }
                currentPath.push(nums[i]);
                backtrack(i, currentPath, remainingTarget - nums[i]);
                currentPath.pop();
            }
        }
        backtrack(0, [], target);
        return res;
    }
}
