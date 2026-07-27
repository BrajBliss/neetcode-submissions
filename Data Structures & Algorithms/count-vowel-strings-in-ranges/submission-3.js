class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    fits(word) {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
        return vowels.has(word[0]) && vowels.has(word[word.length - 1]);
    }
    vowelStrings(words, queries) {
        const res = [];
        for (const [l, r] of queries) {
            let count = 0;
            for (let i = l; i <= r; i++) {
                if (this.fits(words[i])) {
                    count++;
                }
            }
            res.push(count);
        }
        return res;
    }
}
