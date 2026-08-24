class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        // function helper(startIndex) {
        //     if (startIndex === s.length) {
        //         return true;
        //     }
        //     for (const word of wordDict) {
        //         const length = word.length;
        //         if (
        //             startIndex + length <= s.length &&
        //             s.slice(startIndex, startIndex + length) === word
        //         ) {
        //             if (helper(startIndex + length)) {
        //                 return true;
        //             }
        //         }
        //     }
        //     return false;
        // }
        // return helper(0);

        const dp = new Array(s.length + 1).fill(false);
        dp[s.length] = true;
        for (let i = s.length - 1; i >= 0; i--) {
            for (const word of wordDict) {
                const length = word.length;
                if (i + length <= s.length && s.slice(i, i + length) === word) {
                    dp[i] = dp[i + length];
                }
                if (dp[i]) break;
            }
        }
        return dp[0];
    }
}
