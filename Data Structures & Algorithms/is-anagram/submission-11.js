class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // sort the string, and compare
        // if (s.length !== t.length) return false;
        // const sortedS = s.split('').sort().join();
        // const sortedT = t.split('').sort().join();
        // return sortedS === sortedT;

        // map with frequency
        // character : frequency
        if (s.length !== t.length) return false;
        const countS = {};
        const countT = {};
        for (let i = 0; i < s.length; i++) {
            countS[s[i]] = 1 + (countS[s[i]] || 0);
            countT[t[i]] = 1 + (countT[t[i]] || 0);
        }
        for (let key in countS) if (countS[key] !== countT[key]) return false;
        return true;
    }
}
