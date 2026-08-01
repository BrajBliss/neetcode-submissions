class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const countS = new Map();
        const countT = new Map();
        for (let i = 0; i < s.length; i++) {
            const sChar = s[i];
            const tChar = t[i];
            countS.set(sChar, 1 + (countS.get(sChar) || 0));
            countT.set(tChar, 1 + (countT.get(tChar) || 0));
        }
        for (const key of countS.keys()) {
            if (countS.get(key) !== countT.get(key)) {
                return false;
            }
        }
        return true;
    }
}
