class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // same characters from s1 exist in s2
        // consequitive but order can be different
        s1 = s1.split('').sort().join('');
        for (let i = 0; i < s2.length; i++) {
            for (let j = i; j < s2.length; j++) {
                const subStr = s2.slice(i, j + 1).split('').sort().join('');
                if (s1 === subStr) return true;
            }
        }
        return false;
    }
}
