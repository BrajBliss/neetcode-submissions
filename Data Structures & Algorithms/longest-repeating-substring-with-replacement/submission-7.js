class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0, count = new Map(), l = 0, max = 0;
        for (let r = 0; r < s.length; r++) {
            count.set(s[r], 1 + (count.get(s[r]) || 0));
            max = Math.max(max, count.get(s[r]));
            while (r - l + 1 - max > k) {
                count.set(s[r], count.get(s[l]) - 1);
                l++;
            }
            res = Math.max(res, r - l + 1)
        }
        return res;
    }
}
