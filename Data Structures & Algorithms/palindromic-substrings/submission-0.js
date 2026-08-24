class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        // let res = 0;
        // function helper(start, end) {
        //     let left = start,
        //         right = end;
        //     while (left < right) {
        //         if (s[left] !== s[right]) {
        //             return false;
        //         }
        //         left++;
        //         right--;
        //     }
        //     return true;
        // }
        // const n = s.length;
        // for (let i = 0; i < n; i++) {
        //     for (let j = i; j < n; j++) {
        //         if (helper(i, j)) {
        //             res++;
        //         }
        //     }
        // }
        // return res;

        let res = 0;
        function helper(left, right) {
            let count = 0;
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                count++;
                left--;
                right++;
            }
            return count;
        }
        for (let i = 0; i < s.length; i++) {
            res += helper(i, i);
            res += helper(i, i + 1);
        }
        return res;
    }
}
