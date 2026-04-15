class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for (const each of s) {
            if (each === '(') stack.push(')');
            else if (each === '[') stack.push(']');
            else if (each === '{') stack.push('}');
            else if (!stack.length || stack.pop() !== each) return false;
        }
        return !stack.length;
    }
}
