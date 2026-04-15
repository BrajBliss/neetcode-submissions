class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        for (const num of nums) {
            count[num] = 1 + (count[num] || 0);
        }
        const freq = Array.from({length: nums.length + 1}, () => []);
        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }
        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const f of freq[i]) {
                res.push(f);
                if (res.length === k) return res;
            }
        }
    }
}
