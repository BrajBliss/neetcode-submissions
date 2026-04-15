class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // []
        // 1 is index : value would be [1, 2, 3];
        // every num appearing 1 times would go in freq[1]
        const count = {};
        const freq = Array.from({length: nums.length + 1}, () => []);
        for (const n of nums) {
            count[n] = 1 + (count[n] || 0);
        }
        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }
        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) return res;
            }
        }
    }
}
