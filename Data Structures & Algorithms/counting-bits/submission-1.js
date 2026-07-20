class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const memo = new Array(n + 1).fill(-1);
        memo[0] = 0;
        function solve(i) {
            if (memo[i] !== -1) {
                return memo[i];
            }
            memo[i] = solve(Math.floor(i / 2)) + (i % 2);
            return memo[i];
        }
        for (let i = 0; i < n + 1; i++) {
            solve(i);
        }
        return memo;
    }
}
