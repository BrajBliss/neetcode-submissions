class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const n = nums.length;
        if (n === 0) return 0;
        if (n === 1) return 1;
        const uniqueNums = new Set(nums);
        let max = 1;
        uniqueNums.forEach(item => {
            if (uniqueNums.has(item - 1)) max++;
        })
        return max;
    }
}
