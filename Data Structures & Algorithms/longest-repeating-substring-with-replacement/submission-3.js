class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        for (let i = 0; i < s.length; i++) {
            const map = new Map();
            let temp = 0;
            for (let j = i; j < s.length; j++) {
                map.set(s[j], 1 + (map.get(s[j]) || 0));
                temp = Math.max(temp, map.get(s[j]));
                if (j - i + 1 - temp <= k) {
                    res = Math.max(res, j - i + 1)
                }
            }
        }
        return res;
    }
}
