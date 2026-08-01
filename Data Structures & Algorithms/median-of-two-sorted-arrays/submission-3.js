class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const m = nums1.length;
        const n = nums2.length;
        const total = m + n;
        const targetIdx = Math.floor(total / 2);
        let i = 0,
            j = 0,
            prev = 0,
            curr = 0;
        for (let step = 0; step <= targetIdx; step++) {
            prev = curr;
            if (i < m && (j >= n || nums1[i] <= nums2[j])) {
                curr = nums1[i];
                i++;
            } else {
                curr = nums2[j];
                j++;
            }
        }
        if (total % 2 === 0) {
            return (prev + curr) / 2;
        }
        return curr;
    }
}
