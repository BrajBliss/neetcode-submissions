class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // area of each pair
        // height = shorter one
        // width = distance
        let res = 0 ;
        const n = heights.length;
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                const height = Math.min(heights[i], heights[j]);
                const width = j - i;
                res = Math.max(res, height*width);
            }
        }
        return res;
    }
}
