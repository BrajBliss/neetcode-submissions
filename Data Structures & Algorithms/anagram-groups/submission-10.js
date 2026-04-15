class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // return all anagrams grouped together
        // key:value, key is the base string and values are the anagrams
        // either create sorted string and values
        // or filled array frequency and values
        const res = {};
        // for (const s of strs) {
        //     const sortedS = s.split('').sort().join('');
        //     if (!res[sortedS]) res[sortedS] = [];
        //     res[sortedS].push(s)
        // }
        for (const s of strs) {
            const count = new Array(26).fill(0);
            for (const c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(',');
            if (!res[key]) res[key] = [];
            res[key].push(s);
        }
        return Object.values(res);
    }
}
