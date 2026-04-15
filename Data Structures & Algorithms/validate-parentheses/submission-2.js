class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // set of open or close bracked
        // encounter the opposite
        // should have nothing finally
        const stack = [];
        for (const c of s) {
            if (c === '(') stack.push(')');
            else if (c === '[') stack.push(']');
            else if (c === '{') stack.push('}');
            else if (stack.length === 0 || stack.pop() !== c) return false;
        }
        return stack.length === 0;
    }
}
