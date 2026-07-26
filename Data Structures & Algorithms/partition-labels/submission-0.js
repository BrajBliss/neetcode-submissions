class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const map = new Map();
        const n = S.length;
        for (let i = 0; i < n; i++) {
            const char = S[i];
            if (!map.has(char)) {
                map.set(char, [i, i]);
            } else {
                map.get(char)[1] = i;
            }
        }
        const intervals = Array.from(map.values()).sort((a, b) => a[0] - b[0]);
        const res = [];
        let [currStart, currEnd] = intervals[0];
        for (let i = 1; i < intervals.length; i++) {
            const [start, end] = intervals[i];
            if (start <= currEnd) {
                currEnd = Math.max(currEnd, end);
            } else {
                res.push(currEnd - currStart + 1);
                currStart = start;
                currEnd = end;
            }
        }
        res.push(currEnd - currStart + 1);
        return res;
    }
}
