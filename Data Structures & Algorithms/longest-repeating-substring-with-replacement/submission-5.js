class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        for (let i = 0; i < s.length; i++) {
            const count = new Map();
            let temp = 0;
            for (let j = i; j < s.length; j++) {
                count.set(s[j], 1 + (count.get(s[j]) || 0));
                temp = Math.max(temp, count.get(s[j]));
                if (j - i + 1 - temp <= k) {
                    res = Math.max(res, j - i + 1)
                }
            }
        }
        return res;
    }
}
