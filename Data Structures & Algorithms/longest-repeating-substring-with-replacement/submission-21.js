class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // let res = 0;
        // const n = s.length;
        // for (let i = 0; i < n; i++) {
        //     const map = new Map();
        //     let max = 0;
        //     for (let j = i; j < n; j++) {
        //         const sj = s[j];
        //         map.set(sj, 1 + map.get(sj || 0));
        //         max = Math.max(max, map.get(sj));
        //         const length = j - i + 1;
        //         if (length - max <= k) {
        //             res = Math.max(res, length);
        //         }
        //     }
        // }
        // return res;

        const n = s.length;
        let res = 0;
        const count = new Map();
        let l = 0;
        let max = 0;
        for (let r = 0; r < n; r++) {
            count.set(s[r], 1 + (count.get(s[r]) || 0));
            max = Math.max(max, count.get(s[r]));
            if (r - l + 1 - max > k) {
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
