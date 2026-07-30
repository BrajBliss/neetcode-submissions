class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        function solve(target) {
            if (target === '') return true;
            for (const word of wordDict) {
                if (target.startsWith(word)) {
                    if (solve(target.slice(word.length))) {
                        return true;
                    }
                }
            }
            return false;
        }
        return solve(s);
    }
}
