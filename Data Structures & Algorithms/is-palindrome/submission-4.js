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
        let l = 0, r = s.length - 1;
        while (l < r) {
            while (l < r && !this.isAlphanumeric(s[l])) l++;
            while (r > l && !this.isAlphanumeric(s[r])) r--;
            if  (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }
        return true;
}}
