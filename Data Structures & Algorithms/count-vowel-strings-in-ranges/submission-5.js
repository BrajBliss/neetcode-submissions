class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
        const n = words.length;
        const res = [];
        const pref = new Array(n + 1).fill(0);
        for (let i = 0; i < n; i++) {
            const word = words[i];
            const isValid = vowels.has(word[0]) && vowels.has(word[word.length - 1]);
            pref[i + 1] = pref[i] + (isValid ? 1 : 0);
        }
        for (const [l, r] of queries) {
            res.push(pref[r + 1] - pref[l])
        }
        return res;
    }
}
