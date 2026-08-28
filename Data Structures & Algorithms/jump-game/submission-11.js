class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        // function explore(i) {
        //     if (i >= nums.length - 1) return true;
        //     const maxJump = nums[i];
        //     for (let step = 1; step <= maxJump; step++) {
        //         if (explore(i + step)) return true;
        //     }
        //     return false;
        // }
        // return explore(0);

        // const n = nums.length;
        // const dp = new Array(n).fill(false);
        // dp[n - 1] = true;
        // for (let i = n - 2; i >= 0; i--) {
        //     const maxReach = Math.min(i + nums[i], n - 1);
        //     for (let j = i + 1; j <= maxReach; j++) {
        //         if (dp[j]) {
        //             dp[i] = true;
        //             break;
        //         }
        //     }
        // }
        // return dp[0];

        let maxReach = 0;
        const n = nums.length;
        for (let i = 0; i < n; i++) {
            if (i > maxReach) return false;
            maxReach = Math.max(maxReach, i + nums[i]);
            if (maxReach >= n - 1) return true;
        }
        return false;
    }
}
