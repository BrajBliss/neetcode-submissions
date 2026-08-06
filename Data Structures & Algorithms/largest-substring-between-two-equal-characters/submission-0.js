class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxLengthBetweenEqualCharacters(s) {
        let res = -1;
        const map = new Map();
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (map.has(char)) {
                res = Math.max(res, i - map.get(char) - 1)
            } else {
                map.set(char, i);
            }
        }
        return res;
    }
}
