class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        // let res = "";
        // let resLength = 0;
        // const n = s.length;
        // for (let i = 0; i < n; i++) {
        //     for (let j = i; j < n; j++) {
        //         let l = i,
        //             r = j;
        //         while (l < r && s[l] === s[r]) {
        //             l++;
        //             r--;
        //         }
        //         if (l >= r && resLength < j - i + 1) {
        //             res = s.slice(i, j + 1);
        //             resLength = j - i + 1;
        //         }
        //     }
        // }
        // return res;

        let resIndex = 0;
        let resLength = 0;
        const n = s.length;
        const dp = Array.from({ length: n }, () => new Array(n).fill(false));
        for (let i = n - 1; i >= 0; i--) {
            for (let j = i; j < n; j++) {
                if (s[i] === s[j] && (j - i + 1 <= 2 || dp[i + 1][j - 1])) {
                    dp[i][j] = true;
                    const length = j - i + 1;
                    if (resLength < length) {
                        resLength = length;
                        resIndex = i;
                    }
                }
            }
        }
        return s.slice(resIndex, resIndex + resLength);
    }
}
