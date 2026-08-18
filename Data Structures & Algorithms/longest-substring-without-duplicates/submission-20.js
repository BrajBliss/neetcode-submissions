class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // let res = 0;
        // const n = s.length;
        // for (let i = 0; i < n; i++) {
        //     const set = new Set();
        //     for (let j = i; j < n; j++) {
        //         if (set.has(s[j])) {
        //             break;
        //         } else {
        //             set.add(s[j]);
        //         }
        //     }
        //     res = Math.max(res, set.size);
        // }
        // return res;

        let res = 0;
        const n = s.length;
        let l = 0;
        const set = new Set();
        for (let r = 0; r < n; r++) {
            while (set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }
            set.add(s[r]);
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
