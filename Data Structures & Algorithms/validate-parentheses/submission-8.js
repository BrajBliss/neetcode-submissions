class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for (const c of s) {
            if (c === '[') stack.push(']');
            else if (c === '(') stack.push(')');
            else if (c === '{') stack.push('}');
            else if (!stack.length || c !== stack.pop()) return false;
        }
        return !stack.length
    }
}
