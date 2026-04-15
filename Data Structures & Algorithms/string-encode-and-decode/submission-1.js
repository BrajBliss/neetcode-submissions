class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = '';
        for (const s of strs) {
            str += s.length +'#' + s;
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strs = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            const length = parseInt(str.substring(i, j));
            i = j + 1;
            j = length +
            // 2#HI
            // 0123
            // ij--
            // length 2
            // i = j + 1 = 2 index H
            // j = length + i = 2 + 2 = 4
            strs.push(str.substring(i, j));
            i = j;
        }
        return strs;
    }
}
