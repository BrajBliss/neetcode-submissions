class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(nums, k) {
        nums.sort((a, b) => (a[0]**2 + a[1]**2) - (b[0]**2 + b[1]**2));
        return nums.slice(0 ,k);
    }
}
