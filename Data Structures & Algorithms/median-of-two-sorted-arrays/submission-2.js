class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const merged = [...nums1, ...nums2].sort((a, b) => a - b);
        const total = merged.length;
        const mid = Math.floor(total / 2);
        if (total % 2 === 0) {
            return (merged[mid - 1] + merged[mid]) / 2;
        }
        return merged[mid];
    }
}
