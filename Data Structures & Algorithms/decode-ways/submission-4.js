class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        // if (!s || s[0] === "0") return 0;
        // const n = s.length;
        // function helper(i) {
        //     if (i === n) return 1;
        //     if (s[i] === "0") return 0;
        //     let ways = helper(i + 1);
        //     if (i + 1 < n) {
        //         const twoDigit = parseInt(s.slice(i, i + 2));
        //         if (twoDigit >= 10 && twoDigit <= 26) {
        //             ways += helper(i + 2);
        //         }
        //     }
        //     return ways;
        // }
        // return helper(0);

        if (!s || s[0] === "0") return 0;
        const n = s.length;
        let next1 = 1; // corresponds to i + 1
        let next2 = 0; // corresponds to i + 2
        for (let i = n - 1; i >= 0; i--) {
            let current = 0;
            if (s[i] !== "0") {
                current += next1;
                if (i + 1 < n) {
                    const twoDigit = parseInt(s.slice(i, i + 2));
                    if (twoDigit >= 10 && twoDigit <= 26) {
                        current += next2;
                    }
                }
            }
            next2 = next1;
            next1 = current;
        }
        return next1;
    }
}
