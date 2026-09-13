class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isValid(c) {
            return (c >= "0" && c <= "9") || (c >= "A" && c <= "Z") || (c >= "a" && c <= "z");
        }
        // let newStr = "";
        // for (const c of s) {
        //     if (isValid(c)) {
        //         newStr += c.toLowerCase();
        //     }
        // }
        // return newStr === newStr.split("").reverse().join("");

        let l = 0,
            r = s.length - 1;
        while (l < r) {
            while (l < r && !isValid(s[l])) {
                l++;
            }
            while (l < r && !isValid(s[r])) {
                r--;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
