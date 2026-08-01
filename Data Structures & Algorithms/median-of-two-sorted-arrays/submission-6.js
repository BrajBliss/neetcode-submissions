class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;

        // 1. Always binary search on the smaller array
        if (A.length > B.length) {
            [A, B] = [B, A];
        }

        const total = A.length + B.length;
        // 2. +1 ensures left partition gets the extra element when odd
        const half = Math.floor((total + 1) / 2);

        let left = 0;
        let right = A.length;

        while (left <= right) {
            const i = Math.floor((left + right) / 2); // Cut in A
            const j = half - i; // Cut in B

            // 3. Handle out-of-bound edge cases with Infinity
            const Aleft = i > 0 ? A[i - 1] : -Infinity;
            const Aright = i < A.length ? A[i] : Infinity;
            const Bleft = j > 0 ? B[j - 1] : -Infinity;
            const Bright = j < B.length ? B[j] : Infinity;

            // 4. Check if partition is valid
            if (Aleft <= Bright && Bleft <= Aright) {
                // Odd total length
                if (total % 2 !== 0) {
                    return Math.max(Aleft, Bleft);
                }
                // Even total length
                return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
            } else if (Aleft > Bright) {
                right = i - 1; // Take fewer elements from A
            } else {
                left = i + 1; // Take more elements from A
            }
        }

        return 0;
    }
}
