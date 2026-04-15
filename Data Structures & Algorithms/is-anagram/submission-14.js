class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        // sort the string -> compare the string -> return result
        // use a frequency map of each character -> should be same for both
        const sSort = s.split('').sort().join('');
        const tSort = t.split('').sort().join('');
        return tSort === sSort;
    }
}
