class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
         const count1 = {};
         for (let c of s1) count1[c] = 1 + (count1[c] || 0);
         const need = Object.keys(count1).length;
         for (let i = 0; i < s2.length; i++) {
            const count2 = {};
            let curr = 0;
            for (let j = i; j < s2.length; j++) {
                const c = s2[j];
                count2[c] = 1 + (count2[c] || 0);
                if (count2[c] > (count1[c] || 0)) break;
                if (count2[c] === (count1[c] || 0)) curr++;
                if (curr === need) return true;
            }
         }
        return false;
    }
}
