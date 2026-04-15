class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let l = 0, r = cleanS.length - 1;
        while (l < r) {
            if (cleanS[l] !== cleanS[r]) return false;
            else {
                l++;
                r--;
            }
        }
        return true;
    }
}
