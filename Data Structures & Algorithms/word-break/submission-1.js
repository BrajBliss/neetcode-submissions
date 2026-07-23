class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const memo = {};
        function solve(target) {
            if (!target) return true;
            if (target in memo) return memo[target];
            for (const word of wordDict) {
                if (target.startsWith(word)) {
                    if (solve(target.slice(word.length))) {
                        return memo[target] = true;
                    }
                }
            }
            return memo[target] = false;
        }
        return solve(s);
    }
}
