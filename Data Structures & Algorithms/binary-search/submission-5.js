class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    binary_search(l ,r, nums, target) {
        if (l > r) return -1;
        const m = l + Math.floor((r - l) / 2);
        if (target === nums[m]) return m;
        return nums[m] > target
            ? this.binary_search(l, m - 1, nums, target)
            : this.binary_search(m + 1, r, nums, target)
    }

    search(nums, target) {
        return this.binary_search(0, nums.length - 1, nums, target);
    }
}
