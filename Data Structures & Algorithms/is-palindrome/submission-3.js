class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    
    isAlphanumeric(c) {
        return (
            (c >= 'a' && c <= 'z') ||
            (c >= 'A' && c <= 'Z') ||
            (c >= '0' && c <= '9')
        )
    }

    isPalindrome(s) {
        let newStr = '';
        for (const c of s) {
            if (this.isAlphanumeric(c)) {
                newStr += c.toLowerCase();
            }
        }
        return newStr === newStr.split('').reverse().join('');
}}
