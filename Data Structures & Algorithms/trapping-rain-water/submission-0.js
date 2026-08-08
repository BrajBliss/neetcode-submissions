class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let totalWater = 0;
        const n = height.length;
        for (let i = 0; i < n; i++) {
            let maxLeft = 0;
            let maxRight = 0;
            for (let l = 0; l <= i; l++) {
                maxLeft = Math.max(maxLeft, height[l]);
            }
            for (let r = i; r < n; r++) {
                maxRight = Math.max(maxRight, height[r]);
            }
            totalWater += Math.min(maxLeft, maxRight) - height[i];
        }
        return totalWater;
    }
}
