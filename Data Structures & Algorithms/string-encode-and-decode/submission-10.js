class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (const str of strs) {
            res += str.length + '#' + str;
        }
        return res;
    }
// 'first', 'second'
// 5#first6#second -^
// i = j = 5 (0)
// ij

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') j++;
            const length = parseInt(str.substring(i, j));
            i = j + 1;
            j = length + i;
            res.push(str.substring(i, j));
            i = j;
        }
        return res;
    }
}
