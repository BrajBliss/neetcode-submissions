class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        const n = s.length;
        for (let i = 0; i < n; i++) {
            const count = new Map();
            let max = 0;
            for (let j = i; j < n; j++) {
                count.set(s[j], 1 + (count.get(s[j]) || 0));
                max = Math.max(max, count.get(s[j]));
                if (j - i + 1 - max <= k) {
                    res = Math.max(res, j - i + 1);
                }
            }
        }
        return res;
    }
}
