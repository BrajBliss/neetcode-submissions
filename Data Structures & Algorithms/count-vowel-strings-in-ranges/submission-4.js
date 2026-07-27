class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        const res = [];
        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
        for (const [l, r] of queries) {
            let count = 0;
            for (let i = l; i <= r; i++) {
                const word = words[i];
                if (vowels.has(word[0]) && vowels.has(word[word.length - 1])) {
                    count++;
                }
            }
            res.push(count);
        }
        return res;
    }
}
