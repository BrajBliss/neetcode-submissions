class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        const n = nums.length;
        function minJumps(i) {
            if (i >= n - 1) return 0;
            let min = Infinity;
            const maxJump = nums[i];
            for (let start = 1; start <= maxJump; step++) {
                min = Math.min(min, 1 + minJumps(i + step));
            }
            return min;
        }
        return minJumps(0);
    }
}
