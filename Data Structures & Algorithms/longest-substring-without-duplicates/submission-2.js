class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;
        for (let i = 0; i < s.length; i++) {
            const set = new Set();
            for (let j = i; j < s.length; j++) {
                if (set.has(s[j])) break;
                set.add(s[j]);
            }
            res = Math.max(res, set.size)
        }
        return res;
    }
}
