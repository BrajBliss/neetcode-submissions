class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        function minJumps(i) {
            if (index >= nums.length - 1) return 0;
            let min = Infinity;
            const maxJump = nums[i];
            for (let start = 1; start <= maxJump; step++) {
                min = Math.min(min, 1 + minJumps(step + i));
            }
            return min;
        }
        return minJumps(0);
    }
}
