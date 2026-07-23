class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const n = nums.length;
        if (!nums || !n) return 0;
        const memo = new Array(n).fill(-1);
        function solve(i) {
            if (memo[i] !== -1) return memo[i];
            let maxLength = 1;
            for (let j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    maxLength = Math.max(maxLength, solve(j) + 1);
                }
            }
            return memo[i] = maxLength;
        }
        let globalMax = 0;
        for (let i = 0; i < n; i++) {
            globalMax = Math.max(globalMax, solve(i));
        }
        return globalMax;
    }
}
