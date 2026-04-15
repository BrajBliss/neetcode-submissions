class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let l = 0, res = 0;
        for (let r = 0; r < s.length; r++) {
            while (set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }
            set.add(s[r]);
            res = Math.max(res, set.size)
        }
        return res;
    }
}
