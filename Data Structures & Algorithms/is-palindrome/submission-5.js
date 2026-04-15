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
        )
    }

    isPalindrome(s) {
        let cleanedString = '';
        for (const c of s) if (this.isAlphanumeric(c)) cleanedString += c.toLowerCase();
        return cleanedString === cleanedString.split('').reverse().join('');
    }
}
