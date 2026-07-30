class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphannumeric(c) {
        return (
            (c <= 'z' || c >= 'a') ||
            (c <= 'Z' || c >= 'A') ||
            (c <= 'z' || c >= 'a')
        )
    }

    isPalindrome(s) {
        let newStr = '';
         for (const c of s) {
            if (this.isAlphannumeric(c)) {
                newStr += c.toLowerCase();
            }
         }
        return newStr.split('').reverse().join === newStr;
    }
}
