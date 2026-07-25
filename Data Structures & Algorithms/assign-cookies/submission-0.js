class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     */
    findContentChildren(g, s) {
        console.log(s);
        if (!g || !s || !g.length || !s.length )return 0;
        g.sort((a, b) => a - b);
        s.sort((a, b) => a - b);
        let res = 0;
        let i = 0, j = 0;
        while (i < g.length && j < s.length) {
            if (g[i] <= s[j]) {
                res++;
                i++;
            }
            j++;
        }
        return res;
    }
}
