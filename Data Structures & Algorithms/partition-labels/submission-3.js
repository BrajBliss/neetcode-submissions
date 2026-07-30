class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const map = new Map();
        const s = S;
        const n = s.length;
        for (let i = 0; i < n; i++) {
            const char = s[i];
            map.set(char, i);
        }
        const res = [];
        let start = 0;
        let end = 0;
        for (let i = 0; i < n; i++) {
            const char = s[i];
            end = Math.max(end, last.get(char));
            if (i === end) {
                res.push(end - start + 1);
                start = i + 1;
            }
        }
        return res;
    }
}
