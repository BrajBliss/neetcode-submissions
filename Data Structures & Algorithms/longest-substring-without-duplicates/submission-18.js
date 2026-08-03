class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;
        const n = s.length;
        const map = new Map();
        let l = 0;
        for (let r = 0; r < n; r++) {
            if (map.has(s[r])) {
                l = Math.max(l, 1 + map.get(s[r]));
            }
            map.set(s[r], r);
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
