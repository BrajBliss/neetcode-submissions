class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0, l = 0, r = heights.length;
        while (l < r) {
            const height = Math.min(heights[l], heights[r]);
            const width = r - l;
            max = Math.max(max, height*width);
            if (heights[l] < heights[r]) l++;
            else r--;
        }
        return max;
    }
}
