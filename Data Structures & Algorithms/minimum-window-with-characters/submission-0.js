class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";
        const targetMap = {};
        for (const c of t) {
            targetMap[c] = 1 + (targetMap[c] || 0);
        }
        function isValid(sub) {
            const subMap = {};
            for (const c of sub) {
                subMap[c] = 1 + (subMap[c] || 0);
            }
            for (const c in targetMap) {
                if (targetMap[c] > (subMap[c] || 0)) {
                    return false;
                }
            }
            return true;
        }
        let minStr = '';
        let minLength = Infinity;
        const n = s.length;
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                const sub = s.slice(i, j + 1);
                if (isValid(sub) && sub.length < minLength) {
                    minLength = sub.length;
                    minStr = sub;
                }
            }
        }
        return minStr;
    }
}
