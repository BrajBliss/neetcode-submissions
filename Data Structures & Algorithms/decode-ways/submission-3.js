class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (!s || s[0] === "0") return 0;

        let prev = 1; // dp[i - 2]
        let curr = 1; // dp[i - 1]

        for (let i = 2; i <= s.length; i++) {
            let nextWay = 0;

            if (s[i - 1] !== "0") {
                nextWay += curr;
            }

            let doubleDigit = parseInt(s.substring(i - 2, i));
            if (doubleDigit >= 10 && doubleDigit <= 26) {
                nextWay += prev;
            }

            prev = curr;
            curr = nextWay;
        }

        return curr;
    }
}
