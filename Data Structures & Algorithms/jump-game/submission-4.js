class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let i = 0;
        const n = nums.length;
        while (i < n) {
            if (i === n - 1) {
                return true;
            }
            const jump = nums[i];
            if (jump === 0) return false;
            i += jump;
        }
        return false;
    }
}
