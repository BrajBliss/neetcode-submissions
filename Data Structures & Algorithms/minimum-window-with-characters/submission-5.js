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
        const targetMap = new Map();
        for (const c of t) {
            targetMap.set(c, 1 + (targetMap.get(c) || 0));
        }
        const required = targetMap.size;
        let formed = 0,
            minLength = Infinity,
            minStart = 0,
            left = 0;
        const windowMap = new Map();
        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            windowMap.set(char, 1 + (windowMap.get(char) || 0));
            if (targetMap.has(char) && targetMap.get(char) === windowMap.get(char)) {
                formed++;
            }
            while (formed === required) {
                const length = right - left + 1;
                if (length < minLength) {
                    minLength = length;
                    minStart = left;
                }
                const leftChar = s[left];
                windowMap.set(leftChar, windowMap.get(leftChar) - 1);
                if (targetMap.has(leftChar) && windowMap.get(leftChar) < targetMap.get(leftChar)) {
                    formed--;
                }
                left++;
            }
        }
        return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);
    }
}
