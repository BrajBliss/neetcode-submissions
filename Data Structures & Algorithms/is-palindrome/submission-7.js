class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
   isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }

    isPalindrome(s) {
        let newS = '';
        for (const char of s) {
            if (this.isAlphanumeric(char)) {
                newS += char.toLowerCase();
            }
        }
        return newS === newS.split('').reverse().join('');
    }
}
