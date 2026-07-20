class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        function solve(i) {
            if (i === 0) {
                return 0;
            }
            return solve(Math.floor(i / 2)) + (i % 2);
        }
        const result = new Array(n + 1);
        for (let i = 0; i < n + 1; i++) {
            result[i] = solve(i);
        }
        return result;
    }
}
