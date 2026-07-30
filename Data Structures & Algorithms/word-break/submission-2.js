class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const dp = new Array(s.length + 1).fill(false);
        dp[0] = true;
        return dp[s.length];
    }
}
