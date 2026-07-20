class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (!s || s[0] === "0") return 0;
        const n = s.length;
        const memo = new Array(n + 1).fill(-1);
        function dp(i) {
            if (i <= 1) return 1;
            if (memo[i] !== -1) return memo[i];
            let ways = 0;
            if (s[i - 1] !== "0") {
                ways += dp(i - 1);
            }
            let doubleDigit = parseInt(s.substring(i - 2, i));
            if (doubleDigit >= 10 && doubleDigit <= 26) {
                ways += dp(i - 2);
            }
            return memo[i] = ways;
        }
        return dp(s.length);
    }
}
// 1012
