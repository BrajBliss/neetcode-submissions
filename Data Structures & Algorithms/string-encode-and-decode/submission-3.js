class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = '';
        for (let s of strs) {
            str += s.length + '#' + s;
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') j++;
            const length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;
            strs.push(str.substring(i, j));
            i = j;
        }
        return strs;
    }
}
