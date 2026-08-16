class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // const sortedS = s.split("").sort().join("");
        // const sortedT = t.split("").sort().join("");
        // return sortedS === sortedT;
        if (s.length !== t.length) return false;
        const countS = new Map();
        const countT = new Map();
        for (let i = 0; i < s.length; i++) {
            const si = s[i];
            const ti = t[i];
            countS.set(si, 1 + (countS.get(si) || 0));
            countT.set(ti, 1 + (countT.get(ti) || 0));
        }
        for (const key of countS.keys()) {
            if (countS.get(key) !== countT.get(key)) {
                return false;
            }
        }
        return true;
    }
}
