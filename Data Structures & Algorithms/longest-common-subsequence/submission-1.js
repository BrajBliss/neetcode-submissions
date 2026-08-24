class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        // function helper(i, j) {
        //     if (i === text1.length || j === text2.length) {
        //         return 0;
        //     }
        //     if (text1[i] === text2[j]) {
        //         return helper(i + 1, j + 1) + 1;
        //     }
        //     return Math.max(helper(i + 1, j), helper(i, j + 1));
        // }
        // return helper(0, 0);

        if (text1.length < text2.length) {
            [text1, text2] = [text2, text1];
        }
        const m = text1.length;
        const n = text2.length;
        let nextR = new Array(n + 1).fill(0);
        for (let i = m - 1; i >= 0; i--) {
            const currR = new Array(n + 1).fill(0);
            for (let j = n - 1; j >= 0; j--) {
                if (text1[i] === text2[j]) {
                    currR[j] = 1 + nextR[j + 1];
                } else {
                    currR[j] = Math.max(nextR[j], currR[j + 1]);
                }
            }
            nextR = currR;
        }
        return nextR[0];
    }
}
