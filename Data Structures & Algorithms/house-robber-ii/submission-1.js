class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // const n = nums.length;
        // if (n === 0) return 0;
        // if (n === 1) return nums[0];
        // function dfs(i, touchLast) {
        //     if (i >= n || (flag && i === n - 1)) {
        //         return 0;
        //     }
        //     return Math.max(dfs(i + 1, flag), nums[i] + dfs(i + 2, flag || i === 0));
        // }
        // return Math.max(dfs(0, true), dfs(1, false));

        const n = nums.length;
        if (n === 0) return 0;
        if (n === 1) return nums[0];
        function helper(slicedNums) {
            const m = slicedNums.length;
            const dp = new Array(m).fill(0);
            dp[0] = slicedNums[0];
            dp[1] = Math.max(slicedNums[0], slicedNums[1]);
            for (let i = 2; i < m; i++) {
                dp[i] = Math.max(dp[i - 1], slicedNums[i] + dp[i - 2]);
            }
            return dp[m - 1];
        }
        return Math.max(helper(nums.slice(1)), helper(nums.slice(0, -1)));

        // function helper(slicedNums) {
        //     let temp1 = 0;
        //     let temp2 = 0;
        //     for (const num of slicedNums) {
        //         const temp = Math.max(temp1 + num, temp2);
        //         temp1 = temp2;
        //         temp2 = temp;
        //     }
        //     return temp2;
        // }
        // return Math.max(nums[0], helper(nums.slice(1), nums.slice(0, -1)));
    }
}
