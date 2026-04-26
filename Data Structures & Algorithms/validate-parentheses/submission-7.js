class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for (const char of s) {
            if (char === '[') stack.push(']');
            else if (char === '(') stack.push(')');
            else if (char === '{') stack.push('}');
            else if (!stack.length || stack.pop() !== char) return false;
        }
        return !stack.length;
    }
}
