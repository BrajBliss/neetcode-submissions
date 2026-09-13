class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // if (s.length < t.length) return "";
        // const targetMap = new Map();
        // for (const c of t) {
        //     targetMap.set(c, 1 + (targetMap.get(c) || 0));
        // }
        // function isValid(substring) {
        //     const subMap = new Map();
        //     for (const c of substring) {
        //         subMap.set(c, 1 + (subMap.get(c) || 0));
        //     }
        //     for (const key of targetMap.keys()) {
        //         if (targetMap.get(key) > (subMap.get(key) || 0)) {
        //             return false;
        //         }
        //     }
        //     return true;
        // }
        // let minStr = "",
        //     minLength = Infinity;
        // for (let i = 0; i < s.length; i++) {
        //     for (let j = i; j < s.length; j++) {
        //         const substring = s.slice(i, j + 1);
        //         if (isValid(substring) && substring.length < minLength) {
        //             minLength = substring.length;
        //             minStr = substring;
        //         }
        //     }
        // }
        // return minStr;

        if (s.length < t.length) return "";
        const targetMap = {};
        for (const c of t) {
            targetMap[c] = 1 + (targetMap[c] || 0);
        }
        const required = Object.keys(targetMap).length;
        let formed = 0;
        let minLength = Infinity;
        let minStart = 0;
        let left = 0;
        const windowMap = {};
        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            windowMap[char] = 1 + (windowMap[char] || 0);
            if (targetMap[char] && targetMap[char] === windowMap[char]) {
                formed++;
            }
            while (formed === required) {
                const length = right - left + 1;
                if (length < minLength) {
                    minLength = length;
                    minStart = left;
                }
                const leftChar = s[left];
                windowMap[leftChar]--;
                if (targetMap[leftChar] && windowMap[leftChar] < targetMap[leftChar]) {
                    formed--;
                }
                left++;
            }
        }
        return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);
    }
}
