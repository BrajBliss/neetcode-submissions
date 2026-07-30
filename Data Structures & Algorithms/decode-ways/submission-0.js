class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (!s || s[0] === '0') return 0;
        function dp(i) {
            if (i <= 1) return 0;
            let ways = 0;
            if (s[i - 1] !== '0') {
                ways += dp(i - 1);
            }
            let doubleDigit = parseInt(s.substring(i - 2, i));
            if (doubleDigit >= 10 && doubleDigit <= 26) {
                ways += dp(i - 2);
            }
            return ways;
        }
        return dp(s.length);
    }
}
