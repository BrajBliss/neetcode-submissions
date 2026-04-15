class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0, l = 0, maxF = 0;
        const count = new Map();
        for (let r = 0; r < s.length; r++) {
            count.set(s[r], 1 + (count.get(s[r]) || 0));
            maxF = Math.max(maxF, count.get(s[r]));
            while (r - l + 1 - maxF > k) {
                count.set(s[l], count.get(s[l]) - 1)
                l++;
            }
            res = Math.max(res, r - l + 1)
        }
        return res;
    }
}
