class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // find the max area between two bars
        // rectangle assumption
        // height will be the height of the shortest bars
        // distance will dist between two bars
        // move the shorter pointer each time to get new area
        let max = 0, l = 0, r = heights.length - 1;
        while (l < r) {
            const height = Math.min(heights[l], heights[r]);
            const width = r - l;
            max = Math.max(max, height * width)
            if (l < r) l++;
            else r--;
        }
        return max;
    }
}
