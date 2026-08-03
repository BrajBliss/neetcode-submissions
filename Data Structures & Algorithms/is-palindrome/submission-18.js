class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isValid(c) {
            return (c >= "0" && c <= "9") || (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");
        }
        let i = 0,
            j = s.length - 1;
        while (i < j) {
            while (i < j && !isValid(s[i])) {
                i++;
            }
            while (i < j && !isValid(s[j])) {
                j--;
            }
            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
