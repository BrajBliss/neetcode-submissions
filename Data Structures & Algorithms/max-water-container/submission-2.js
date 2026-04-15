class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const n = heights.length;
        let l = 0, r = n - 1;
        let res = 0;
        while (l < r) {
            const height = Math.min(heights[l], heights[r]);
            const width = r - l;
            const area = height * width;
            res = Math.max(res, area);
            if (heights[l] <= heights[r]) l++;
            else r--;
        }
        return res;
    }
}
