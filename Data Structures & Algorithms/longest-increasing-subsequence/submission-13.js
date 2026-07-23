class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const tails = [];
        for (const num of nums) {
            let left = 0;
            let right = tails.length - 1;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (tails[mid] < num) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            if (left === tails.length) {
                tails.push(num);
            } else {
                tails[left] = num;
            }
        }
        return tails.length;
    }
}
