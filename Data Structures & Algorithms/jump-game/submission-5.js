class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        function explore(i) {
            if (i >= nums.length - 1) return true;
            const maxJump = nums[i];
            for (let step = 1; step <= maxJump; step++) {
                if (explore(i + step)) return true;
            }
            return false;
        }
        return explore(0);
    }
}
